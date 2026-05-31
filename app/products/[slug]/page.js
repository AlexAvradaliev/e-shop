import { prisma } from '@/server/db/prisma';

import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductPage({ params }) {
	const product = await prisma.product.findUnique({
		where: {
			slug: params.slug,
		},
	});

	if (!product) {
		return (
			<div
				style={{
					padding: '40px',
				}}
			>
				Product not found.
			</div>
		);
	}

	return (
		<div
			style={{
				padding: '40px',

				display: 'grid',

				gridTemplateColumns: '1fr 1fr',

				gap: '40px',
			}}
		>
			{/* IMAGE */}

			<div>
				<img
					src={product.photos?.[0] || '/placeholder.jpg'}
					alt={product.name}
					style={{
						width: '100%',
						borderRadius: '14px',
					}}
				/>
			</div>

			{/* INFO */}

			<div>
				<div
					style={{
						color: '#666',
						marginBottom: '10px',
					}}
				>
					{product.category}
				</div>

				<h1
					style={{
						fontSize: '42px',
						marginBottom: '20px',
					}}
				>
					{product.name}
				</h1>

				<div
					style={{
						fontSize: '32px',
						fontWeight: 'bold',
						color: '#002d72',
						marginBottom: '20px',
					}}
				>
					€{product.price}
				</div>

				<div
					style={{
						marginBottom: '20px',
						lineHeight: 1.7,
					}}
				>
					{product.description}
				</div>

				<div
					style={{
						marginBottom: '20px',
					}}
				>
					Stock: {product.quantite}
				</div>

				<AddToCartButton product={product} />
			</div>
		</div>
	);
}
