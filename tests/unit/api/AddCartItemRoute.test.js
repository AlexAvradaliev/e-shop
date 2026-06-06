import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/cart/application/container",
  () => ({
    addToCartUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  addToCartUseCase,
} from "@/modules/cart/application/container";

import {
  POST,
} from "@/app/api/cart/items/route";

describe("POST cart item route", () => {
  it("adds item", async () => {
    addToCartUseCase.execute.mockResolvedValue({
      id: "item1",
    });

    const response =
      await POST({
        json: vi.fn().mockResolvedValue({
          userId: "user1",
          productId: "product1",
          quantity: 1,
        }),
      });

    expect(response.status).toBe(200);
  });

  it("returns 400 on error", async () => {
    addToCartUseCase.execute.mockRejectedValue(
      new Error("error")
    );

    const response =
      await POST({
        json: vi.fn().mockResolvedValue({}),
      });

    expect(response.status).toBe(400);
  });
});
