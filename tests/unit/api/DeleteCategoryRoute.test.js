import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/category/application/container",
  () => ({
    deleteCategoryUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  deleteCategoryUseCase,
} from "@/modules/category/application/container";

import {
  DELETE,
} from "@/app/api/admin/categories/[id]/route";

describe("DELETE category route", () => {
  it("deletes category", async () => {
    deleteCategoryUseCase.execute.mockResolvedValue();

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

  it("returns 400 on error", async () => {
    deleteCategoryUseCase.execute.mockRejectedValue(
      new Error(
        "Category not found"
      )
    );

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
    ).toBe(400);
  });
});