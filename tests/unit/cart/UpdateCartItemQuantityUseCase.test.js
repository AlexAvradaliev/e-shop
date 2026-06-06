import { describe, it, expect, vi } from "vitest";
import { UpdateCartItemQuantityUseCase } from "@/modules/cart/application/UpdateCartItemQuantityUseCase";

describe("UpdateCartItemQuantityUseCase", () => {
  it("updates quantity", async () => {
    const repository = {
      updateItemQuantity:
        vi.fn().mockResolvedValue({
          quantity: 3,
        }),
    };

    const useCase =
      new UpdateCartItemQuantityUseCase(
        repository
      );

    const result =
      await useCase.execute({
        userId: "user1",
        productId: "product1",
        quantity: 3,
      });

    expect(
      repository.updateItemQuantity
    ).toHaveBeenCalledWith({
      userId: "user1",
      productId: "product1",
      quantity: 3,
    });

    expect(result.quantity).toBe(3);
  });

  it("throws when quantity is invalid", async () => {
    const useCase =
      new UpdateCartItemQuantityUseCase({
        updateItemQuantity: vi.fn(),
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
