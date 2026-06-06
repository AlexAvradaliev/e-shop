import { Product } from "../domain/Product";
import { createProductSchema } from "@/shared/schemas/product.schema";

export class CreateProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(data) {
    const validated =
      createProductSchema.parse(data);

    const existing =
      await this.productRepository.findBySlug(
        validated.slug
      );

    if (existing) {
      throw new Error(
        "Product slug already exists"
      );
    }

    const product = new Product({
      id: crypto.randomUUID(),
      ...validated,
      status: "ACTIVE",
    });

    await this.productRepository.save(
      product
    );

    return product;
  }
}