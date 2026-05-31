export function paginateProducts(
  products = [],
  page = 1,
  perPage = 10,
) {
  const start = (page - 1) * perPage;

  return products.slice(
    start,
    start + perPage,
  );
}