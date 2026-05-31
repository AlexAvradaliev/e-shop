export function searchProducts(
  products,
  query
) {
  if (!query) {
    return products;
  }

  const term = query.toLowerCase();

  return products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(term)
  );
}