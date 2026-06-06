import { describe, expect, it, vi } from "vitest";
import { ReserveStockUseCase } from "../../../modules/inventory/application/ReserveStockUseCase.js";
import { ReleaseStockUseCase } from "../../../modules/inventory/application/ReleaseStockUseCase.js";
import { AdjustStockUseCase } from "../../../modules/inventory/application/AdjustStockUseCase.js";

describe("Inventory use cases", () => {
  it("delegates reserve/release/adjust", async () => {
    const repo = {
      reserveStock: vi.fn().mockResolvedValue("reserved"),
      releaseStock: vi.fn().mockResolvedValue("released"),
      adjustStock: vi.fn().mockResolvedValue("adjusted"),
    };

    await expect(
      new ReserveStockUseCase(repo).execute({ productId: "p", quantity: 1 }),
    ).resolves.toBe("reserved");
    await expect(
      new ReleaseStockUseCase(repo).execute({ productId: "p", quantity: 1 }),
    ).resolves.toBe("released");
    await expect(
      new AdjustStockUseCase(repo).execute({ productId: "p", quantity: 1 }),
    ).resolves.toBe("adjusted");

    expect(repo.reserveStock).toHaveBeenCalledWith("p", 1);
    expect(repo.releaseStock).toHaveBeenCalledWith("p", 1);
    expect(repo.adjustStock).toHaveBeenCalledWith("p", 1);
  });

  it("rejects reserve without product id", async () => {
    const repo = { reserveStock: vi.fn() };

    await expect(
      new ReserveStockUseCase(repo).execute({ quantity: 1 }),
    ).rejects.toThrow("Product id is required");
    expect(repo.reserveStock).not.toHaveBeenCalled();
  });

  it("rejects reserve with invalid quantity", async () => {
    const repo = { reserveStock: vi.fn() };

    await expect(
      new ReserveStockUseCase(repo).execute({ productId: "p", quantity: 0 }),
    ).rejects.toThrow("Quantity must be positive");
    await expect(
      new ReserveStockUseCase(repo).execute({ productId: "p", quantity: "1" }),
    ).rejects.toThrow("Quantity must be positive");
    expect(repo.reserveStock).not.toHaveBeenCalled();
  });

  it("rejects release without product id", async () => {
    const repo = { releaseStock: vi.fn() };

    await expect(
      new ReleaseStockUseCase(repo).execute({ quantity: 1 }),
    ).rejects.toThrow("Product id is required");
    expect(repo.releaseStock).not.toHaveBeenCalled();
  });

  it("rejects release with invalid quantity", async () => {
    const repo = { releaseStock: vi.fn() };

    await expect(
      new ReleaseStockUseCase(repo).execute({ productId: "p", quantity: 0 }),
    ).rejects.toThrow("Quantity must be positive");
    await expect(
      new ReleaseStockUseCase(repo).execute({ productId: "p", quantity: "1" }),
    ).rejects.toThrow("Quantity must be positive");
    expect(repo.releaseStock).not.toHaveBeenCalled();
  });

  it("rejects adjust without product id", async () => {
    const repo = { adjustStock: vi.fn() };

    await expect(
      new AdjustStockUseCase(repo).execute({ quantity: 1 }),
    ).rejects.toThrow("Product id is required");
    expect(repo.adjustStock).not.toHaveBeenCalled();
  });

  it("rejects adjust with invalid quantity", async () => {
    const repo = { adjustStock: vi.fn() };

    await expect(
      new AdjustStockUseCase(repo).execute({ productId: "p", quantity: -1 }),
    ).rejects.toThrow("Quantity must be positive");
    await expect(
      new AdjustStockUseCase(repo).execute({ productId: "p", quantity: "1" }),
    ).rejects.toThrow("Quantity must be positive");
    expect(repo.adjustStock).not.toHaveBeenCalled();
  });
});
