import { describe, expect, it, vi } from "vitest";
import { Coupon } from "../../../modules/coupon/domain/Coupon.js";
import { PrismaCouponRepository } from "../../../modules/coupon/infrastructure/PrismaCouponRepository.js";

describe("PrismaCouponRepository", () => {
  const record = { id: "c1", code: "SAVE", type: "FIXED", value: 5, active: true, expiresAt: null };

  it("maps null and records to domain", () => {
    const repo = new PrismaCouponRepository({});
    expect(repo.toDomain(null)).toBeNull();
    expect(repo.toDomain(record)).toBeInstanceOf(Coupon);
  });

  it("creates coupon", async () => {
    const prisma = { coupon: { create: vi.fn().mockResolvedValue(record) } };
    const repo = new PrismaCouponRepository(prisma);
    await expect(repo.create(new Coupon(record))).resolves.toBeInstanceOf(Coupon);
    expect(prisma.coupon.create).toHaveBeenCalledWith({ data: { code: "SAVE", type: "FIXED", value: 5, active: true, expiresAt: null } });
  });

  it("finds by code, lists and deletes", async () => {
    const prisma = { coupon: {
      findUnique: vi.fn().mockResolvedValue(record),
      findMany: vi.fn().mockResolvedValue([record]),
      delete: vi.fn().mockResolvedValue(record),
    } };
    const repo = new PrismaCouponRepository(prisma);
    await expect(repo.findByCode("SAVE")).resolves.toBeInstanceOf(Coupon);
    await expect(repo.findMany()).resolves.toHaveLength(1);
    await expect(repo.delete("c1")).resolves.toBeInstanceOf(Coupon);
  });
});
