import { prisma } from '@/server/db/prisma';

export async function logAudit({
	action,

	userEmail = null,

	ip = null,

	userAgent = null,

	metadata = null,
}) {
	try {
		await prisma.auditLog.create({
			data: {
				action,

				userEmail,

				ip,

				userAgent,

				metadata,
			},
		});
	} catch (error) {
		console.error('AUDIT LOG ERROR:', error);
	}
}
