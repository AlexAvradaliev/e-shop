import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/category/application/container",
  () => ({
    getCategoryByIdUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getCategoryByIdUseCase,
} from "@/modules/category/application/container";

import {
  GET,
} from "@/app/api/admin/categories/[id]/route";

describe("GET category by id route", () => {
  it("returns category", async () => {
    getCategoryByIdUseCase.execute.mockResolvedValue({
      id: "1",
      name: "Phones",
      slug: "phones",
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

    const data =
      await response.json();

    expect(data.id).toBe("1");
  });

  it("returns 404 when category not found", async () => {
    getCategoryByIdUseCase.execute.mockResolvedValue(
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