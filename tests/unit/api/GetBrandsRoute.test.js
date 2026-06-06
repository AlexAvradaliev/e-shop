import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/brand/application/container",
  () => ({
    getBrandsUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getBrandsUseCase,
} from "@/modules/brand/application/container";

import {
  GET,
} from "@/app/api/admin/brands/route";

describe("GET brands route", () => {
  it("returns brands", async () => {
    getBrandsUseCase.execute.mockResolvedValue([
      {
        id: "1",
        name: "Apple",
      },
    ]);

    const response =
      await GET();

    expect(
      response.status
    ).toBe(200);
  });
});