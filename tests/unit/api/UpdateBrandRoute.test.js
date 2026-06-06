import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/brand/application/container",
  () => ({
    updateBrandUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  updateBrandUseCase,
} from "@/modules/brand/application/container";

import {
  PATCH,
} from "@/app/api/admin/brands/[id]/route";

describe("PATCH brand route", () => {
  it("updates brand", async () => {
    updateBrandUseCase.execute.mockResolvedValue({
      id: "1",
    });

    const response =
      await PATCH(
        {
          json: vi.fn().mockResolvedValue({}),
        },
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
  it("returns 400 on update error", async () => {
  updateBrandUseCase.execute.mockRejectedValue(
    new Error("update failed")
  );

  const response =
    await PATCH(
      {
        json: vi.fn().mockResolvedValue({})
      },
      {
        params: {
          id: "1"
        }
      }
    );

  expect(response.status)
    .toBe(400);

  expect(await response.json())
    .toEqual({
      error: "update failed"
    });
});
});