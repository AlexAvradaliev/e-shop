import Link from 'next/link';

import { prisma } from '@/server/db/prisma';

export default async function ProductsPage() {
	const products = await prisma.product.findMany({
		where: {
			isActive: true,
		},

		orderBy: {
			createdAt: 'desc',
		},
	});

	return (
		<div
			style={{
				padding: '40px',
			}}
		>
			<h1
				style={{
					fontSize: '42px',
					marginBottom: '40px',
					color: '#002d72',
				}}
			>
				Products
			</h1>

			<div
				style={{
					display: 'grid',

					gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',

					gap: '24px',
				}}
			>
				{products.map((product) => (
					<Link
						key={product.id}
						href={`/products/${product.slug}`}
						style={{
							textDecoration: 'none',
							color: 'inherit',
						}}
					>
						<div
							style={{
								background: 'white',
								borderRadius: '14px',
								overflow: 'hidden',
								boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
							}}
						>
							<img
								src={product.photos?.[0] || '/placeholder.jpg'}
								alt={product.name}
								style={{
									width: '100%',
									height: '240px',
									objectFit: 'cover',
								}}
							/>

							<div
								style={{
									padding: '20px',
								}}
							>
								<div
									style={{
										fontSize: '13px',
										color: '#666',
										marginBottom: '6px',
									}}
								>
									{product.category}
								</div>

								<h2
									style={{
										fontSize: '20px',
										marginBottom: '12px',
									}}
								>
									{product.name}
								</h2>

								<div
									style={{
										fontSize: '24px',
										fontWeight: 'bold',
										color: '#002d72',
									}}
								>
									€{product.price}
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
