import { describe, it, expect, vi } from "vitest";

vi.mock(
  "@/modules/catalog/application/container",
  () => ({
    deleteProductUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  deleteProductUseCase,
} from "@/modules/catalog/application/container";

import {
  DELETE,
} from "@/app/api/admin/products/[id]/route";

describe("DELETE product route", () => {
  it("deletes product", async () => {
    deleteProductUseCase.execute.mockResolvedValue();

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
  deleteProductUseCase.execute.mockRejectedValue(
    new Error(
      "Product not found"
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