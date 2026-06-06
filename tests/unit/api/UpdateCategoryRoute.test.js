import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/category/application/container",
  () => ({
    updateCategoryUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  updateCategoryUseCase,
} from "@/modules/category/application/container";

import {
  PATCH,
} from "@/app/api/admin/categories/[id]/route";

describe("PATCH category route", () => {
  it("updates category", async () => {
    updateCategoryUseCase.execute.mockResolvedValue({
      id: "1",
      name: "Phones",
      slug: "phones",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "Phones",
        slug: "phones",
      }),
    };

    const response =
      await PATCH(
        request,
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
    updateCategoryUseCase.execute.mockRejectedValue(
      new Error(
        "Category not found"
      )
    );

    const request = {
      json: vi.fn().mockResolvedValue({}),
    };

    const response =
      await PATCH(
        request,
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