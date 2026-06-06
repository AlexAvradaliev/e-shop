import { ProductRepository }
from '@/server/repositories/products/ProductRepository';

import { productSchema }
from '@/features/products/validators/product.schema';

export class ProductService {
  static async create(data) {
    const validated =
      productSchema.parse(data);

    return await ProductRepository.create(
      validated
    );
  }

  static async getAll() {
    return await ProductRepository.findAll();
  }

  static async getById(id) {
    if (!id) {
      throw new Error(
        'Product ID is required'
      );
    }

    return await ProductRepository.findById(
      id
    );
  }

  static async update(id, data) {
    const validated =
      productSchema.partial().parse(
        data
      );

    return await ProductRepository.update(
      id,
      validated
    );
  }

  static async delete(id) {
    if (!id) {
      throw new Error(
        'Product ID is required'
      );
    }

    return await ProductRepository.delete(
      id
    );
  }
}