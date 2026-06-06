import { prisma } from "@/server/db/prisma";

export class PrismaOrderRepository {
  async findAll() {
    return prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        items: true,
        payment: true,
        user: true,
      },
    });
  }

  async findById(id) {
    return prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
        payment: true,
        user: true,
      },
    });
  }

  async save(order) {
    return prisma.order.create({
      data: {
        id: order.id,
        userId: order.userId,
        orderNumber: order.orderNumber,
        status: order.status,
        paymentStatus: order.paymentStatus,
        subtotal: order.subtotal,
        shipping: order.shipping,
        total: order.total,
      },
    });
  }

  async updateStatus(id, status) {
    return prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }
}
