import {
  describe,
  it,
  expect,
} from "vitest";

import {
  calculateOrderSummary,
} from "@/stores/cart/checkout";

describe("Checkout Engine", () => {
  it("calculates order summary", () => {
    const result =
      calculateOrderSummary({
        subtotal: 100,
        coupon: {
          type: "percentage",
          value: 10,
        },
        shippingMethod:
          "standard",
      });

    expect(result).toEqual({
      subtotal: 100,
      discount: 10,
      shipping: 5,
     tax: 17.1,
total: 112.1,
    });
  });

  it("handles empty order", () => {
    const result =
      calculateOrderSummary({
        subtotal: 0,
        coupon: null,
        shippingMethod:
          "pickup",
      });

    expect(result.total)
      .toBe(0);
  });

 it("applies fixed coupon", () => {
  const result =
    calculateOrderSummary({
      subtotal: 100,
      coupon: {
        type: "fixed",
        value: 20,
      },
      shippingMethod:
        "pickup",
    });

  expect(result.discount)
    .toBe(20);

  expect(result.total)
    .toBe(95.2);
});

it("handles discount larger than subtotal", () => {
  const result =
    calculateOrderSummary({
      subtotal: 50,
      coupon: {
        type: "fixed",
        value: 100,
      },
      shippingMethod:
        "pickup",
    });

  expect(result.discount)
    .toBe(50);

  expect(result.total)
    .toBe(0);
});

it("applies free shipping threshold", () => {
  const result =
    calculateOrderSummary({
      subtotal: 150,
      coupon: null,
      shippingMethod:
        "standard",
    });

  expect(result.shipping)
    .toBe(0);
});

it("returns correct tax for discounted order", () => {
  const result =
    calculateOrderSummary({
      subtotal: 200,
      coupon: {
        type: "percentage",
        value: 50,
      },
      shippingMethod:
        "pickup",
    });

  expect(result.tax)
    .toBe(19);
});

it("handles zero subtotal", () => {
  const result =
    calculateOrderSummary({
      subtotal: 0,
      coupon: null,
      shippingMethod:
        "standard",
    });

  expect(result.total)
    .toBe(0);
});

it("handles 100 percent discount", () => {
  const result =
    calculateOrderSummary({
      subtotal: 100,
      coupon: {
        type: "percentage",
        value: 100,
      },
      shippingMethod:
        "pickup",
    });

  expect(result.total)
    .toBe(0);
});
});