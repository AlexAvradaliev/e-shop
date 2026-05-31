'use server';

import { ProductService }
from '@/server/services/products/ProductService';

export async function createProductAction(
  data
) {
  return await ProductService.create(
    data
  );
}