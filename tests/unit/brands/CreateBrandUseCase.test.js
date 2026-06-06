import { describe, it, expect, vi } from "vitest";
import { CreateBrandUseCase } from "@/modules/brand/application/CreateBrandUseCase";

describe("CreateBrandUseCase", () => {
  it("creates brand", async () => {
    const brand = {
      id: "1",
      name: "Apple",
      slug: "apple",
    };

    const repository = {
      save: vi.fn().mockResolvedValue(
        brand
      ),
    };

    const useCase =
      new CreateBrandUseCase(
        repository
      );

    const result =
      await useCase.execute({
        name: "Apple",
        slug: "apple",
      });

    expect(
      repository.save
    ).toHaveBeenCalled();

    expect(result).toEqual(
      brand
    );
  });
});