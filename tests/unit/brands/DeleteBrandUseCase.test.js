import { describe, it, expect, vi } from "vitest";
import { DeleteBrandUseCase } from "@/modules/brand/application/DeleteBrandUseCase";

describe("DeleteBrandUseCase", () => {
  it("deletes brand", async () => {
    const repository = {
      delete: vi.fn().mockResolvedValue({
        id: "1",
      }),
    };

    const useCase =
      new DeleteBrandUseCase(
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