import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/brand/application/container",
  () => ({
    createBrandUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  createBrandUseCase,
} from "@/modules/brand/application/container";

import {
  POST,
} from "@/app/api/admin/brands/route";

describe("POST brand route", () => {
  it("creates brand", async () => {
    createBrandUseCase.execute.mockResolvedValue({
      id: "1",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "Apple",
      }),
    };

    const response =
      await POST(request);

    expect(
      response.status
    ).toBe(200);
  });

  it("returns 400 on error", async () => {
    createBrandUseCase.execute.mockRejectedValue(
      new Error("error")
    );

    const request = {
      json: vi.fn().mockResolvedValue({}),
    };

    const response =
      await POST(request);

    expect(
      response.status
    ).toBe(400);
  });
});