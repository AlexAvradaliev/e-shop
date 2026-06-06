export class InventoryItem {
  constructor({ id, productId, quantity = 0, reserved = 0, createdAt = null, updatedAt = null }) {
    if (!productId) throw new Error("Product id is required");
    if (quantity < 0) throw new Error("Quantity cannot be negative");
    if (reserved < 0) throw new Error("Reserved quantity cannot be negative");
    if (reserved > quantity) throw new Error("Reserved quantity cannot exceed quantity");

    this.id = id;
    this.productId = productId;
    this.quantity = quantity;
    this.reserved = reserved;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getAvailable() {
    return this.quantity - this.reserved;
  }

  reserve(amount) {
    if (amount <= 0) throw new Error("Reserve amount must be positive");
    if (amount > this.getAvailable()) throw new Error("Insufficient stock");
    this.reserved += amount;
    return this;
  }

  release(amount) {
    if (amount <= 0) throw new Error("Release amount must be positive");
    if (amount > this.reserved) throw new Error("Cannot release more than reserved");
    this.reserved -= amount;
    return this;
  }

  adjust(amount) {
    if (amount < 0) throw new Error("Quantity cannot be negative");
    if (amount < this.reserved) throw new Error("Quantity cannot be below reserved stock");
    this.quantity = amount;
    return this;
  }
}
