import { describe, expect, it } from "vitest";
import {
  getProductsPaginatedUseCase,
  getProductsUseCase,
} from "@/modules/catalog/application/container.js";

describe("catalog application container", () => {
  it("returns paginated product result", async () => {
    const result = await getProductsPaginatedUseCase.execute({
      page: 2,
      limit: 10,
    });

    expect(result).toEqual({
      products: [],
      items: [],
      page: 2,
      limit: 10,
      total: 0,
      totalPages: 1,
    });
  });

  it("returns default paginated product result", async () => {
    const result = await getProductsPaginatedUseCase.execute();

    expect(result.page).toBe(1);
    expect(result.limit).toBe(12);
    expect(result.totalPages).toBe(1);
  });

  it("exposes products use case", async () => {
    await expect(getProductsUseCase.execute()).resolves.toEqual([]);
  });
});
