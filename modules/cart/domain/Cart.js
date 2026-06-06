import { CartItem } from "./CartItem";

export class Cart {
  constructor({
    id,
    userId,
    items = [],
  }) {
    this.id = id;
    this.userId = userId;
    this.items = items.map(
      (item) =>
        item instanceof CartItem
          ? item
          : new CartItem(item)
    );
  }

  addItem(item) {
    const existing =
      this.items.find(
        (cartItem) =>
          cartItem.productId === item.productId
      );

    if (existing) {
      existing.updateQuantity(
        existing.quantity + item.quantity
      );

      return existing;
    }

    const cartItem =
      item instanceof CartItem
        ? item
        : new CartItem(item);

    this.items.push(cartItem);

    return cartItem;
  }

  removeItem(productId) {
    this.items =
      this.items.filter(
        (item) =>
          item.productId !== productId
      );
  }

  clear() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  }
}
