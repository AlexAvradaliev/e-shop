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
  getCartUseCase,
} from "@/modules/cart/application/container";

import {
  GET,
} from "@/app/api/cart/route";

describe("GET cart route", () => {
  it("returns cart", async () => {
    getCartUseCase.execute.mockResolvedValue({
      id: "cart1",
    });

    const request = {
      nextUrl: {
        searchParams: {
          get: vi.fn().mockReturnValue(
            "user1"
          ),
        },
      },
    };

    const response =
      await GET(request);

    expect(response.status).toBe(200);
  });
});
