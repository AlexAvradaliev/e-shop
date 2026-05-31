import {
  describe,
  it,
  expect,
} from "vitest";

import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  selectUniqueItemsCount,
  selectIsCartEmpty,
  selectCartSubtotal,
  selectCartTax,
  selectCartGrandTotal,
} from "@/stores/cart/selectors";

describe(
  "Cart Selectors",
  () => {
    const state = {
      items: [
        {
          id: "1",
          name: "A",
          price: 10,
          quantity: 2,
        },
        {
          id: "2",
          name: "B",
          price: 20,
          quantity: 1,
        },
      ],
    };

    it(
      "returns cart items",
      () => {
        expect(
          selectCartItems(state)
        ).toHaveLength(2);
      }
    );

    it(
      "calculates cart count",
      () => {
        expect(
          selectCartCount(state)
        ).toBe(3);
      }
    );

    it(
      "calculates cart total",
      () => {
        expect(
          selectCartTotal(state)
        ).toBe(40);
      }
    );

    it(
      "returns unique items count",
      () => {
        expect(
          selectUniqueItemsCount(
            state
          )
        ).toBe(2);
      }
    );

    it(
      "returns false when cart is not empty",
      () => {
        expect(
          selectIsCartEmpty(
            state
          )
        ).toBe(false);
      }
    );

    it(
      "returns true when cart is empty",
      () => {
        expect(
          selectIsCartEmpty({
            items: [],
          })
        ).toBe(true);
      }
    );

    it(
      "calculates subtotal",
      () => {
        expect(
          selectCartSubtotal(
            state
          )
        ).toBe(40);
      }
    );

    it(
      "calculates tax",
      () => {
        expect(
          selectCartTax(
            state
          )
        ).toBe(8);
      }
    );

    it(
      "calculates grand total",
      () => {
        expect(
          selectCartGrandTotal(
            state
          )
        ).toBe(48);
      }
    );

    it(
      "returns zero tax for empty cart",
      () => {
        expect(
          selectCartTax({
            items: [],
          })
        ).toBe(0);
      }
    );

    it(
      "returns zero grand total for empty cart",
      () => {
        expect(
          selectCartGrandTotal({
            items: [],
          })
        ).toBe(0);
      }
    );
  }
);