'use server';

import { prisma } from '@/server/db/prisma';

import { logAudit } from '@/lib/audit';

// ========================================
// MAKE ADMIN
// ========================================

export async function makeAdminAction(userId) {
	try {
		const user = await prisma.user.update({
			where: {
				id: userId,
			},

			data: {
				role: 'admin',
			},
		});

		await logAudit({
			action: 'MAKE_ADMIN',

			userEmail: user.email,
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error("Impossible de promouvoir l'utilisateur.");
	}
}

// ========================================
// REMOVE ADMIN
// ========================================

export async function removeAdminAction(userId) {
	try {
		const user = await prisma.user.update({
			where: {
				id: userId,
			},

			data: {
				role: 'user',
			},
		});

		await logAudit({
			action: 'REMOVE_ADMIN',

			userEmail: user.email,
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error('Impossible de retirer le rôle admin.');
	}
}

// ========================================
// DEACTIVATE USER
// ========================================

export async function deactivateUserAction(userId) {
	try {
		const user = await prisma.user.update({
			where: {
				id: userId,
			},

			data: {
				isActive: false,
			},
		});

		await logAudit({
			action: 'DEACTIVATE_USER',

			userEmail: user.email,
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error("Impossible de désactiver l'utilisateur.");
	}
}

// ========================================
// ACTIVATE USER
// ========================================

export async function activateUserAction(userId) {
	try {
		const user = await prisma.user.update({
			where: {
				id: userId,
			},

			data: {
				isActive: true,
			},
		});

		await logAudit({
			action: 'ACTIVATE_USER',

			userEmail: user.email,
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error("Impossible d'activer l'utilisateur.");
	}
}
