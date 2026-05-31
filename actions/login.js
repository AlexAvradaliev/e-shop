'use server';

import { loginLimiter } from '@/lib/rate-limit';
import { loginSchema } from '@/lib/validations/auth';
import { prisma } from '@/server/db/prisma';
import bcrypt from 'bcryptjs';
import { handleServerError } from '@/lib/error-handler';
import { logAudit } from '@/lib/audit';

export async function loginAction({ email, password }) {
	try {
		// validation
		loginSchema.parse({
			email,
			password,
		});

		// rate limit
		const { success } = await loginLimiter.limit(email);

		if (!success) {
			throw new Error('Trop de tentatives de connexion.');
		}

		// user
		const user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user || !user.password) {
			await logAudit({
				action: 'LOGIN_FAILED',

				userEmail: email,

				metadata: {
					reason: 'USER_NOT_FOUND',
				},
			});

			throw new Error('Utilisateur introuvable.');
		}

		// email verified
		if (!user.isChecked) {
			throw new Error('NOT_VERIFIED');
		}

		// password
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			await logAudit({
				action: 'LOGIN_FAILED',

				userEmail: email,

				metadata: {
					reason: 'WRONG_PASSWORD',
				},
			});

			throw new Error('Mot de passe incorrect.');
		}

		await logAudit({
			action: 'LOGIN_SUCCESS',

			userEmail: email,
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}
