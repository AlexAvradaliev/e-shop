import {
  describe,
  it,
  expect,
} from "vitest";

import {
  calculateShipping,
} from "@/stores/cart/shipping";

describe("Shipping Engine", () => {
  it("returns standard shipping", () => {
    expect(
      calculateShipping(50, "standard")
    ).toBe(5);
  });

  it("returns express shipping", () => {
    expect(
      calculateShipping(50, "express")
    ).toBe(15);
  });

  it("returns free shipping for pickup", () => {
    expect(
      calculateShipping(50, "pickup")
    ).toBe(0);
  });

  it("returns free shipping over threshold", () => {
    expect(
      calculateShipping(150, "standard")
    ).toBe(0);
  });

  it("returns zero for unknown method", () => {
    expect(
      calculateShipping(50, "unknown")
    ).toBe(0);
  });
});