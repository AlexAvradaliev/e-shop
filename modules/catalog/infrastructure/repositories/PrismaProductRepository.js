import { prisma } from '@/server/db/prisma';
import { Product } from '../../domain/Product';

export class PrismaProductRepository {
	async findAll({
		page = 1,
		limit = 12,
		search = '',
		category = '',
		brand = '',
	} = {}) {
		const skip = (page - 1) * limit;

		const where = {
			status: 'ACTIVE',
		};

		if (search) {
			where.OR = [
				{
					name: {
						contains: search,
						mode: 'insensitive',
					},
				},
				{
					description: {
						contains: search,
						mode: 'insensitive',
					},
				},
			];
		}

		if (category) {
			where.category = {
				slug: category,
			};
		}

		if (brand) {
			where.brand = {
				slug: brand,
			};
		}

		const [products, total] = await Promise.all([
			prisma.product.findMany({
				where,
				skip,
				take: limit,
				orderBy: {
					createdAt: 'desc',
				},
			}),

			prisma.product.count({
				where,
			}),
		]);

		return {
			products: products.map(
				(product) =>
					new Product({
						id: product.id,
						name: product.name,
						slug: product.slug,
						description: product.description,
						price: product.price,
						sku: product.sku,
						stock: product.stock,
						status: product.status,
					}),
			),

			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
				search,
				category,
			},
		};
	}

	async save(product) {
		return prisma.product.upsert({
			where: {
				id: product.id,
			},

			update: {
				name: product.name,
				slug: product.slug,
				description: product.description,
				price: product.price,
				sku: product.sku,
				stock: product.stock,
				status: product.status,
				categoryId: product.categoryId,
				brandId: product.brandId,
			},

			create: {
				id: product.id,
				name: product.name,
				slug: product.slug,
				description: product.description,
				price: product.price,
				sku: product.sku,
				stock: product.stock,
				status: product.status,
				categoryId: product.categoryId,
				brandId: product.brandId,
			},
		});
	}

	async findBySlug(slug) {
		const product = await prisma.product.findUnique({
			where: {
				slug,
			},
			include: {
				images: true,
				category: true,
			},
		});

		if (!product) {
			return null;
		}

		return product;
	}

	async update(id, data) {
		return prisma.product.update({
			where: {
				id,
			},

			data: {
				name: data.name,
				slug: data.slug,
				description: data.description,
				price: data.price,
				sku: data.sku,
				stock: data.stock,
				status: data.status,
				categoryId: data.categoryId,
				brandId: data.brandId || null,
			},
		});
	}
	async findById(id) {
		return prisma.product.findUnique({
			where: {
				id,
			},
		});
	}
	async delete(id) {
  return prisma.product.delete({
    where: {
      id,
    },
  });
}
}
