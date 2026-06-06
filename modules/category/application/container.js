import { PrismaCategoryRepository } from "../infrastructure/repositories/PrismaCategoryRepository.js";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase.js";
import { GetCategoryByIdUseCase } from "./GetCategoryByIdUseCase.js";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase.js";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase.js";

const categoryRepository = new PrismaCategoryRepository();

export const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
export const getCategoryByIdUseCase = new GetCategoryByIdUseCase(categoryRepository);
export const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);
export const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);

export const getCategoriesUseCase = {
  async execute() {
    if (typeof categoryRepository.findMany === "function") {
      return categoryRepository.findMany();
    }

    if (typeof categoryRepository.findAll === "function") {
      return categoryRepository.findAll();
    }

    return [];
  },
};
