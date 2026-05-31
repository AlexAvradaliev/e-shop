import {
  describe,
  it,
  expect,
} from "vitest";

import {
  createOrder,
} from "@/stores/orders/orders";

describe(
  "Orders",
  () => {
    it(
      "creates order",
      () => {
        const result =
          createOrder([
            {
              price: 10,
              quantity: 2,
            },
          ]);

        expect(
          result.total
        ).toBe(20);
      }
    );

    it(
      "handles multiple items",
      () => {
        const result =
          createOrder([
            {
              price: 10,
              quantity: 2,
            },
            {
              price: 5,
              quantity: 4,
            },
          ]);

        expect(
          result.total
        ).toBe(40);
      }
    );

    it(
      "returns item count",
      () => {
        const result =
          createOrder([
            {
              price: 10,
              quantity: 2,
            },
          ]);

        expect(
          result.items
        ).toBe(1);
      }
    );

    it(
      "handles empty order",
      () => {
        const result =
          createOrder([]);

        expect(
          result.total
        ).toBe(0);
      }
    );

    it(
      "generates order id",
      () => {
        const result =
          createOrder([]);

        expect(
          result.id
        ).toBeDefined();
      }
    );
  }
);