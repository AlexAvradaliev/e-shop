import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/category/application/container",
  () => ({
    getCategoriesUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getCategoriesUseCase,
} from "@/modules/category/application/container";

import {
  GET,
} from "@/app/api/admin/categories/route";

describe("GET categories route", () => {
  it("returns categories", async () => {
    const categories = [
      {
        id: "1",
        name: "Phones",
        slug: "phones",
      },
    ];

    getCategoriesUseCase.execute.mockResolvedValue(
      categories
    );

    const response =
      await GET();

    const data =
      await response.json();

    expect(
      response.status
    ).toBe(200);

    expect(data).toEqual(
      categories
    );
  });
}); 