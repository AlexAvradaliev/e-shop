import { prisma } from '@/server/db/prisma';

export default async function AdminPage() {
	const [usersCount, logsCount, failedLogins] = await Promise.all([
		prisma.user.count(),

		prisma.auditLog.count(),

		prisma.auditLog.count({
			where: {
				action: 'LOGIN_FAILED',
			},
		}),
		prisma.product.count({
			where: {
				quantite: {
					lte: 5,
				},
			},
		}),
	]);

	return (
		<div>
			<h1
				style={{
					fontSize: '34px',
					marginBottom: '30px',
					color: '#002d72',
				}}
			>
				Dashboard
			</h1>

			{/* STATS */}

			<div
				style={{
					display: 'grid',

					gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',

					gap: '20px',

					marginBottom: '40px',
				}}
			>
				<Card
					title='Users'
					value={usersCount}
				/>

				<Card
					title='Audit Logs'
					value={logsCount}
				/>

				<Card
					title='Failed Logins'
					value={failedLogins}
				/>
				<Card
					title='Low Stock'
					value={lowStockProducts}
				/>
			</div>

			{/* RECENT LOGS */}

			<RecentLogs />
		</div>
	);
}

// ========================================
// CARD
// ========================================

function Card({ title, value }) {
	return (
		<div
			style={{
				background: 'white',
				borderRadius: '14px',
				padding: '28px',
				boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
			}}
		>
			<div
				style={{
					color: '#666',
					marginBottom: '10px',
				}}
			>
				{title}
			</div>

			<div
				style={{
					fontSize: '36px',
					fontWeight: 'bold',
					color: '#002d72',
				}}
			>
				{value}
			</div>
		</div>
	);
}

// ========================================
// RECENT LOGS
// ========================================

async function RecentLogs() {
	const logs = await prisma.auditLog.findMany({
		orderBy: {
			createdAt: 'desc',
		},

		take: 10,
	});

	return (
		<div
			style={{
				background: 'white',
				borderRadius: '14px',
				padding: '30px',
				boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
			}}
		>
			<h2
				style={{
					marginBottom: '20px',
					color: '#002d72',
				}}
			>
				Recent Activity
			</h2>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '14px',
				}}
			>
				{logs.map((log) => (
					<div
						key={log.id}
						style={{
							paddingBottom: '12px',
							borderBottom: '1px solid #eee',
						}}
					>
						<div
							style={{
								fontWeight: 'bold',
							}}
						>
							{log.action}
						</div>

						<div
							style={{
								fontSize: '14px',
								color: '#666',
							}}
						>
							{log.userEmail || '-'}
						</div>

						<div
							style={{
								fontSize: '12px',
								color: '#999',
							}}
						>
							{new Date(log.createdAt).toLocaleString()}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
