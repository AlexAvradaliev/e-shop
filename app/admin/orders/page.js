import { prisma } from '@/server/db/prisma';

export default async function OrdersPage() {
	const orders = await prisma.order.findMany({
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},

		orderBy: {
			createdAt: 'desc',
		},
	});

	return (
		<div>
			<h1
				style={{
					fontSize: '32px',
					marginBottom: '30px',
					color: '#002d72',
				}}
			>
				Orders Management
			</h1>

			<div
				style={{
					display: 'grid',
					gap: '20px',
				}}
			>
				{orders.map((order) => (
					<div
						key={order.id}
						style={{
							background: 'white',
							borderRadius: '14px',
							padding: '24px',
							boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '20px',
							}}
						>
							<div>
								<h2>
									{order.name} {order.family}
								</h2>

								<div>{order.email}</div>

								<div>{order.phone}</div>
							</div>

							<div>
								<div>
									Payment:{' '}
									<strong>{order.paymentStatus}</strong>
								</div>

								<div>
									Delivery:{' '}
									<strong>{order.deliveryStatus}</strong>
								</div>

								<div>
									Total: <strong>€{order.totalPrice}</strong>
								</div>
							</div>
						</div>

						{/* ITEMS */}

						<div
							style={{
								display: 'grid',
								gap: '12px',
							}}
						>
							{order.items.map((item) => (
								<div
									key={item.id}
									style={{
										display: 'flex',
										justifyContent: 'space-between',

										padding: '12px',

										border: '1px solid #eee',

										borderRadius: '10px',
									}}
								>
									<div>{item.product.name}</div>

									<div>Qty: {item.quantity}</div>

									<div>€{item.price}</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
