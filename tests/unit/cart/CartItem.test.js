import { describe, it, expect } from "vitest";
import { CartItem } from "@/modules/cart/domain/CartItem";

describe("CartItem", () => {
  it("creates cart item", () => {
    const item =
      new CartItem({
        id: "1",
        cartId: "cart1",
        productId: "product1",
        quantity: 2,
      });

    expect(item.quantity).toBe(2);
  });

  it("throws when quantity is not positive", () => {
    expect(() => {
      new CartItem({
        id: "1",
        productId: "product1",
        quantity: 0,
      });
    }).toThrow(
      "Quantity must be positive"
    );
  });

  it("updates quantity", () => {
    const item =
      new CartItem({
        id: "1",
        productId: "product1",
        quantity: 1,
      });

    item.updateQuantity(3);

    expect(item.quantity).toBe(3);
  });

  it("throws when updating to invalid quantity", () => {
    const item =
      new CartItem({
        id: "1",
        productId: "product1",
        quantity: 1,
      });

    expect(() => {
      item.updateQuantity(0);
    }).toThrow(
      "Quantity must be positive"
    );
  });
  
});
