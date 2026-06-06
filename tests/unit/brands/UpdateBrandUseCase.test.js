import { describe, it, expect, vi } from "vitest";
import { UpdateBrandUseCase } from "@/modules/brand/application/UpdateBrandUseCase";

describe("UpdateBrandUseCase", () => {
  it("updates brand", async () => {
    const repository = {
      update: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const useCase =
      new UpdateBrandUseCase(
        repository
      );

    const result =
      await useCase.execute(
        "1",
        {}
      );

    expect(result.id).toBe(
      "1"
    );
  });
});