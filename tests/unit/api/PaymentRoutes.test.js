import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock(
  "@/modules/payment/application/container.js",
  () => ({
    createCheckoutSessionUseCase: {
      execute: vi.fn(),
    },
    handleWebhookUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  createCheckoutSessionUseCase,
  handleWebhookUseCase,
} from "@/modules/payment/application/container.js";

import {
  POST as createCheckoutSession,
} from "@/app/api/payment/checkout/route.js";

import {
  POST as handleWebhook,
} from "@/app/api/payment/webhook/route.js";

describe("Payment API routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("creates checkout session", async () => {
    createCheckoutSessionUseCase.execute.mockResolvedValue({
      id: "cs_test_1",
      url: "https://checkout.stripe.com/test",
    });

    const checkoutInput = {
      orderId: "order-1",
      items: [
        {
          name: "Product",
          unitAmount: 1000,
          quantity: 1,
        },
      ],
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    };

    const request = {
      json: vi.fn().mockResolvedValue(checkoutInput),
    };

    const response = await createCheckoutSession(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "cs_test_1",
      url: "https://checkout.stripe.com/test",
    });
    expect(createCheckoutSessionUseCase.execute).toHaveBeenCalledWith(
      checkoutInput
    );
  });

  it("returns 400 when checkout session creation fails", async () => {
    createCheckoutSessionUseCase.execute.mockRejectedValue(
      new Error("Order id is required")
    );

    const request = {
      json: vi.fn().mockResolvedValue({}),
    };

    const response = await createCheckoutSession(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "Order id is required",
    });
  });

  it("handles payment webhook", async () => {
    handleWebhookUseCase.execute.mockResolvedValue({
      handled: true,
      orderId: "order-1",
      status: "PAID",
    });

    const request = {
      text: vi.fn().mockResolvedValue("raw-payload"),
      headers: {
        get: vi.fn().mockReturnValue("stripe-signature-value"),
      },
    };

    const response = await handleWebhook(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      handled: true,
      orderId: "order-1",
      status: "PAID",
    });
    expect(handleWebhookUseCase.execute).toHaveBeenCalledWith({
      payload: "raw-payload",
      signature: "stripe-signature-value",
    });
    expect(request.headers.get).toHaveBeenCalledWith("stripe-signature");
  });

  it("returns 400 when webhook handling fails", async () => {
    handleWebhookUseCase.execute.mockRejectedValue(
      new Error("Invalid webhook signature")
    );

    const request = {
      text: vi.fn().mockResolvedValue("raw-payload"),
      headers: {
        get: vi.fn().mockReturnValue("bad-signature"),
      },
    };

    const response = await handleWebhook(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "Invalid webhook signature",
    });
  });
});
