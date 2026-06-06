import { describe, expect, it, vi } from "vitest";
import { CreateCheckoutSessionUseCase } from "../../../modules/payment/application/CreateCheckoutSessionUseCase.js";
import { HandleWebhookUseCase } from "../../../modules/payment/application/HandleWebhookUseCase.js";

describe("Payment use cases", () => {
  it("creates checkout session", async () => {
    const gateway = { createCheckoutSession: vi.fn().mockResolvedValue({ id: "cs_1" }) };
    const input = { orderId: "o1", items: [{ name: "Product", unitAmount: 1000, quantity: 1 }], successUrl: "ok", cancelUrl: "cancel" };
    await expect(new CreateCheckoutSessionUseCase(gateway).execute(input)).resolves.toEqual({ id: "cs_1" });
  });

  it("validates checkout input", async () => {
    const useCase = new CreateCheckoutSessionUseCase({});
    await expect(useCase.execute({ items: [{}], successUrl: "ok", cancelUrl: "no" })).rejects.toThrow("Order id is required");
    await expect(useCase.execute({ orderId: "o", items: [], successUrl: "ok", cancelUrl: "no" })).rejects.toThrow("Checkout items are required");
    await expect(useCase.execute({ orderId: "o", items: [{}], cancelUrl: "no" })).rejects.toThrow("Success URL is required");
    await expect(useCase.execute({ orderId: "o", items: [{}], successUrl: "ok" })).rejects.toThrow("Cancel URL is required");
  });

  it("handles completed checkout webhook", async () => {
    const gateway = { constructWebhookEvent: vi.fn().mockReturnValue({ type: "checkout.session.completed", data: { object: { metadata: { orderId: "o1" } } } }) };
    const orderRepository = { updateStatus: vi.fn().mockResolvedValue({}) };
    await expect(new HandleWebhookUseCase(gateway, orderRepository).execute({ payload: "p", signature: "s" })).resolves.toEqual({ handled: true, orderId: "o1", status: "PAID" });
    expect(orderRepository.updateStatus).toHaveBeenCalledWith("o1", "PAID");
  });

  it("ignores unsupported webhook events", async () => {
    const gateway = { constructWebhookEvent: vi.fn().mockReturnValue({ type: "other.event" }) };
    await expect(new HandleWebhookUseCase(gateway, {}).execute({ payload: "p", signature: "s" })).resolves.toEqual({ handled: false, type: "other.event" });
  });
});
