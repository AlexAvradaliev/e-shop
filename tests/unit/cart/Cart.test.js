import { describe, it, expect } from "vitest";
import { Cart } from "@/modules/cart/domain/Cart";
import { CartItem } from "@/modules/cart/domain/CartItem";

describe("Cart", () => {
  it("creates cart", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
        items: [],
      });

    expect(cart.userId).toBe("user1");
  });

  it("adds item", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
      });

    cart.addItem({
      id: "item1",
      productId: "product1",
      quantity: 2,
    });

    expect(cart.items).toHaveLength(1);
  });

  it("increases existing item quantity", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
        items: [
          {
            id: "item1",
            productId: "product1",
            quantity: 2,
          },
        ],
      });

    cart.addItem({
      id: "item2",
      productId: "product1",
      quantity: 3,
    });

    expect(cart.items[0].quantity).toBe(5);
  });

  it("removes item", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
        items: [
          {
            id: "item1",
            productId: "product1",
            quantity: 1,
          },
        ],
      });

    cart.removeItem("product1");

    expect(cart.items).toHaveLength(0);
  });

  it("clears cart", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
        items: [
          {
            id: "item1",
            productId: "product1",
            quantity: 1,
          },
        ],
      });

    cart.clear();

    expect(cart.items).toHaveLength(0);
  });

  it("returns total items", () => {
    const cart =
      new Cart({
        id: "cart1",
        userId: "user1",
        items: [
          {
            id: "item1",
            productId: "p1",
            quantity: 2,
          },
          {
            id: "item2",
            productId: "p2",
            quantity: 3,
          },
        ],
      });

    expect(cart.getTotalItems()).toBe(5);
  });

  it("keeps existing CartItem instances", () => {
  const item =
    new CartItem({
      id: "item1",
      productId: "product1",
      quantity: 2,
    });

  const cart =
    new Cart({
      id: "cart1",
      userId: "user1",
      items: [
        item,
      ],
    });

  expect(
    cart.items[0]
  ).toBe(item);
});
it("adds existing CartItem instance", () => {
  const cart =
    new Cart({
      id: "cart1",
      userId: "user1",
    });

  const item =
    new CartItem({
      id: "item1",
      productId: "product1",
      quantity: 2,
    });

  const result =
    cart.addItem(item);

  expect(result).toBe(item);

  expect(cart.items[0])
    .toBe(item);
});
});
