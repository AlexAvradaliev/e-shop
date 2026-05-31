import {
  describe,
  it,
  expect,
  beforeEach,
} from "vitest";

import {
  saveCart,
  loadCart,
} from "@/stores/cart/persistence";

describe(
  "Cart Persistence",
  () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it(
      "saves cart items",
      () => {
        const items = [
          {
            id: "1",
            quantity: 2,
          },
        ];

        saveCart(items);

        expect(
          localStorage.getItem(
            "cart"
          )
        ).toBe(
          JSON.stringify(items)
        );
      }
    );

    it(
      "loads saved cart",
      () => {
        const items = [
          {
            id: "1",
            quantity: 2,
          },
        ];

        localStorage.setItem(
          "cart",
          JSON.stringify(items)
        );

        expect(
          loadCart()
        ).toEqual(items);
      }
    );

    it(
      "returns empty array when cart does not exist",
      () => {
        expect(
          loadCart()
        ).toEqual([]);
      }
    );

    it(
      "returns empty array when cart is null",
      () => {
        localStorage.setItem(
          "cart",
          "null"
        );

        expect(
          loadCart()
        ).toEqual([]);
      }
    );

    it(
      "handles corrupted json",
      () => {
        localStorage.setItem(
          "cart",
          "{broken"
        );

        expect(
          () => loadCart()
        ).not.toThrow();
      }
    );
  }
);