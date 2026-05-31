import { prisma } from '@/server/db/prisma';

export async function GET() {
	try {
		const now = new Date();

		// delete expired OTP codes
		await prisma.verificationCode.deleteMany({
			where: {
				expires: {
					lt: now,
				},
			},
		});

		// delete expired password reset tokens
		await prisma.passwordResetToken.deleteMany({
			where: {
				expires: {
					lt: now,
				},
			},
		});

		// delete inactive users older than 24h
		await prisma.user.deleteMany({
			where: {
				isChecked: false,

				createdAt: {
					lt: new Date(Date.now() - 24 * 60 * 60 * 1000),
				},
			},
		});

		return Response.json({
			success: true,
		});
	} catch (error) {
		console.error(error);

		return Response.json(
			{
				success: false,
			},
			{
				status: 500,
			},
		);
	}
}
