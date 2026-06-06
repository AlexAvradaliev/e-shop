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

import { getOrderByIdUseCase } from "@/modules/order/application/container";
import { GET } from "@/app/api/admin/orders/[id]/route";

describe("GET order by id route", () => {
  it("returns order", async () => {
    getOrderByIdUseCase.execute.mockResolvedValue({
      id: "1",
    });

    const response =
      await GET(
        {},
        {
          params: {
            id: "1",
          },
        }
      );

    expect(response.status).toBe(200);
  });

  it("returns 404 when order does not exist", async () => {
    getOrderByIdUseCase.execute.mockResolvedValue(
      null
    );

    const response =
      await GET(
        {},
        {
          params: {
            id: "missing",
          },
        }
      );

    const data =
      await response.json();

    expect(response.status).toBe(404);
    expect(data).toEqual({
      error: "Order not found",
    });
  });
});
