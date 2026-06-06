import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/order/application/container",
  () => ({
    getOrderByIdUseCase: {
      execute: vi.fn(),
    },
    updateOrderStatusUseCase: {
      execute: vi.fn(),
    },
  })
);

import { updateOrderStatusUseCase } from "@/modules/order/application/container";
import { PATCH } from "@/app/api/admin/orders/[id]/route";

describe("PATCH order status route", () => {
  it("updates order status", async () => {
    updateOrderStatusUseCase.execute.mockResolvedValue({
      id: "1",
      status: "PAID",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        status: "PAID",
      }),
    };

    const response =
      await PATCH(
        request,
        {
          params: {
            id: "1",
          },
        }
      );

    expect(response.status).toBe(200);
  });

  it("returns 400 on error", async () => {
    updateOrderStatusUseCase.execute.mockRejectedValue(
      new Error("update failed")
    );

    const request = {
      json: vi.fn().mockResolvedValue({
        status: "PAID",
      }),
    };

    const response =
      await PATCH(
        request,
        {
          params: {
            id: "1",
          },
        }
      );

    const data =
      await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: "update failed",
    });
  });
});
