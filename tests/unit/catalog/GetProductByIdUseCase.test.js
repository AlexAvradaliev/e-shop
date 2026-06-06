import { describe, it, expect, vi } from "vitest";

import { GetProductByIdUseCase }
from "@/modules/catalog/application/use-cases/GetProductByIdUseCase";

describe("GetProductByIdUseCase", () => {
  it("returns product by id", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const useCase =
      new GetProductByIdUseCase(
        repository
      );

    const result =
      await useCase.execute("1");

    expect(
      repository.findById
    ).toHaveBeenCalledWith("1");

    expect(result.id)
      .toBe("1");
  });

  it("returns null when product does not exist", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue(
        null
      ),
    };

    const useCase =
      new GetProductByIdUseCase(
        repository
      );

    const result =
      await useCase.execute("999");

    expect(result)
      .toBeNull();
  });
});