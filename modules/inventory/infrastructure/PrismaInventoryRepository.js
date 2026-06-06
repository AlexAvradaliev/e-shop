import { InventoryItem } from "../domain/InventoryItem.js";

export class PrismaInventoryRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  toDomain(record) {
    return record ? new InventoryItem(record) : null;
  }

  async findByProductId(productId) {
    const record = await this.prisma.inventoryItem.findUnique({ where: { productId } });
    return this.toDomain(record);
  }

  async reserveStock(productId, quantity) {
    const item = await this.findByProductId(productId);
    if (!item) throw new Error("Inventory item not found");
    item.reserve(quantity);
    const record = await this.prisma.inventoryItem.update({
      where: { productId },
      data: { reserved: item.reserved },
    });
    return this.toDomain(record);
  }

  async releaseStock(productId, quantity) {
    const item = await this.findByProductId(productId);
    if (!item) throw new Error("Inventory item not found");
    item.release(quantity);
    const record = await this.prisma.inventoryItem.update({
      where: { productId },
      data: { reserved: item.reserved },
    });
    return this.toDomain(record);
  }

  async adjustStock(productId, quantity) {
    const item = await this.findByProductId(productId);
    if (!item) throw new Error("Inventory item not found");
    item.adjust(quantity);
    const record = await this.prisma.inventoryItem.update({
      where: { productId },
      data: { quantity: item.quantity },
    });
    return this.toDomain(record);
  }
}
