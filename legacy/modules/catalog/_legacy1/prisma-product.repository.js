import { prisma } from "@/server/db/prisma";

export class PrismaProductRepository {
  async findAll() {
    return prisma.product.findMany({
      include: {
        images: true,
        category: true,
      },
    });
  }

  async findBySlug(slug) {
    return prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        images: true,
        category: true,
      },
    });
  }

  async create(data) {
    return prisma.product.create({
      data,
    });
  }

  async update(id, data) {
    return prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return prisma.product.delete({
      where: { id },
    });
  }
}