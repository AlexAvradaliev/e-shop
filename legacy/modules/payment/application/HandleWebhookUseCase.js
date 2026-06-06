export class HandleWebhookUseCase {
  constructor(paymentGateway, orderRepository) {
    this.paymentGateway = paymentGateway;
    this.orderRepository = orderRepository;
  }

  async execute({ payload, signature }) {
    const event = this.paymentGateway.constructWebhookEvent(payload, signature);

    if (event.type === "checkout.session.completed") {
      const orderId = event.data.object.metadata.orderId;
      await this.orderRepository.updateStatus(orderId, "PAID");
      return { handled: true, orderId, status: "PAID" };
    }

    return { handled: false, type: event.type };
  }
}
