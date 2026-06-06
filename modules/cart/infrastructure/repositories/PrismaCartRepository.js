import { prisma } from "@/server/db/prisma";

export class PrismaCartRepository {
  async findByUserId(userId) {
    return prisma.cart.findUnique({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async createForUser(userId) {
    return prisma.cart.create({
      data: {
        userId,
      },
      include: {
        items: true,
      },
    });
  }

  async addItem({
    userId,
    productId,
    quantity,
  }) {
    let cart =
      await prisma.cart.findUnique({
        where: {
          userId,
        },
      });

    if (!cart) {
      cart =
        await prisma.cart.create({
          data: {
            userId,
          },
        });
    }

    const existingItem =
      await prisma.cartItem.findUnique({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
      });

    if (existingItem) {
      return prisma.cartItem.update({
        where: {
          id: existingItem.id,
        },
        data: {
          quantity:
            existingItem.quantity + quantity,
        },
      });
    }

    return prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity,
      },
    });
  }

  async removeItem({
    userId,
    productId,
  }) {
    const cart =
      await prisma.cart.findUnique({
        where: {
          userId,
        },
      });

    if (!cart) {
      return null;
    }

    return prisma.cartItem.delete({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
    });
  }

  async updateItemQuantity({
    userId,
    productId,
    quantity,
  }) {
    const cart =
      await prisma.cart.findUnique({
        where: {
          userId,
        },
      });

    if (!cart) {
      throw new Error(
        "Cart not found"
      );
    }

    return prisma.cartItem.update({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId,
        },
      },
      data: {
        quantity,
      },
    });
  }

  async clear(userId) {
    const cart =
      await prisma.cart.findUnique({
        where: {
          userId,
        },
      });

    if (!cart) {
      return null;
    }

    return prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });
  }
}
