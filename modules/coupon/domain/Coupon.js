export class Coupon {
  constructor({ id, code, type, value, active = true, expiresAt = null, createdAt = null, updatedAt = null }) {
    if (!code || typeof code !== "string") throw new Error("Coupon code is required");
    if (!type || !["PERCENTAGE", "FIXED"].includes(type)) throw new Error("Invalid coupon type");
    if (typeof value !== "number" || value <= 0) throw new Error("Coupon value must be positive");
    if (type === "PERCENTAGE" && value > 100) throw new Error("Percentage coupon cannot exceed 100");

    this.id = id;
    this.code = code.trim().toUpperCase();
    this.type = type;
    this.value = value;
    this.active = active;
    this.expiresAt = expiresAt ? new Date(expiresAt) : null;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  isExpired(now = new Date()) {
    return this.expiresAt ? this.expiresAt.getTime() < now.getTime() : false;
  }

  isValid(now = new Date()) {
    return this.active && !this.isExpired(now);
  }

  applyTo(total) {
    if (typeof total !== "number" || total < 0) throw new Error("Total must be a positive number or zero");
    if (!this.isValid()) throw new Error("Coupon is not valid");

    const discount = this.type === "PERCENTAGE" ? total * (this.value / 100) : this.value;
    return Math.max(0, total - discount);
  }
}
