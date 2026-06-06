import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/brand/application/container",
  () => ({
    deleteBrandUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  deleteBrandUseCase,
} from "@/modules/brand/application/container";

import {
  DELETE,
} from "@/app/api/admin/brands/[id]/route";

describe("DELETE brand route", () => {
  it("deletes brand", async () => {
    deleteBrandUseCase.execute.mockResolvedValue();

    const response =
      await DELETE(
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
  it("returns 400 on delete error", async () => {
  deleteBrandUseCase.execute.mockRejectedValue(
    new Error("delete failed")
  );

  const response =
    await DELETE(
      {},
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
      error: "delete failed"
    });
});
});