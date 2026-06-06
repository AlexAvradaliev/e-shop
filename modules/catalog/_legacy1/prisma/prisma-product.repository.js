import { prisma } from "@/server/db/prisma";

import { Product } from "../entities/product.entity";

export class PrismaProductRepository {
  async findAll() {
    const products = await prisma.product.findMany({
      where: {
        status: "ACTIVE",
      },
      include: {
        images: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return products.map(
      (product) => new Product(product)
    );
  }

  async findBySlug(slug) {
    const product =
      await prisma.product.findUnique({
        where: {
          slug,
        },
        include: {
          images: true,
        },
      });

    if (!product) {
      return null;
    }

    return new Product(product);
  }
}