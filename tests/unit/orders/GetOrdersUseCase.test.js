import { describe, it, expect, vi } from "vitest";
import { GetOrdersUseCase } from "@/modules/order/application/GetOrdersUseCase";

describe("GetOrdersUseCase", () => {
  it("returns orders", async () => {
    const repository = {
      findAll: vi.fn().mockResolvedValue([
        { id: "1" },
      ]),
    };

    const useCase =
      new GetOrdersUseCase(repository);

    const result =
      await useCase.execute();

    expect(result).toHaveLength(1);
  });
});