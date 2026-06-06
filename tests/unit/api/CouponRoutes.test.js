import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock(
  "@/modules/coupon/application/container.js",
  () => ({
    getCouponsUseCase: {
      execute: vi.fn(),
    },
    createCouponUseCase: {
      execute: vi.fn(),
    },
    getCouponByCodeUseCase: {
      execute: vi.fn(),
    },
    deleteCouponUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getCouponsUseCase,
  createCouponUseCase,
  getCouponByCodeUseCase,
  deleteCouponUseCase,
} from "@/modules/coupon/application/container.js";

import {
  GET as getCoupons,
  POST as createCoupon,
} from "@/app/api/admin/coupons/route.js";

import {
  GET as getCouponByCode,
} from "@/app/api/admin/coupons/code/[code]/route.js";

import {
  DELETE as deleteCoupon,
} from "@/app/api/admin/coupons/[id]/route.js";

describe("Coupon API routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("gets coupons", async () => {
    getCouponsUseCase.execute.mockResolvedValue([
      { id: "coupon-1", code: "SAVE10" },
    ]);

    const response = await getCoupons();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual([
      { id: "coupon-1", code: "SAVE10" },
    ]);
    expect(getCouponsUseCase.execute).toHaveBeenCalledOnce();
  });

  it("creates coupon", async () => {
    createCouponUseCase.execute.mockResolvedValue({
      id: "coupon-1",
      code: "SAVE10",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        code: "SAVE10",
        type: "PERCENTAGE",
        value: 10,
      }),
    };

    const response = await createCoupon(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "coupon-1",
      code: "SAVE10",
    });
    expect(createCouponUseCase.execute).toHaveBeenCalledWith({
      code: "SAVE10",
      type: "PERCENTAGE",
      value: 10,
    });
  });

  it("returns 400 when create coupon fails", async () => {
    createCouponUseCase.execute.mockRejectedValue(
      new Error("Coupon already exists")
    );

    const request = {
      json: vi.fn().mockResolvedValue({}),
    };

    const response = await createCoupon(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "Coupon already exists",
    });
  });

  it("gets coupon by code", async () => {
    getCouponByCodeUseCase.execute.mockResolvedValue({
      id: "coupon-1",
      code: "SAVE10",
    });

    const response = await getCouponByCode(
      {},
      { params: { code: "SAVE10" } }
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "coupon-1",
      code: "SAVE10",
    });
    expect(getCouponByCodeUseCase.execute).toHaveBeenCalledWith("SAVE10");
  });

  it("returns 404 when coupon by code does not exist", async () => {
    getCouponByCodeUseCase.execute.mockResolvedValue(null);

    const response = await getCouponByCode(
      {},
      { params: { code: "MISSING" } }
    );
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      error: "Coupon not found",
    });
  });

  it("returns 400 when get coupon by code fails", async () => {
    getCouponByCodeUseCase.execute.mockRejectedValue(
      new Error("Coupon code is required")
    );

    const response = await getCouponByCode(
      {},
      { params: { code: "" } }
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "Coupon code is required",
    });
  });

  it("deletes coupon", async () => {
    deleteCouponUseCase.execute.mockResolvedValue({
      id: "coupon-1",
    });

    const response = await deleteCoupon(
      {},
      { params: { id: "coupon-1" } }
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "coupon-1",
    });
    expect(deleteCouponUseCase.execute).toHaveBeenCalledWith("coupon-1");
  });

  it("returns 400 when delete coupon fails", async () => {
    deleteCouponUseCase.execute.mockRejectedValue(
      new Error("Coupon id is required")
    );

    const response = await deleteCoupon(
      {},
      { params: { id: "" } }
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "Coupon id is required",
    });
  });
});
