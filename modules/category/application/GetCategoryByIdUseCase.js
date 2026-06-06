export class GetCategoryByIdUseCase {
  constructor(categoryRepository) {
    this.categoryRepository =
      categoryRepository;
  }

  async execute(id) {
    return this.categoryRepository.findById(
      id
    );
  }
}