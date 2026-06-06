import { describe, it, expect, vi } from "vitest";
import { RemoveFromCartUseCase } from "@/modules/cart/application/RemoveFromCartUseCase";

describe("RemoveFromCartUseCase", () => {
  it("removes item from cart", async () => {
    const repository = {
      removeItem:
        vi.fn().mockResolvedValue({
          id: "item1",
        }),
    };

    const useCase =
      new RemoveFromCartUseCase(
        repository
      );

    const result =
      await useCase.execute({
        userId: "user1",
        productId: "product1",
      });

    expect(
      repository.removeItem
    ).toHaveBeenCalledWith({
      userId: "user1",
      productId: "product1",
    });

    expect(result.id).toBe(
      "item1"
    );
  });
});
