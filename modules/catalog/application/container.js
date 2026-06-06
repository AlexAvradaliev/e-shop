import { PrismaProductRepository } from "../infrastructure/repositories/PrismaProductRepository.js";
import { CreateProductUseCase } from "./CreateProductUseCase.js";
import { GetProductByIdUseCase } from "./use-cases/GetProductByIdUseCase.js";
import { UpdateProductUseCase } from "./use-cases/UpdateProductUseCase.js";
import { DeleteProductUseCase } from "./use-cases/DeleteProductUseCase.js";

const productRepository = new PrismaProductRepository();

export const createProductUseCase = new CreateProductUseCase(productRepository);
export const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
export const updateProductUseCase = new UpdateProductUseCase(productRepository);
export const deleteProductUseCase = new DeleteProductUseCase(productRepository);

export const getProductsUseCase = {
  async execute() {
    if (typeof productRepository.findMany === "function") {
      return productRepository.findMany();
    }

    if (typeof productRepository.findAll === "function") {
      return productRepository.findAll();
    }

    return [];
  },
};

export const getProductsPaginatedUseCase = {
  async execute(options = {}) {
    const page = Number(options.page || 1);
    const limit = Number(options.limit || 12);
    const products = await getProductsUseCase.execute();

    return {
      products,
      items: products,
      page,
      limit,
      total: products.length,
      totalPages: Math.max(1, Math.ceil(products.length / limit)),
    };
  },
};
