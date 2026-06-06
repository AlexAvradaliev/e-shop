
import { describe, it, expect } from "vitest";
import { CreateCategoryUseCase } from "@/modules/category/application/CreateCategoryUseCase";

describe("CreateCategoryUseCase", () => {
  it("creates category", async () => {
    const repository = {
      findBySlug: async () => null,
      save: async () => {},
    };

    const useCase =
      new CreateCategoryUseCase(
        repository
      );

    const category =
      await useCase.execute({
        name: "Phones",
        slug: "phones",
      });

    expect(category.name).toBe(
      "Phones"
    );

    expect(category.slug).toBe(
      "phones"
    );
  });

  it("throws when slug already exists", async () => {
    const repository = {
      findBySlug: async () => ({
        id: "1",
        slug: "phones",
      }),
  
      save: async () => {},
    };
  
    const useCase =
      new CreateCategoryUseCase(
        repository
      );
  
    await expect(
      useCase.execute({
        name: "Phones",
        slug: "phones",
      })
    ).rejects.toThrow(
      "Category slug already exists"
    );
  });

});

