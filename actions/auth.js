// actions/auth.js
'use server';

import { prisma } from '@/server/db/prisma';

import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import {
	registerSchema,
	forgotPasswordSchema,
	resetPasswordSchema,
} from '@/lib/validations/auth';

import {
	forgotPasswordLimiter,
	otpLimiter,
	otpVerifyLimiter,
	loginLimiter,
} from '@/lib/rate-limit';

import { sendVerificationEmail, sendPasswordResetEmail } from '@/lib/mail';

import { handleServerError } from '@/lib/error-handler';

// ========================================
// REGISTER
// ========================================

export async function registerAction({ email, password }) {
	try {
		registerSchema.parse({
			email,
			password,
		});

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			if (existingUser.isChecked && existingUser.password) {
				throw new Error('Cet e-mail est déjà utilisé.');
			}
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

		const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

		// create/update inactive user
		await prisma.user.upsert({
			where: { email },

			update: {
				password: hashedPassword,
				isChecked: false,
			},

			create: {
				email,
				password: hashedPassword,
				isChecked: false,
				provider: 'credentials',
			},
		});

		// save OTP
		await prisma.verificationCode.upsert({
			where: { email },

			update: {
				code: otpCode,
				expires: expiresAt,
				createdAt: new Date(),
			},

			create: {
				email,
				code: otpCode,
				expires: expiresAt,
			},
		});

		await sendVerificationEmail(email, otpCode);

		return { success: true };
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}

// ========================================
// VERIFY OTP
// ========================================

export async function verifyOtpAction(email, code) {
	try {
		const { success } = await otpVerifyLimiter.limit(email);

		if (!success) {
			throw new Error('Trop de tentatives. Réessayez plus tard.');
		}

		if (!email || !code || code.length !== 6) {
			throw new Error('Code invalide.');
		}

		const record = await prisma.verificationCode.findUnique({
			where: { email },
		});

		if (!record) {
			throw new Error('Code de vérification incorrect.');
		}

		if (record.code !== code) {
			throw new Error('Code de vérification incorrect.');
		}

		if (new Date() > record.expires) {
			throw new Error('Le code est expiré.');
		}

		await prisma.$transaction([
			prisma.user.update({
				where: { email },

				data: {
					isChecked: true,
					emailVerified: new Date(),
				},
			}),

			prisma.verificationCode.delete({
				where: { email },
			}),
		]);

		return { success: true };
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}

// ========================================
// RESEND OTP
// ========================================

export async function resendOtpAction(email) {
	try {
		const { success } = await otpLimiter.limit(email);

		if (!success) {
			throw new Error('Trop de tentatives. Réessayez plus tard.');
		}

		if (!email) {
			throw new Error('Email manquant.');
		}

		const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

		const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

		await prisma.verificationCode.upsert({
			where: { email },

			update: {
				code: otpCode,
				expires: expiresAt,
				createdAt: new Date(),
			},

			create: {
				email,
				code: otpCode,
				expires: expiresAt,
			},
		});

		await sendVerificationEmail(email, otpCode);

		return { success: true };
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}

// ========================================
// FORGOT PASSWORD
// ========================================

export async function forgotPasswordAction(email) {
	try {
		forgotPasswordSchema.parse({
			email,
		});

		const { success } = await forgotPasswordLimiter.limit(email);

		if (!success) {
			throw new Error('Trop de tentatives. Réessayez plus tard.');
		}

		const user = await prisma.user.findUnique({
			where: { email },
		});

		// anti email enumeration
		if (!user) {
			return { success: true };
		}

		// raw token
		const rawToken = crypto.randomBytes(32).toString('hex');

		// hashed token
		const hashedToken = crypto
			.createHash('sha256')
			.update(rawToken)
			.digest('hex');

		const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

		// delete old tokens
		await prisma.passwordResetToken.deleteMany({
			where: { email },
		});

		// save hashed token
		await prisma.passwordResetToken.create({
			data: {
				email,
				token: hashedToken,
				expires: expiresAt,
			},
		});

		// send raw token
		await sendPasswordResetEmail(email, rawToken);

		return { success: true };
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}

// ========================================
// RESET PASSWORD
// ========================================

export async function resetPasswordAction(token, newPassword) {
	try {
		resetPasswordSchema.parse({
			token,
			newPassword,
		});

		// hash incoming token
		const hashedToken = crypto
			.createHash('sha256')
			.update(token)
			.digest('hex');

		const resetRecord = await prisma.passwordResetToken.findUnique({
			where: {
				token: hashedToken,
			},
		});

		if (!resetRecord) {
			throw new Error('Jeton invalide ou expiré.');
		}

		if (new Date() > resetRecord.expires) {
			await prisma.passwordResetToken.delete({
				where: {
					token: hashedToken,
				},
			});

			throw new Error('Le lien est expiré.');
		}

		const hashedPassword = await bcrypt.hash(newPassword, 12);

		await prisma.$transaction([
			prisma.user.update({
				where: {
					email: resetRecord.email,
				},

				data: {
					password: hashedPassword,
					isChecked: true,
					emailVerified: new Date(),
				},
			}),

			prisma.passwordResetToken.delete({
				where: {
					token: hashedToken,
				},
			}),
		]);

		return { success: true };
	} catch (error) {
		throw new Error(handleServerError(error));
	}
}
