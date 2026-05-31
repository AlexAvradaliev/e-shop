import { describe, it, expect, beforeEach } from "vitest";

import { useCartStore } from "@/stores/cart/store";
import { createOrder } from "@/stores/orders/orders";

describe("Cart To Order Flow", () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
  });

  it("creates order from cart items", () => {
    useCartStore.getState().addItem({
      id: "1",
      name: "Phone",
      price: 500,
    });

    useCartStore.getState().addItem({
      id: "2",
      name: "Laptop",
      price: 1000,
    });

    const items =
      useCartStore.getState().items;

    const order =
      createOrder(items);

    expect(order.total)
      .toBe(1500);

    expect(order.items)
      .toBe(2);
  });

  it("creates order with quantities", () => {
    const product = {
      id: "1",
      name: "Phone",
      price: 500,
    };

    useCartStore.getState().addItem(product);
    useCartStore.getState().addItem(product);

    const order =
      createOrder(
        useCartStore.getState().items
      );

    expect(order.total)
      .toBe(1000);
  });
});