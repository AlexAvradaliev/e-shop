import { describe, expect, it } from "vitest";
import { Coupon } from "../../../modules/coupon/domain/Coupon.js";

describe("Coupon", () => {
  it("creates a percentage coupon", () => {
    const coupon = new Coupon({ code: " save10 ", type: "PERCENTAGE", value: 10 });
    expect(coupon.code).toBe("SAVE10");
    expect(coupon.applyTo(100)).toBe(90);
  });

  it("creates a fixed coupon", () => {
    const coupon = new Coupon({ code: "FIX5", type: "FIXED", value: 5 });
    expect(coupon.applyTo(3)).toBe(0);
  });

  it("detects expired coupons", () => {
    const coupon = new Coupon({ code: "OLD", type: "FIXED", value: 5, expiresAt: "2020-01-01" });
    expect(coupon.isExpired(new Date("2021-01-01"))).toBe(true);
    expect(coupon.isValid(new Date("2021-01-01"))).toBe(false);
  });

  it("rejects invalid data", () => {
    expect(() => new Coupon({ type: "FIXED", value: 5 })).toThrow("Coupon code is required");
    expect(() => new Coupon({ code: "A", type: "BAD", value: 5 })).toThrow("Invalid coupon type");
    expect(() => new Coupon({ code: "A", type: "FIXED", value: 0 })).toThrow("Coupon value must be positive");
    expect(() => new Coupon({ code: "A", type: "PERCENTAGE", value: 101 })).toThrow("Percentage coupon cannot exceed 100");
  });

  it("rejects invalid totals and inactive apply", () => {
    const coupon = new Coupon({ code: "A", type: "FIXED", value: 1, active: false });
    expect(() => coupon.applyTo(-1)).toThrow("Total must be a positive number or zero");
    expect(() => coupon.applyTo(10)).toThrow("Coupon is not valid");
  });
});
