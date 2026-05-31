import { prisma } from '@/server/db/prisma';

import {
	createProductAction,
	updateProductAction,
	deleteProductAction,
} from '@/actions/products';

import ImageUpload from '@/components/ImageUpload';

export default async function ProductsPage() {
	const products = await prisma.product.findMany({
		include: {
			user: true,
		},

		orderBy: {
			createdAt: 'desc',
		},
	});

	const admins = await prisma.user.findMany({
		where: {
			role: 'admin',
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
				Products Management
			</h1>

			{/* CREATE PRODUCT */}

			<div
				style={{
					background: 'white',
					padding: '30px',
					borderRadius: '14px',
					marginBottom: '40px',
				}}
			>
				<form
					action={async (formData) => {
						'use server';

						await createProductAction({
							name: formData.get('name'),

							brand: formData.get('brand'),

							description: formData.get('description'),

							category: formData.get('category'),

							price: formData.get('price'),

							poid: formData.get('poid'),

							quantite: formData.get('quantite'),

							photos: [formData.get('photo')],

							userId: formData.get('userId'),
						});
					}}
					style={{
						display: 'grid',
						gap: '16px',
						maxWidth: '500px',
					}}
				>
					<input
						name='name'
						placeholder='Product name'
						required
						style={inputStyle}
					/>

					<input
						name='brand'
						placeholder='Brand'
						style={inputStyle}
					/>

					<textarea
						name='description'
						placeholder='Description'
						style={inputStyle}
					/>

					<input
						name='category'
						placeholder='Category'
						required
						style={inputStyle}
					/>

					<input
						name='price'
						type='number'
						step='0.01'
						placeholder='Price'
						required
						style={inputStyle}
					/>

					<input
						name='poid'
						type='number'
						step='0.01'
						placeholder='Weight'
						required
						style={inputStyle}
					/>

					<input
						name='quantite'
						type='number'
						placeholder='Quantity'
						required
						style={inputStyle}
					/>

					<ImageUpload
						onUploaded={(url) => {
							document.getElementById('photo-input').value = url;
						}}
					/>

					<input
						id='photo-input'
						name='photo'
						hidden
					/>

					<select
						name='userId'
						required
						style={inputStyle}
					>
						<option value=''>Select admin</option>

						{admins.map((admin) => (
							<option
								key={admin.id}
								value={admin.id}
							>
								{admin.email}
							</option>
						))}
					</select>

					<button style={btnStyle}>Create Product</button>
				</form>
			</div>

			{/* PRODUCTS TABLE */}

			<div
				style={{
					background: 'white',
					borderRadius: '14px',
					overflow: 'hidden',
				}}
			>
				<table
					style={{
						width: '100%',
						borderCollapse: 'collapse',
					}}
				>
					<thead
						style={{
							background: '#002d72',
							color: 'white',
						}}
					>
						<tr>
							<th style={thStyle}>Product</th>

							<th style={thStyle}>Category</th>

							<th style={thStyle}>Price</th>

							<th style={thStyle}>Quantity</th>

							<th style={thStyle}>Admin</th>

							<th style={thStyle}>Status</th>

							<th style={thStyle}>Actions</th>
						</tr>
					</thead>

					<tbody>
						{products.map((product) => (
							<tr
								key={product.id}
								style={{
									borderBottom: '1px solid #eee',
								}}
							>
								<td style={tdStyle}>{product.name}</td>

								<td style={tdStyle}>{product.category}</td>

								<td style={tdStyle}>€{product.price}</td>

								<td style={tdStyle}>{product.quantite}</td>

								<td style={tdStyle}>{product.user?.email}</td>
								<td style={tdStyle}>
									{product.isActive
										? '✅ Active'
										: '❌ Disabled'}
								</td>

								<td style={tdStyle}>
									<form
										action={async () => {
											'use server';

											await deleteProductAction(
												product.id,
											);
										}}
									>
										<button
											style={{
												...btnStyle,
												background: '#c62828',
											}}
										>
											Delete
										</button>
									</form>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

const inputStyle = {
	padding: '12px',

	borderRadius: '8px',

	border: '1px solid #ddd',
};

const btnStyle = {
	background: '#002d72',

	color: 'white',

	border: 'none',

	padding: '12px 16px',

	borderRadius: '8px',

	cursor: 'pointer',
};

const thStyle = {
	padding: '16px',

	textAlign: 'left',
};

const tdStyle = {
	padding: '16px',
};
