export class CreateCheckoutSessionUseCase {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  async execute({ orderId, items, successUrl, cancelUrl }) {
    if (!orderId) throw new Error("Order id is required");
    if (!Array.isArray(items) || items.length === 0) throw new Error("Checkout items are required");
    if (!successUrl) throw new Error("Success URL is required");
    if (!cancelUrl) throw new Error("Cancel URL is required");

    return this.paymentGateway.createCheckoutSession({ orderId, items, successUrl, cancelUrl });
  }
}
