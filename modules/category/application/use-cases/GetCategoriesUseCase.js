export class GetCategoriesUseCase {
  constructor(categoryRepository) {
    this.categoryRepository =
      categoryRepository;
  }

  async execute() {
    return this.categoryRepository.findAll();
  }
}