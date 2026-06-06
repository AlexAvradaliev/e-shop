import { GetProductByIdUseCase }
from "@/modules/catalog/application/use-cases/GetProductByIdUseCase";
import { describe, it, expect, vi }
from "vitest";

describe(
  "GetProductByIdUseCase",
  () => {
    it(
      "returns product by id",
      async () => {
        const mockRepository = {
          findById:
            vi.fn().mockResolvedValue({
              id: "1",
              name: "AirPods Pro",
            }),
        };

        const useCase =
          new GetProductByIdUseCase(
            mockRepository
          );

        const result =
          await useCase.execute(
            "1"
          );

        expect(
          mockRepository.findById
        ).toHaveBeenCalledWith(
          "1"
        );

        expect(
          result.name
        ).toBe(
          "AirPods Pro"
        );
      }
    );
  }
);