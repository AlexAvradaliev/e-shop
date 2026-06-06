import { describe, expect, it, vi } from "vitest";
import { StripePaymentGateway } from "../../../modules/payment/infrastructure/StripePaymentGateway.js";

describe("StripePaymentGateway", () => {
  it("creates stripe checkout session", async () => {
    const stripe = { checkout: { sessions: { create: vi.fn().mockResolvedValue({ id: "cs" }) } }, webhooks: { constructEvent: vi.fn() } };
    const gateway = new StripePaymentGateway(stripe, "secret");
    await expect(gateway.createCheckoutSession({ orderId: "o", items: [{ name: "A", unitAmount: 100, quantity: 2 }], successUrl: "s", cancelUrl: "c" })).resolves.toEqual({ id: "cs" });
    expect(stripe.checkout.sessions.create).toHaveBeenCalledWith(expect.objectContaining({ mode: "payment", metadata: { orderId: "o" } }));
  });

  it("constructs webhook event", () => {
    const stripe = { checkout: { sessions: { create: vi.fn() } }, webhooks: { constructEvent: vi.fn().mockReturnValue({ type: "x" }) } };
    const gateway = new StripePaymentGateway(stripe, "secret");
    expect(gateway.constructWebhookEvent("payload", "sig")).toEqual({ type: "x" });
    expect(stripe.webhooks.constructEvent).toHaveBeenCalledWith("payload", "sig", "secret");
  });
});
