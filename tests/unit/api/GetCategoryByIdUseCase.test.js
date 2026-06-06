import { describe, it, expect, vi } from "vitest";
import { GetCategoryByIdUseCase } from "@/modules/category/application/GetCategoryByIdUseCase";

describe("GetCategoryByIdUseCase", () => {
  it("returns category by id", async () => {
    const category = {
      id: "1",
      name: "Phones",
      slug: "phones",
    };

    const repository = {
      findById: vi.fn().mockResolvedValue(
        category
      ),
    };

    const useCase =
      new GetCategoryByIdUseCase(
        repository
      );

    const result =
      await useCase.execute("1");

    expect(
      repository.findById
    ).toHaveBeenCalledWith("1");

    expect(result).toEqual(
      category
    );
  });
});