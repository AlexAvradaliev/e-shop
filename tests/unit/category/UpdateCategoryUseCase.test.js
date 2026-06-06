import { describe, it, expect } from "vitest";
import { UpdateCategoryUseCase } from "@/modules/category/application/UpdateCategoryUseCase";

describe("UpdateCategoryUseCase", () => {
  it("updates category", async () => {
    const updatedCategory = {
      id: "1",
      name: "Smartphones",
      slug: "smartphones",
    };

    const repository = {
      findById: async () => ({
        id: "1",
        name: "Phones",
        slug: "phones",
      }),

      update: async () => updatedCategory,
    };

    const useCase =
      new UpdateCategoryUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "1",
        {
          name: "Smartphones",
          slug: "smartphones",
        }
      );

    expect(result).toEqual(
      updatedCategory
    );
  });

  it("throws when category does not exist", async () => {
    const repository = {
      findById: async () => null,
      update: async () => {},
    };

    const useCase =
      new UpdateCategoryUseCase(
        repository
      );

    await expect(
      useCase.execute(
        "999",
        {
          name: "Test",
          slug: "test",
        }
      )
    ).rejects.toThrow(
      "Category not found"
    );
  });
});