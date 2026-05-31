import { prisma } from '@/server/db/prisma';

import {
	makeAdminAction,
	removeAdminAction,
	deactivateUserAction,
	activateUserAction,
} from '@/actions/admin';

export default async function UsersPage({ searchParams }) {
	const search = searchParams?.search || '';

	const users = await prisma.user.findMany({
		where: {
			OR: [
				{
					email: {
						contains: search,
						mode: 'insensitive',
					},
				},
			],
		},

		orderBy: {
			createdAt: 'desc',
		},

		take: 50,
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
				Users Management
			</h1>

			{/* SEARCH */}

			<form
				style={{
					marginBottom: '25px',
				}}
			>
				<input
					type='text'
					name='search'
					placeholder='Search user email...'
					defaultValue={search}
					style={{
						width: '100%',
						maxWidth: '400px',
						padding: '12px 16px',
						borderRadius: '10px',
						border: '1px solid #ddd',
						fontSize: '15px',
					}}
				/>
			</form>

			{/* TABLE */}

			<div
				style={{
					background: 'white',
					borderRadius: '14px',
					overflow: 'hidden',
					boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
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
							<th style={thStyle}>Email</th>

							<th style={thStyle}>Role</th>

							<th style={thStyle}>Status</th>

							<th style={thStyle}>Actions</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user) => (
							<tr
								key={user.id}
								style={{
									borderBottom: '1px solid #eee',
								}}
							>
								<td style={tdStyle}>{user.email}</td>

								<td style={tdStyle}>
									<span
										style={{
											padding: '6px 12px',

											borderRadius: '999px',

											background:
												user.role === 'admin'
													? '#ffe0b2'
													: '#e3f2fd',

											color:
												user.role === 'admin'
													? '#e65100'
													: '#1565c0',

											fontSize: '13px',

											fontWeight: 'bold',
										}}
									>
										{user.role}
									</span>
								</td>

								<td style={tdStyle}>
									{user.isActive
										? '✅ Active'
										: '❌ Disabled'}
								</td>

								<td style={tdStyle}>
									<div
										style={{
											display: 'flex',
											gap: '10px',
											flexWrap: 'wrap',
										}}
									>
										{/* ROLE */}

										{user.role === 'user' ? (
											<form
												action={async () => {
													'use server';

													await makeAdminAction(
														user.id,
													);
												}}
											>
												<button style={btnStyle}>
													Make Admin
												</button>
											</form>
										) : (
											<form
												action={async () => {
													'use server';

													await removeAdminAction(
														user.id,
													);
												}}
											>
												<button style={btnStyle}>
													Remove Admin
												</button>
											</form>
										)}

										{/* ACTIVE */}

										{user.isActive ? (
											<form
												action={async () => {
													'use server';

													await deactivateUserAction(
														user.id,
													);
												}}
											>
												<button
													style={{
														...btnStyle,
														background: '#c62828',
													}}
												>
													Disable
												</button>
											</form>
										) : (
											<form
												action={async () => {
													'use server';

													await activateUserAction(
														user.id,
													);
												}}
											>
												<button
													style={{
														...btnStyle,
														background: '#2e7d32',
													}}
												>
													Activate
												</button>
											</form>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

// ========================================
// STYLES
// ========================================

const thStyle = {
	padding: '16px',

	textAlign: 'left',

	fontSize: '14px',
};

const tdStyle = {
	padding: '16px',

	fontSize: '14px',
};

const btnStyle = {
	border: 'none',

	background: '#002d72',

	color: 'white',

	padding: '8px 14px',

	borderRadius: '8px',

	cursor: 'pointer',

	fontSize: '12px',
};
