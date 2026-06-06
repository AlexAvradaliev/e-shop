import { describe, expect, it } from "vitest";
import { InventoryItem } from "../../../modules/inventory/domain/InventoryItem.js";

describe("InventoryItem", () => {
  it("calculates available stock", () => {
    const item = new InventoryItem({ productId: "p1", quantity: 10, reserved: 3 });
    expect(item.getAvailable()).toBe(7);
  });

  it("reserves, releases, and adjusts stock", () => {
    const item = new InventoryItem({ productId: "p1", quantity: 10 });
    item.reserve(4).release(2).adjust(8);
    expect(item.reserved).toBe(2);
    expect(item.quantity).toBe(8);
  });

  it("rejects invalid construction and operations", () => {
    expect(() => new InventoryItem({ quantity: 1 })).toThrow("Product id is required");
    expect(() => new InventoryItem({ productId: "p", quantity: -1 })).toThrow("Quantity cannot be negative");
    expect(() => new InventoryItem({ productId: "p", quantity: 1, reserved: -1 })).toThrow("Reserved quantity cannot be negative");
    expect(() => new InventoryItem({ productId: "p", quantity: 1, reserved: 2 })).toThrow("Reserved quantity cannot exceed quantity");

    const item = new InventoryItem({ productId: "p", quantity: 1 });
    expect(() => item.reserve(0)).toThrow("Reserve amount must be positive");
    expect(() => item.reserve(2)).toThrow("Insufficient stock");
    expect(() => item.release(0)).toThrow("Release amount must be positive");
    expect(() => item.release(1)).toThrow("Cannot release more than reserved");
    expect(() => item.adjust(-1)).toThrow("Quantity cannot be negative");
    item.reserve(1);
    expect(() => item.adjust(0)).toThrow("Quantity cannot be below reserved stock");
  });
});
