export class PromotionService {
  static apply(
    products
  ) {
    return products.map(
      (product) => {
        if (
          product.category ===
          'SHOES'
        ) {
          return {
            ...product,
            discountedPrice:
              product.price * 0.9,
          };
        }

        return product;
      }
    );
  }
}