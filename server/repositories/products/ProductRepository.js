import { prisma } from '@/server/db/prisma';

export class ProductRepository {
  static async create(data) {
    return await prisma.product.create({
      data,
    });
  }

  static async findAll() {
    return await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  static async findById(id) {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  static async update(id, data) {
    return await prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  static async delete(id) {
    return await prisma.product.delete({
      where: {
        id,
      },
    });
  }
}