import { describe, it, expect } from "vitest";
import { CreateProductUseCase } from "@/modules/catalog/application/CreateProductUseCase";

describe("CreateProductUseCase", () => {
  it("creates product", async () => {
    const repository = {
      findBySlug: async () => null,
      save: async () => {},
    };

    const useCase =
      new CreateProductUseCase(
        repository
      );

    const product =
      await useCase.execute({
        name: "iPhone 17",
        slug: "iphone-17",
        sku: "APL-001",
        price: 1000,
        stock: 5,
        categoryId: "cat1",
      });

    expect(product.slug).toBe(
      "iphone-17"
    );
  });
  it("throws when slug already exists", async () => {
  const repository = {
    findBySlug: async () => ({
      id: "1",
      slug: "iphone-17",
    }),

    save: async () => {},
  };

  const useCase =
    new CreateProductUseCase(
      repository
    );

  await expect(
    useCase.execute({
      name: "iPhone 17",
      slug: "iphone-17",
      sku: "APL-001",
      price: 1000,
      stock: 5,
      categoryId: "cat1",
    })
  ).rejects.toThrow(
    "Product slug already exists"
  );
});
}); 