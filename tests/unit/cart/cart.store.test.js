import { describe, it, expect, beforeEach } from "vitest";
import { useCartStore } from "@/stores/cart/store";

describe("Cart Store", () => {
  beforeEach(() => {
    useCartStore.setState({
      items: [],
    });
  });

  it("adds a product to cart", () => {
    useCartStore.getState().addItem({
      id: "1",
      name: "Product A",
      price: 10,
    });

    const items = useCartStore.getState().items;

    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(1);
  });

  it("increments quantity when same product is added twice", () => {
    const store = useCartStore.getState();

    store.addItem({
      id: "1",
      name: "Product A",
      price: 10,
    });

    store.addItem({
      id: "1",
      name: "Product A",
      price: 10,
    });

    const items = useCartStore.getState().items;

    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(2);
  });

  it("removes a product", () => {
    const store = useCartStore.getState();

    store.addItem({
      id: "1",
      name: "Product A",
    });

    store.removeItem("1");

    expect(useCartStore.getState().items)
      .toHaveLength(0);
  });

  it("clears cart", () => {
    const store = useCartStore.getState();

    store.addItem({
      id: "1",
      name: "Product A",
    });

    store.clearCart();

    expect(useCartStore.getState().items)
      .toEqual([]);
  });

  // НОВ TDD ТЕСТ
  it("updates item quantity", () => {
    const store = useCartStore.getState();

    store.addItem({
      id: "1",
      name: "Product A",
      price: 10,
    });

    store.updateQuantity("1", 5);

    const items = useCartStore.getState().items;

    expect(items[0].quantity).toBe(5);
  });

  it("removes item when quantity becomes zero", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Product A",
    price: 10,
  });

  store.updateQuantity("1", 0);

  expect(
    useCartStore.getState().items
  ).toHaveLength(0);
});

it("calculates cart total", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Product A",
    price: 10,
  });

  store.addItem({
    id: "2",
    name: "Product B",
    price: 20,
  });

  expect(
    store.getTotal()
  ).toBe(30);
});
it("calculates total using quantities", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Product A",
    price: 10,
  });

  store.updateQuantity("1", 3);

  expect(
    store.getTotal()
  ).toBe(30);
});
it("does not allow negative quantity", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Product A",
    price: 10,
  });

  store.updateQuantity("1", -5);

  expect(
    useCartStore.getState().items
  ).toHaveLength(0);
});
it("calculates total for multiple products", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "A",
    price: 10,
  });

  store.addItem({
    id: "2",
    name: "B",
    price: 20,
  });

  store.addItem({
    id: "3",
    name: "C",
    price: 30,
  });

  expect(
    store.getTotal()
  ).toBe(60);
});
it("returns zero for empty cart total", () => {
  const store = useCartStore.getState();

  expect(
    store.getTotal()
  ).toBe(0);
});
it("does not duplicate item when updating quantity", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "A",
    price: 10,
  });

  store.updateQuantity("1", 5);

  expect(
    useCartStore.getState().items
  ).toHaveLength(1);
});
it("ignores update for unknown product", () => {
  const store = useCartStore.getState();

  store.updateQuantity("999", 5);

  expect(
    useCartStore.getState().items
  ).toHaveLength(0);
});
it("keeps other products unchanged", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "A",
    price: 10,
  });

  store.addItem({
    id: "2",
    name: "B",
    price: 20,
  });

  store.updateQuantity("1", 5);

  const items =
    useCartStore.getState().items;

  expect(items[0].quantity)
    .toBe(5);

  expect(items[1].quantity)
    .toBe(1);
});
it("increments quantity when item already exists", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Phone",
    price: 100,
  });

  store.addItem({
    id: "1",
    name: "Phone",
    price: 100,
  });

  expect(
    useCartStore.getState().items[0].quantity
  ).toBe(2);
});
it("increments quantity when adding existing product", () => {
  const product = {
    id: "1",
    name: "Phone",
    price: 100,
  };

  useCartStore.getState().clearCart();

  useCartStore.getState().addItem(product);
  useCartStore.getState().addItem(product);

  const items =
    useCartStore.getState().items;

  expect(items).toHaveLength(1);
  expect(items[0].quantity).toBe(2);
});
it("adds different products separately", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "A",
    price: 10,
  });

  store.addItem({
    id: "2",
    name: "B",
    price: 20,
  });

  const items =
    useCartStore.getState().items;

  expect(items).toHaveLength(2);
});
it("keeps non-target items unchanged during update", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "A",
    price: 10,
  });

  store.addItem({
    id: "2",
    name: "B",
    price: 20,
  });

  store.updateQuantity("1", 5);

  const items =
    useCartStore.getState().items;

  const second =
    items.find(
      (item) => item.id === "2"
    );

  expect(second.quantity)
    .toBe(1);
});
it("increments only matching item when multiple products exist", () => {
  const store = useCartStore.getState();

  store.addItem({
    id: "1",
    name: "Phone",
    price: 100,
  });

  store.addItem({
    id: "2",
    name: "Laptop",
    price: 200,
  });

  store.addItem({
    id: "1",
    name: "Phone",
    price: 100,
  });

  const items =
    useCartStore.getState().items;

  const phone =
    items.find((i) => i.id === "1");

  const laptop =
    items.find((i) => i.id === "2");

  expect(phone.quantity)
    .toBe(2);

  expect(laptop.quantity)
    .toBe(1);
});
});