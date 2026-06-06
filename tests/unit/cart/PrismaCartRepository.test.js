import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock(
  "@/server/db/prisma",
  () => ({
    prisma: {
      cart: {
        findUnique: vi.fn(),
        create: vi.fn(),
      },
      cartItem: {
        findUnique: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
        delete: vi.fn(),
        deleteMany: vi.fn(),
      },
    },
  })
);

import { prisma } from "@/server/db/prisma";
import { PrismaCartRepository } from "@/modules/cart/infrastructure/repositories/PrismaCartRepository";

describe("PrismaCartRepository", () => {
  let repository;

  beforeEach(() => {
    repository =
      new PrismaCartRepository();

    vi.clearAllMocks();
  });

  it("findByUserId returns cart", async () => {
    const cart = {
      id: "cart1",
    };

    prisma.cart.findUnique.mockResolvedValue(
      cart
    );

    const result =
      await repository.findByUserId(
        "user1"
      );

    expect(result).toEqual(cart);

    expect(
      prisma.cart.findUnique
    ).toHaveBeenCalledWith({
      where: {
        userId: "user1",
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  });

  it("createForUser creates cart", async () => {
    prisma.cart.create.mockResolvedValue({
      id: "cart1",
    });

    const result =
      await repository.createForUser(
        "user1"
      );

    expect(result.id).toBe("cart1");
  });

  it("addItem creates cart if missing and creates item", async () => {
    prisma.cart.findUnique.mockResolvedValueOnce(
      null
    );

    prisma.cart.create.mockResolvedValue({
      id: "cart1",
    });

    prisma.cartItem.findUnique.mockResolvedValue(
      null
    );

    prisma.cartItem.create.mockResolvedValue({
      id: "item1",
    });

    const result =
      await repository.addItem({
        userId: "user1",
        productId: "product1",
        quantity: 2,
      });

    expect(result.id).toBe("item1");
  });

  it("addItem updates existing item", async () => {
    prisma.cart.findUnique.mockResolvedValue({
      id: "cart1",
    });

    prisma.cartItem.findUnique.mockResolvedValue({
      id: "item1",
      quantity: 2,
    });

    prisma.cartItem.update.mockResolvedValue({
      id: "item1",
      quantity: 5,
    });

    const result =
      await repository.addItem({
        userId: "user1",
        productId: "product1",
        quantity: 3,
      });

    expect(result.quantity).toBe(5);
  });

  it("removeItem returns null when cart missing", async () => {
    prisma.cart.findUnique.mockResolvedValue(
      null
    );

    const result =
      await repository.removeItem({
        userId: "user1",
        productId: "product1",
      });

    expect(result).toBeNull();
  });

  it("removeItem deletes item", async () => {
    prisma.cart.findUnique.mockResolvedValue({
      id: "cart1",
    });

    prisma.cartItem.delete.mockResolvedValue({
      id: "item1",
    });

    const result =
      await repository.removeItem({
        userId: "user1",
        productId: "product1",
      });

    expect(result.id).toBe("item1");
  });

  it("updateItemQuantity throws when cart missing", async () => {
    prisma.cart.findUnique.mockResolvedValue(
      null
    );

    await expect(
      repository.updateItemQuantity({
        userId: "user1",
        productId: "product1",
        quantity: 2,
      })
    ).rejects.toThrow(
      "Cart not found"
    );
  });

  it("updateItemQuantity updates item", async () => {
    prisma.cart.findUnique.mockResolvedValue({
      id: "cart1",
    });

    prisma.cartItem.update.mockResolvedValue({
      quantity: 4,
    });

    const result =
      await repository.updateItemQuantity({
        userId: "user1",
        productId: "product1",
        quantity: 4,
      });

    expect(result.quantity).toBe(4);
  });

  it("clear returns null when cart missing", async () => {
    prisma.cart.findUnique.mockResolvedValue(
      null
    );

    const result =
      await repository.clear(
        "user1"
      );

    expect(result).toBeNull();
  });

  it("clear deletes items", async () => {
    prisma.cart.findUnique.mockResolvedValue({
      id: "cart1",
    });

    prisma.cartItem.deleteMany.mockResolvedValue({
      count: 2,
    });

    const result =
      await repository.clear(
        "user1"
      );

    expect(result.count).toBe(2);
  });
});
