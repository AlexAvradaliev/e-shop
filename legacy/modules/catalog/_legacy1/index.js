import { PrismaProductRepository } from "./infrastructure/repositories/PrismaProductRepository";

import { GetProductsUseCase } from "./application/use-cases/GetProductsUseCase";

import { GetProductBySlugUseCase } from "./application/use-cases/GetProductBySlugUseCase";

const repository = new PrismaProductRepository();

export const catalogModule = {
  getProducts: new GetProductsUseCase(repository),

  getProductBySlug: new GetProductBySlugUseCase(repository),
};