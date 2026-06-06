import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/catalog/application/container",
  () => ({
    updateProductUseCase: {
      execute: vi.fn(),
    },
    deleteProductUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  updateProductUseCase,
} from "@/modules/catalog/application/container";

import {
  PATCH,
} from "@/app/api/admin/products/[id]/route";

describe("PATCH product route", () => {
  it("updates product", async () => {
    updateProductUseCase.execute.mockResolvedValue(
      {
        id: "1",
        name: "Updated",
      }
    );

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "Updated",
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
    updateProductUseCase.execute.mockRejectedValue(
      new Error("Invalid")
    );

    const request = {
      json: vi.fn().mockResolvedValue(
        {}
      ),
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