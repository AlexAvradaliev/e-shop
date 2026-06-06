export class DeleteCategoryUseCase {
  constructor(categoryRepository) {
    this.categoryRepository =
      categoryRepository;
  }

  async execute(id) {
    const category =
      await this.categoryRepository.findById(
        id
      );

    if (!category) {
      throw new Error(
        "Category not found"
      );
    }

    await this.categoryRepository.delete(
      id
    );
  }
}