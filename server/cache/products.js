import { unstable_cache }
from 'next/cache';

import { ProductRepository }
from '@/server/repositories/products/ProductRepository';

export const getCachedProducts =
  unstable_cache(
    async () => {
      return await ProductRepository.findAll();
    },
    ['products'],
    {
      revalidate: 300,
    }
  );