import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/cart/application/container",
  () => ({
    updateCartItemQuantityUseCase: {
      execute: vi.fn(),
    },
    removeFromCartUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  updateCartItemQuantityUseCase,
} from "@/modules/cart/application/container";

import {
  PATCH,
} from "@/app/api/cart/items/[id]/route";

describe("PATCH cart item route", () => {
  it("updates item quantity", async () => {
    updateCartItemQuantityUseCase.execute.mockResolvedValue({
      id: "item1",
    });

    const response =
      await PATCH(
        {
          json: vi.fn().mockResolvedValue({
            userId: "user1",
            quantity: 2,
          }),
        },
        {
          params: {
            id: "product1",
          },
        }
      );

    expect(response.status).toBe(200);
  });

  it("returns 400 on error", async () => {
    updateCartItemQuantityUseCase.execute.mockRejectedValue(
      new Error("error")
    );

    const response =
      await PATCH(
        {
          json: vi.fn().mockResolvedValue({}),
        },
        {
          params: {
            id: "product1",
          },
        }
      );

    expect(response.status).toBe(400);
  });
});
