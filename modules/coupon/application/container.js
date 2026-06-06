import { prisma } from "@/server/db/prisma";
import { PrismaCouponRepository } from "@/modules/coupon/infrastructure/PrismaCouponRepository.js";
import { CreateCouponUseCase } from "./CreateCouponUseCase.js";
import { GetCouponsUseCase } from "./GetCouponsUseCase.js";
import { GetCouponByCodeUseCase } from "./GetCouponByCodeUseCase.js";
import { ValidateCouponUseCase } from "./ValidateCouponUseCase.js";
import { DeleteCouponUseCase } from "./DeleteCouponUseCase.js";

const repository = new PrismaCouponRepository(prisma);

export const createCouponUseCase = new CreateCouponUseCase(repository);
export const getCouponsUseCase = new GetCouponsUseCase(repository);
export const getCouponByCodeUseCase = new GetCouponByCodeUseCase(repository);
export const validateCouponUseCase = new ValidateCouponUseCase(repository);
export const deleteCouponUseCase = new DeleteCouponUseCase(repository);
