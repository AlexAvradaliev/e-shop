import {
  describe,
  it,
  expect,
} from "vitest";

import {
  calculateDiscount,
} from "@/stores/cart/coupons";

describe("Coupon Engine", () => {
  it("applies percentage discount", () => {
    expect(
      calculateDiscount(
        100,
        {
          type: "percentage",
          value: 10,
        }
      )
    ).toBe(10);
  });

  it("applies fixed discount", () => {
    expect(
      calculateDiscount(
        100,
        {
          type: "fixed",
          value: 15,
        }
      )
    ).toBe(15);
  });

  it("returns zero when coupon is missing", () => {
    expect(
      calculateDiscount(
        100,
        null
      )
    ).toBe(0);
  });

  it("never returns discount larger than total", () => {
    expect(
      calculateDiscount(
        50,
        {
          type: "fixed",
          value: 100,
        }
      )
    ).toBe(50);
  });

  it("returns zero for invalid coupon type", () => {
    expect(
      calculateDiscount(
        100,
        {
          type: "unknown",
          value: 10,
        }
      )
    ).toBe(0);
  });
});