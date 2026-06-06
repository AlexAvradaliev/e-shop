import { describe, it, expect, vi } from "vitest";
import { GetBrandByIdUseCase } from "@/modules/brand/application/GetBrandByIdUseCase";

describe("GetBrandByIdUseCase", () => {
  it("returns brand", async () => {
    const repository = {
      findById: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const useCase =
      new GetBrandByIdUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "1"
      );

    expect(result.id).toBe(
      "1"
    );
  });
});