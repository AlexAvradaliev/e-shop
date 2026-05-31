export function toggleFavorite(
  favorites = [],
  productId,
) {
  if (favorites.includes(productId)) {
    return favorites.filter(
      id => id !== productId,
    );
  }

  return [
    ...favorites,
    productId,
  ];
}