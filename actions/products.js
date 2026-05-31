'use server';

import { prisma } from '@/server/db/prisma';

import { logAudit } from '@/lib/audit';

import slugify from 'slugify';

import { productSchema } from '@/lib/validations/validators';

// ========================================
// CREATE PRODUCT
// ========================================

export async function createProductAction({
	name,

	brand,

	description,

	category,

	price,

	poid,

	quantite,

	photos,

	userId,
}) {
	try {
		productSchema.parse({
			name,

			price,

			quantite,

			poid,

			category,
		});

		const slug = slugify(name, {
			lower: true,
			strict: true,
		});

		const product = await prisma.product.create({
			data: {
				name,

				slug,

				brand,

				description,

				category,

				price: Number(price),

				poid: Number(poid),

				quantite: Number(quantite),

				photos,

				userId,

				isActive: true,
			},
		});

		await logAudit({
			action: 'PRODUCT_CREATED',

			metadata: {
				productId: product.id,

				productName: product.name,
			},
		});

		return {
			success: true,
		};
	} catch (error) {
		console.error(error);

		throw new Error('Impossible de créer le produit.');
	}
}

// ========================================
// DELETE PRODUCT
// ========================================

export async function deleteProductAction(productId) {
	try {
		const product = await prisma.product.delete({
			where: {
				id: productId,
			},
		});

		await logAudit({
			action: 'PRODUCT_DELETED',

			metadata: {
				productId: product.id,

				productName: product.name,
			},
		});

		return {
			success: true,
		};
	} catch (error) {
		throw new Error('Impossible de supprimer le produit.');
	}
}

// ========================================
// UPDATE PRODUCT
// ========================================

export async function updateProductAction({
	productId,

	name,

	brand,

	description,

	category,

	price,

	poid,

	quantite,

	photos,

	isActive,
}) {
	try {
		const slug = slugify(name, {
			lower: true,
			strict: true,
		});

		const product = await prisma.product.update({
			where: {
				id: productId,
			},

			data: {
				name,

				slug,

				brand,

				description,

				category,

				price: Number(price),

				poid: Number(poid),

				quantite: Number(quantite),

				photos,

				isActive,
			},
		});

		await logAudit({
			action: 'PRODUCT_UPDATED',

			metadata: {
				productId: product.id,

				productName: product.name,
			},
		});

		return {
			success: true,
		};
	} catch (error) {
		console.error(error);

		throw new Error('Impossible de modifier le produit.');
	}
}
