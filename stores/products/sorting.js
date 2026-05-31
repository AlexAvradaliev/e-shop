export function sortProducts(
  products,
  sortBy
) {
  const copy = [...products];

  switch (sortBy) {
    case "price-asc":
      return copy.sort(
        (a, b) => a.price - b.price
      );

    case "price-desc":
      return copy.sort(
        (a, b) => b.price - a.price
      );

    case "name-asc":
      return copy.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    case "name-desc":
      return copy.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

    default:
      return copy;
  }
}