export function filterProducts(
  products,
  filters = {}
) {
  return products.filter((product) => {
    if (
      filters.category &&
      product.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.minPrice !== undefined &&
      product.price < filters.minPrice
    ) {
      return false;
    }

    if (
      filters.maxPrice !== undefined &&
      product.price > filters.maxPrice
    ) {
      return false;
    }

    if (
      filters.inStock &&
      product.stock <= 0
    ) {
      return false;
    }

    return true;
  });
}