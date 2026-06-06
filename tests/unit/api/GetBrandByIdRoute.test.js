import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/brand/application/container",
  () => ({
    getBrandByIdUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getBrandByIdUseCase,
} from "@/modules/brand/application/container";

import {
  GET,
} from "@/app/api/admin/brands/[id]/route";

describe("GET brand by id route", () => {
  it("returns brand", async () => {
    getBrandByIdUseCase.execute.mockResolvedValue({
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

    expect(
      response.status
    ).toBe(200);
  });

  it("returns 404", async () => {
    getBrandByIdUseCase.execute.mockResolvedValue(
      null
    );

    const response =
      await GET(
        {},
        {
          params: {
            id: "1",
          },
        }
      );

    expect(
      response.status
    ).toBe(404);
  });
});