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
    brandId,
  }) {
    if (stock < 0) {
      throw new Error(
        "Stock cannot be negative"
      );
    }

    this.id = id;
    this.name = name;
    this.slug = slug;
    this.description = description;
    this.price = price;
    this.sku = sku;
    this.stock = stock;
    this.status = status;

    this.categoryId = categoryId;
    this.brandId = brandId;
  }

  decreaseStock(quantity) {
    if (quantity <= 0) {
      throw new Error(
        "Quantity must be positive"
      );
    }

    if (quantity > this.stock) {
      throw new Error(
        "Insufficient stock"
      );
    }

    this.stock -= quantity;
  }
}