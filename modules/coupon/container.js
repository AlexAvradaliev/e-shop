import { PrismaCouponRepository } from "./infrastructure/PrismaCouponRepository.js";
import { CreateCouponUseCase } from "./application/CreateCouponUseCase.js";
import { GetCouponsUseCase } from "./application/GetCouponsUseCase.js";
import { GetCouponByCodeUseCase } from "./application/GetCouponByCodeUseCase.js";
import { ValidateCouponUseCase } from "./application/ValidateCouponUseCase.js";
import { DeleteCouponUseCase } from "./application/DeleteCouponUseCase.js";

export function createCouponContainer(prisma) {
  const repository = new PrismaCouponRepository(prisma);
  const createCouponUseCase = new CreateCouponUseCase(repository);
  const getCouponsUseCase = new GetCouponsUseCase(repository);
  const getCouponByCodeUseCase = new GetCouponByCodeUseCase(repository);
  const validateCouponUseCase = new ValidateCouponUseCase(repository);
  const deleteCouponUseCase = new DeleteCouponUseCase(repository);

  return {
    createCouponUseCase,
    getCouponsUseCase,
    getCouponByCodeUseCase,
    validateCouponUseCase,
    deleteCouponUseCase,
  };
}
