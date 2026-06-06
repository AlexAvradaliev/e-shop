import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/cart/application/container",
  () => ({
    getCartUseCase: {
      execute: vi.fn(),
    },
    clearCartUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  clearCartUseCase,
} from "@/modules/cart/application/container";

import {
  DELETE,
} from "@/app/api/cart/route";

describe("DELETE cart route", () => {
  it("clears cart", async () => {
    clearCartUseCase.execute.mockResolvedValue();

    const response =
      await DELETE({
        json: vi.fn().mockResolvedValue({
          userId: "user1",
        }),
      });

    expect(response.status).toBe(200);
  });

  it("returns 400 on error", async () => {
    clearCartUseCase.execute.mockRejectedValue(
      new Error("error")
    );

    const response =
      await DELETE({
        json: vi.fn().mockResolvedValue({
          userId: "user1",
        }),
      });

    expect(response.status).toBe(400);
  });
});
