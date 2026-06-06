import { PrismaInventoryRepository } from "./infrastructure/PrismaInventoryRepository.js";
import { ReserveStockUseCase } from "./application/ReserveStockUseCase.js";
import { ReleaseStockUseCase } from "./application/ReleaseStockUseCase.js";
import { AdjustStockUseCase } from "./application/AdjustStockUseCase.js";

export function createInventoryContainer(prisma) {
  const repository = new PrismaInventoryRepository(prisma);
  const reserveStockUseCase = new ReserveStockUseCase(repository);
  const releaseStockUseCase = new ReleaseStockUseCase(repository);
  const adjustStockUseCase = new AdjustStockUseCase(repository);

  return {
    reserveStockUseCase,
    releaseStockUseCase,
    adjustStockUseCase,
  };
}
