'use server';

import { prisma } from '@/server/db/prisma';

import { stripe } from '@/lib/stripe';

import { logAudit } from '@/lib/audit';

export async function createOrderAction(data) {
	try {
		// ========================================
		// CREATE ORDER
		// ========================================

		const order = await prisma.order.create({
			data: {
				name: data.name,

				family: data.family,

				email: data.email,

				phone: data.phone,

				address: data.address,

				city: data.city,

				zipCode: data.zipCode,

				billingAddress: data.billingAddress,

				billingCity: data.billingCity,

				billingZipCode: data.billingZipCode,

				metodPayment: data.metodPayment,

				deliveryMethod: data.deliveryMethod,

				deliveryProvider: data.deliveryProvider,

				paymentStatus: 'unpaid',

				deliveryStatus: 'unshipped',

				totalPoid: data.totalPoid,

				priceShipping: data.priceShipping,

				totalPrice: data.totalPrice,

				items: {
					create: data.items.map((item) => ({
						productId: item.id,

						quantity: item.quantity,

						price: item.price,
					})),
				},
			},
		});

		// ========================================
		// STRIPE SESSION
		// ========================================

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],

			mode: 'payment',

			line_items: data.items.map((item) => ({
				price_data: {
					currency: 'eur',

					product_data: {
						name: item.name,
					},

					unit_amount: Math.round(item.price * 100),
				},

				quantity: item.quantity,
			})),

			success_url: `${process.env.NEXTAUTH_URL}/success?orderId=${order.id}`,

			cancel_url: `${process.env.NEXTAUTH_URL}/cart`,
		});

		await logAudit({
			action: 'ORDER_CREATED',

			metadata: {
				orderId: order.id,

				total: order.totalPrice,
			},
		});

		return {
			success: true,

			checkoutUrl: session.url,
		};
	} catch (error) {
		console.error(error);

		throw new Error('Impossible de créer la commande.');
	}
}
