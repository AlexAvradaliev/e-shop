import { describe, it, expect, vi } from "vitest";
import { GetOrderByIdUseCase } from "@/modules/order/application/GetOrderByIdUseCase";

describe("GetOrderByIdUseCase", () => {
  it("returns order", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const useCase =
      new GetOrderByIdUseCase(
        repository
      );

    const result =
      await useCase.execute("1");

    expect(repository.findById)
      .toHaveBeenCalledWith("1");

    expect(result.id).toBe("1");
  });

  it("returns null when order does not exist", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue(
        null
      ),
    };

    const useCase =
      new GetOrderByIdUseCase(
        repository
      );

    const result =
      await useCase.execute("missing");

    expect(result).toBeNull();
  });
});
