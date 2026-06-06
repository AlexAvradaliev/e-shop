import { describe, it, expect, vi } from "vitest";
import { GetCartUseCase } from "@/modules/cart/application/GetCartUseCase";

describe("GetCartUseCase", () => {
  it("returns cart", async () => {
    const repository = {
      findByUserId:
        vi.fn().mockResolvedValue({
          id: "cart1",
        }),
    };

    const useCase =
      new GetCartUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "user1"
      );

    expect(
      repository.findByUserId
    ).toHaveBeenCalledWith(
      "user1"
    );

    expect(result.id).toBe(
      "cart1"
    );
  });
});
