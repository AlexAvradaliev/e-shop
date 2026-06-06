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
  removeFromCartUseCase,
} from "@/modules/cart/application/container";

import {
  DELETE,
} from "@/app/api/cart/items/[id]/route";

describe("DELETE cart item route", () => {
  it("removes item", async () => {
    removeFromCartUseCase.execute.mockResolvedValue();

    const response =
      await DELETE(
        {
          json: vi.fn().mockResolvedValue({
            userId: "user1",
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
    removeFromCartUseCase.execute.mockRejectedValue(
      new Error("error")
    );

    const response =
      await DELETE(
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
