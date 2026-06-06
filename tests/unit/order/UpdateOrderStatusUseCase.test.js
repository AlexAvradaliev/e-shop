import { describe, it, expect, vi } from "vitest";
import { UpdateOrderStatusUseCase } from "@/modules/order/application/UpdateOrderStatusUseCase";

describe("UpdateOrderStatusUseCase", () => {
  it("updates order status", async () => {
    const repository = {
      updateStatus: vi.fn().mockResolvedValue({
        id: "1",
        status: "PAID",
      }),
    };

    const useCase =
      new UpdateOrderStatusUseCase(repository);

    const result =
      await useCase.execute("1", "PAID");

    expect(repository.updateStatus)
      .toHaveBeenCalledWith("1", "PAID");

    expect(result.status).toBe("PAID");
  });
});