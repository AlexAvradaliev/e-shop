import { describe, it, expect } from "vitest";
import { DeleteCategoryUseCase } from "@/modules/category/application/DeleteCategoryUseCase";

describe("DeleteCategoryUseCase", () => {
  it("deletes category", async () => {
    const repository = {
      findById: async () => ({
        id: "1",
        name: "Phones",
      }),

      delete: async () => {},
    };

    const useCase =
      new DeleteCategoryUseCase(
        repository
      );

    await expect(
      useCase.execute("1")
    ).resolves.toBeUndefined();
  });

  it("throws when category does not exist", async () => {
    const repository = {
      findById: async () => null,

      delete: async () => {},
    };

    const useCase =
      new DeleteCategoryUseCase(
        repository
      );

    await expect(
      useCase.execute("999")
    ).rejects.toThrow(
      "Category not found"
    );
  });
});