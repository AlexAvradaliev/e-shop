import { describe, expect, it, vi } from "vitest";
import { Coupon } from "../../../modules/coupon/domain/Coupon.js";
import { CreateCouponUseCase } from "../../../modules/coupon/application/CreateCouponUseCase.js";
import { GetCouponByCodeUseCase } from "../../../modules/coupon/application/GetCouponByCodeUseCase.js";
import { GetCouponsUseCase } from "../../../modules/coupon/application/GetCouponsUseCase.js";
import { ValidateCouponUseCase } from "../../../modules/coupon/application/ValidateCouponUseCase.js";
import { DeleteCouponUseCase } from "../../../modules/coupon/application/DeleteCouponUseCase.js";

describe("Coupon use cases", () => {
  it("creates coupon when code is unique", async () => {
    const repo = { findByCode: vi.fn().mockResolvedValue(null), create: vi.fn(async (coupon) => coupon) };
    const result = await new CreateCouponUseCase(repo).execute({ code: "save", type: "FIXED", value: 5 });
    expect(result.code).toBe("SAVE");
    expect(repo.create).toHaveBeenCalledOnce();
  });

  it("does not create duplicate coupon", async () => {
    const repo = { findByCode: vi.fn().mockResolvedValue({}) };
    await expect(new CreateCouponUseCase(repo).execute({ code: "save", type: "FIXED", value: 5 })).rejects.toThrow("Coupon already exists");
  });

  it("gets coupons", async () => {
    const repo = { findMany: vi.fn().mockResolvedValue([{ id: "c1" }]) };
    await expect(new GetCouponsUseCase(repo).execute()).resolves.toEqual([{ id: "c1" }]);
    expect(repo.findMany).toHaveBeenCalledOnce();
  });

  it("gets coupon by normalized code", async () => {
    const repo = { findByCode: vi.fn().mockResolvedValue(null) };
    await new GetCouponByCodeUseCase(repo).execute(" save ");
    expect(repo.findByCode).toHaveBeenCalledWith("SAVE");
    await expect(new GetCouponByCodeUseCase(repo).execute()).rejects.toThrow("Coupon code is required");
  });

  it("validates coupons", async () => {
    const coupon = new Coupon({ code: "SAVE", type: "PERCENTAGE", value: 10 });
    const repo = { findByCode: vi.fn().mockResolvedValue(coupon) };
    await expect(new ValidateCouponUseCase(repo).execute(null, 100)).rejects.toThrow("Coupon code is required");
    await expect(new ValidateCouponUseCase({ findByCode: vi.fn().mockResolvedValue(null) }).execute("BAD", 100)).resolves.toEqual({ valid: false, reason: "NOT_FOUND" });
    await expect(new ValidateCouponUseCase({ findByCode: vi.fn().mockResolvedValue(new Coupon({ code: "X", type: "FIXED", value: 1, active: false })) }).execute("X", 100)).resolves.toEqual({ valid: false, reason: "INVALID" });
    await expect(new ValidateCouponUseCase(repo).execute("SAVE", 100)).resolves.toMatchObject({ valid: true, totalAfterDiscount: 90 });
  });

  it("deletes coupon", async () => {
    const repo = { delete: vi.fn().mockResolvedValue({ id: "1" }) };
    await expect(new DeleteCouponUseCase(repo).execute()).rejects.toThrow("Coupon id is required");
    await expect(new DeleteCouponUseCase(repo).execute("1")).resolves.toEqual({ id: "1" });
  });
});
