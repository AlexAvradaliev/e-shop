import { describe, it, expect, vi } from "vitest";
import { ClearCartUseCase } from "@/modules/cart/application/ClearCartUseCase";

describe("ClearCartUseCase", () => {
  it("clears cart", async () => {
    const repository = {
      clear:
        vi.fn().mockResolvedValue({
          count: 2,
        }),
    };

    const useCase =
      new ClearCartUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "user1"
      );

    expect(
      repository.clear
    ).toHaveBeenCalledWith(
      "user1"
    );

    expect(result.count).toBe(2);
  });
});
