import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/order/application/container",
  () => ({
    getOrdersUseCase: {
      execute: vi.fn(),
    },
    createOrderUseCase: {
      execute: vi.fn(),
    },
  })
);

import { createOrderUseCase } from "@/modules/order/application/container";
import { POST } from "@/app/api/admin/orders/route";

describe("POST order route", () => {
  it("creates order", async () => {
    createOrderUseCase.execute.mockResolvedValue({
      id: "1",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        orderNumber: "ORD-001",
      }),
    };

    const response =
      await POST(request);

    expect(response.status).toBe(200);
  });

  it("returns 400 on error", async () => {
    createOrderUseCase.execute.mockRejectedValue(
      new Error("create failed")
    );

    const request = {
      json: vi.fn().mockResolvedValue({}),
    };

    const response =
      await POST(request);

    const data =
      await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: "create failed",
    });
  });
});
