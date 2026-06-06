import { PrismaProductRepository }
from '@/modules/catalog/infrastructure/repositories/PrismaProductRepository';

import { GetProductsUseCase }
from "@/modules/catalog/application/use-cases/get-products.use-case";

const productRepository =
  new PrismaProductRepository();

export const container = {
  getProductsUseCase:
    new GetProductsUseCase(
      productRepository
    ),
};