export class CartItem {
  constructor({
    id,
    cartId,
    productId,
    quantity = 1,
  }) {
    if (quantity <= 0) {
      throw new Error(
        "Quantity must be positive"
      );
    }

    this.id = id;
    this.cartId = cartId;
    this.productId = productId;
    this.quantity = quantity;
  }

  updateQuantity(quantity) {
    if (quantity <= 0) {
      throw new Error(
        "Quantity must be positive"
      );
    }

    this.quantity = quantity;
  }
}
