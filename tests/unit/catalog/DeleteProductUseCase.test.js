import { describe, it, expect, vi } from "vitest";
import { DeleteProductUseCase } from "@/modules/catalog/application/use-cases/DeleteProductUseCase";

describe("DeleteProductUseCase", () => {
  it("deletes existing product", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue({
        id: "1",
      }),

      delete: vi.fn(),
    };

    const useCase =
      new DeleteProductUseCase(
        repository
      );

    await useCase.execute("1");

    expect(
      repository.delete
    ).toHaveBeenCalledWith("1");
  });

  it("throws when product does not exist", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue(
        null
      ),

      delete: vi.fn(),
    };

    const useCase =
      new DeleteProductUseCase(
        repository
      );

    await expect(
      useCase.execute("1")
    ).rejects.toThrow(
      "Product not found"
    );
  });
});