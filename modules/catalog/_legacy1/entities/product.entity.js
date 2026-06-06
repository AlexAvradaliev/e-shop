export class Product {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.price = Number(data.price);
    this.stock = data.stock;
    this.status = data.status;
  }

  isActive() {
    return this.status === "ACTIVE";
  }

  isInStock() {
    return this.stock > 0;
  }

  canPurchase(quantity) {
    return this.stock >= quantity;
  }
}