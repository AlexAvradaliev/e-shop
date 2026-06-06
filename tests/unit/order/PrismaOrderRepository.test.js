import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock(
  "@/server/db/prisma",
  () => ({
    prisma: {
      order: {
        findMany: vi.fn(),
        findUnique: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
      },
    },
  })
);

import { prisma } from "@/server/db/prisma";
import { PrismaOrderRepository } from "@/modules/order/infrastructure/repositories/PrismaOrderRepository";

describe("PrismaOrderRepository", () => {
  let repository;

  beforeEach(() => {
    repository =
      new PrismaOrderRepository();

    vi.clearAllMocks();
  });

  it("findAll returns orders", async () => {
    const orders = [
      {
        id: "1",
      },
    ];

    prisma.order.findMany.mockResolvedValue(
      orders
    );

    const result =
      await repository.findAll();

    expect(result).toEqual(orders);

    expect(prisma.order.findMany)
      .toHaveBeenCalledWith({
        orderBy: {
          createdAt: "desc",
        },
        include: {
          items: true,
          payment: true,
          user: true,
        },
      });
  });

  it("findById returns order", async () => {
    const order = {
      id: "1",
    };

    prisma.order.findUnique.mockResolvedValue(
      order
    );

    const result =
      await repository.findById("1");

    expect(result).toEqual(order);

    expect(prisma.order.findUnique)
      .toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        include: {
          items: true,
          payment: true,
          user: true,
        },
      });
  });

  it("save creates order", async () => {
    const order = {
      id: "1",
      userId: "user1",
      orderNumber: "ORD-001",
      status: "PENDING",
      paymentStatus: "PENDING",
      subtotal: 100,
      shipping: 10,
      total: 110,
    };

    prisma.order.create.mockResolvedValue(
      order
    );

    const result =
      await repository.save(order);

    expect(result).toEqual(order);

    expect(prisma.order.create)
      .toHaveBeenCalledWith({
        data: order,
      });
  });

  it("updateStatus updates order status", async () => {
    const order = {
      id: "1",
      status: "PAID",
    };

    prisma.order.update.mockResolvedValue(
      order
    );

    const result =
      await repository.updateStatus(
        "1",
        "PAID"
      );

    expect(result).toEqual(order);

    expect(prisma.order.update)
      .toHaveBeenCalledWith({
        where: {
          id: "1",
        },
        data: {
          status: "PAID",
        },
      });
  });
});
