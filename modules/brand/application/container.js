import { PrismaBrandRepository }
from "@/modules/brand/infrastructure/repositories/PrismaBrandRepository";

import { CreateBrandUseCase }
from "./CreateBrandUseCase";

import { GetBrandByIdUseCase }
from "./GetBrandByIdUseCase";

import { GetBrandsUseCase }
from "./GetBrandsUseCase";

import { UpdateBrandUseCase }
from "./UpdateBrandUseCase";

import { DeleteBrandUseCase }
from "./DeleteBrandUseCase";

const repository =
  new PrismaBrandRepository();

export const createBrandUseCase =
  new CreateBrandUseCase(
    repository
  );

export const getBrandByIdUseCase =
  new GetBrandByIdUseCase(
    repository
  );

export const getBrandsUseCase =
  new GetBrandsUseCase(
    repository
  );

export const updateBrandUseCase =
  new UpdateBrandUseCase(
    repository
  );

export const deleteBrandUseCase =
  new DeleteBrandUseCase(
    repository
  );