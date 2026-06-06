import { describe, it, expect, vi } from "vitest";
import { AddToCartUseCase } from "@/modules/cart/application/AddToCartUseCase";

describe("AddToCartUseCase", () => {
  it("adds item to cart", async () => {
    const repository = {
      addItem:
        vi.fn().mockResolvedValue({
          id: "item1",
        }),
    };

    const useCase =
      new AddToCartUseCase(
        repository
      );

    const result =
      await useCase.execute({
        userId: "user1",
        productId: "product1",
        quantity: 2,
      });

    expect(
      repository.addItem
    ).toHaveBeenCalledWith({
      userId: "user1",
      productId: "product1",
      quantity: 2,
    });

    expect(result.id).toBe(
      "item1"
    );
  });

  it("throws when quantity is invalid", async () => {
    const useCase =
      new AddToCartUseCase({
        addItem: vi.fn(),
      });

    await expect(
      useCase.execute({
        userId: "user1",
        productId: "product1",
        quantity: 0,
      })
    ).rejects.toThrow(
      "Quantity must be positive"
    );
  });
});
