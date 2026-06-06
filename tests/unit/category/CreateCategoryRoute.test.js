import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/category/application/container",
  () => ({
    createCategoryUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  createCategoryUseCase,
} from "@/modules/category/application/container";

import {
  POST,
} from "@/app/api/admin/categories/route";

describe("POST category route", () => {
  it("creates category", async () => {
    const category = {
      id: "1",
      name: "Phones",
      slug: "phones",
    };

    createCategoryUseCase.execute.mockResolvedValue(
      category
    );

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "Phones",
        slug: "phones",
      }),
    };

    const response =
      await POST(request);

    const data =
      await response.json();

    expect(
      response.status
    ).toBe(200);

    expect(data).toEqual(
      category
    );
  });

  it("returns 400 on error", async () => {
    createCategoryUseCase.execute.mockRejectedValue(
      new Error("Invalid data")
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