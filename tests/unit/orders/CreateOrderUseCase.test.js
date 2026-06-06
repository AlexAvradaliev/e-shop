import { describe, it, expect, vi } from "vitest";
import { CreateOrderUseCase } from "@/modules/order/application/CreateOrderUseCase";

describe("CreateOrderUseCase", () => {
  it("creates order", async () => {
    const order = {
      id: "1",
      orderNumber: "ORD-001",
      status: "PENDING",
      total: 110,
    };

    const repository = {
      save: vi.fn().mockResolvedValue(order),
    };

    const useCase =
      new CreateOrderUseCase(repository);

    const result =
      await useCase.execute({
        userId: "user1",
        orderNumber: "ORD-001",
        status: "PENDING",
        paymentStatus: "PENDING",
        subtotal: 100,
        shipping: 10,
        total: 110,
      });

    expect(repository.save).toHaveBeenCalled();
    expect(result).toEqual(order);
  });
});