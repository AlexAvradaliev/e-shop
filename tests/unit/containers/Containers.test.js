import { describe, expect, it } from "vitest";
import { createCouponContainer } from "@/modules/coupon/container.js";
import { createInventoryContainer } from "@/modules/inventory/container";
import { createUserContainer } from "@/modules/user/container";

describe("module containers", () => {
  it("creates coupon container", () => {
    const container = createCouponContainer({});
    expect(container.createCouponUseCase).toBeDefined();
    expect(container.getCouponsUseCase).toBeDefined();
    expect(container.getCouponByCodeUseCase).toBeDefined();
    expect(container.validateCouponUseCase).toBeDefined();
    expect(container.deleteCouponUseCase).toBeDefined();
  });

  it("creates inventory container", () => {
    const container = createInventoryContainer({});
    expect(container.reserveStockUseCase).toBeDefined();
    expect(container.releaseStockUseCase).toBeDefined();
    expect(container.adjustStockUseCase).toBeDefined();
  });

  it("creates user container", () => {
    const container = createUserContainer({});
    expect(container.getUserByIdUseCase).toBeDefined();
    expect(container.updateUserUseCase).toBeDefined();
    expect(container.deleteUserUseCase).toBeDefined();
  });
});
