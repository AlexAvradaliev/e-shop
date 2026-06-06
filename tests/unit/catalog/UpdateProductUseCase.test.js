import { describe, it, expect, vi } from "vitest";

import { UpdateProductUseCase }
from "@/modules/catalog/application/use-cases/UpdateProductUseCase";

describe("UpdateProductUseCase", () => {
  it("updates product through repository", async () => {
    const updatedProduct = {
      id: "1",
      name: "Updated Product",
    };

    const repository = {
      update: vi.fn().mockResolvedValue(
        updatedProduct
      ),
    };

    const useCase =
      new UpdateProductUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "1",
        {
          name:
            "Updated Product",
        }
      );

    expect(
      repository.update
    ).toHaveBeenCalledWith(
      "1",
      {
        name:
          "Updated Product",
      }
    );

    expect(result).toEqual(
      updatedProduct
    );
  });
  it("propagates repository errors", async () => {
  const repository = {
    update: vi.fn().mockRejectedValue(
      new Error("DB Error")
    ),
  };

  const useCase =
    new UpdateProductUseCase(
      repository
    );

  await expect(
    useCase.execute("1", {})
  ).rejects.toThrow(
    "DB Error"
  );
});
});