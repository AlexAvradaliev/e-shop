export class Product {
  constructor({
    id,
    name,
    slug,
    description,
    price,
    sku,
    stock,
    status,
    categoryId,
    createdAt,
    updatedAt,
  }) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.price = price;
    this.sku = sku;
    this.stock = stock;
    this.status = status;
    this.categoryId = categoryId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  isActive() {
    return this.status === "ACTIVE";
  }

  hasStock() {
    return this.stock > 0;
  }

  decreaseStock(quantity) {
    if (this.stock < quantity) {
      throw new Error("Insufficient stock");
    }

    this.stock -= quantity;
  }
}