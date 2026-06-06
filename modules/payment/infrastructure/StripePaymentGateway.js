export class StripePaymentGateway {
  constructor(stripe, webhookSecret) {
    this.stripe = stripe;
    this.webhookSecret = webhookSecret;
  }

  async createCheckoutSession({ orderId, items, successUrl, cancelUrl }) {
    return this.stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: item.currency || "eur",
          product_data: { name: item.name },
          unit_amount: item.unitAmount,
        },
        quantity: item.quantity,
      })),
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: { orderId },
    });
  }

  constructWebhookEvent(payload, signature) {
    return this.stripe.webhooks.constructEvent(payload, signature, this.webhookSecret);
  }
}
