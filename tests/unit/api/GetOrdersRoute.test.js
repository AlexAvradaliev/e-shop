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

import { getOrdersUseCase } from "@/modules/order/application/container";
import { GET } from "@/app/api/admin/orders/route";

describe("GET orders route", () => {
  it("returns orders", async () => {
    getOrdersUseCase.execute.mockResolvedValue([
      {
        id: "1",
      },
    ]);

    const response =
      await GET();

    const data =
      await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([
      {
        id: "1",
      },
    ]);
  });
});
