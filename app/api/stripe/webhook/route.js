import { headers } from 'next/headers';

import { stripe } from '@/lib/stripe';

import { prisma } from '@/server/db/prisma';

import { logAudit } from '@/lib/audit';

export async function POST(req) {
	const body = await req.text();

	const signature = headers().get('stripe-signature');

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			body,

			signature,

			process.env.STRIPE_WEBHOOK_SECRET,
		);
	} catch (error) {
		return Response.json(
			{
				error: 'Webhook signature invalid',
			},

			{
				status: 400,
			},
		);
	}

	// ========================================
	// PAYMENT SUCCESS
	// ========================================

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;

		const orderId = session.success_url?.split('orderId=')[1];

		if (orderId) {
			const order = await prisma.order.update({
				where: {
					id: orderId,
				},

				data: {
					paymentStatus: 'paid',
				},

				include: {
					items: true,
				},
			});

			// ========================================
			// REDUCE STOCK
			// ========================================

			for (const item of order.items) {
				await prisma.product.update({
					where: {
						id: item.productId,
					},

					data: {
						quantite: {
							decrement: item.quantity,
						},
					},
				});
			}

			await logAudit({
				action: 'PAYMENT_SUCCESS',

				metadata: {
					orderId: order.id,

					total: order.totalPrice,
				},
			});
		}
	}

	return Response.json({
		received: true,
	});
}
