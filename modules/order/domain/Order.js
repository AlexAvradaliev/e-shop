export class Order {
  constructor({
    id,
    userId,
    orderNumber,
    status,
    paymentStatus,
    subtotal,
    shipping,
    total,
  }) {
    if (total < 0) {
      throw new Error(
        "Order total cannot be negative"
      );
    }

    this.id = id;
    this.userId = userId;
    this.orderNumber = orderNumber;
    this.status = status;
    this.paymentStatus = paymentStatus;
    this.subtotal = subtotal;
    this.shipping = shipping;
    this.total = total;
  }
}
