import { describe, expect, it, vi } from "vitest";
import { InventoryItem } from "../../../modules/inventory/domain/InventoryItem.js";
import { PrismaInventoryRepository } from "../../../modules/inventory/infrastructure/PrismaInventoryRepository.js";

describe("PrismaInventoryRepository", () => {
  const record = { id: "i1", productId: "p1", quantity: 10, reserved: 2 };

  it("maps records", () => {
    const repo = new PrismaInventoryRepository({});
    expect(repo.toDomain(null)).toBeNull();
    expect(repo.toDomain(record)).toBeInstanceOf(InventoryItem);
  });

  it("finds by product id", async () => {
    const prisma = { inventoryItem: { findUnique: vi.fn().mockResolvedValue(record) } };
    await expect(new PrismaInventoryRepository(prisma).findByProductId("p1")).resolves.toBeInstanceOf(InventoryItem);
  });

  it("reserves stock", async () => {
    const prisma = { inventoryItem: { findUnique: vi.fn().mockResolvedValue(record), update: vi.fn().mockResolvedValue({ ...record, reserved: 5 }) } };
    await expect(new PrismaInventoryRepository(prisma).reserveStock("p1", 3)).resolves.toMatchObject({ reserved: 5 });
    expect(prisma.inventoryItem.update).toHaveBeenCalledWith({ where: { productId: "p1" }, data: { reserved: 5 } });
  });

  it("releases stock", async () => {
    const prisma = { inventoryItem: { findUnique: vi.fn().mockResolvedValue(record), update: vi.fn().mockResolvedValue({ ...record, reserved: 1 }) } };
    await expect(new PrismaInventoryRepository(prisma).releaseStock("p1", 1)).resolves.toMatchObject({ reserved: 1 });
  });

  it("adjusts stock", async () => {
    const prisma = { inventoryItem: { findUnique: vi.fn().mockResolvedValue(record), update: vi.fn().mockResolvedValue({ ...record, quantity: 20 }) } };
    await expect(new PrismaInventoryRepository(prisma).adjustStock("p1", 20)).resolves.toMatchObject({ quantity: 20 });
  });

  it("throws when inventory item is missing", async () => {
    const prisma = { inventoryItem: { findUnique: vi.fn().mockResolvedValue(null) } };
    await expect(new PrismaInventoryRepository(prisma).reserveStock("p1", 1)).rejects.toThrow("Inventory item not found");
    await expect(new PrismaInventoryRepository(prisma).releaseStock("p1", 1)).rejects.toThrow("Inventory item not found");
    await expect(new PrismaInventoryRepository(prisma).adjustStock("p1", 1)).rejects.toThrow("Inventory item not found");
  });
});
