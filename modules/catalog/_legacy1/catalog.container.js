import { PrismaProductRepository } from './PrismaProductRepository';
import { GetProductsUseCase } from './GetProductsUseCase';

const repository = new PrismaProductRepository();

export const getProductsUseCase = new GetProductsUseCase(repository);
