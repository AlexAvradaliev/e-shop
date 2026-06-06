import { describe, it, expect, vi } from "vitest";
import { GetBrandsUseCase } from "@/modules/brand/application/GetBrandsUseCase";

describe("GetBrandsUseCase", () => {
  it("returns brands", async () => {
    const repository = {
      findAll: vi.fn().mockResolvedValue([
        {
          id: "1",
        },
      ]),
    };

    const useCase =
      new GetBrandsUseCase(
        repository
      );

    const result =
      await useCase.execute();

    expect(
      result.length
    ).toBe(1);
  });
});