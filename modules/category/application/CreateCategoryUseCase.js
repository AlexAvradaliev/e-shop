import { Category } from "../domain/Category";

export class CreateCategoryUseCase {
  constructor(categoryRepository) {
    this.categoryRepository =
      categoryRepository;
  }

  async execute(data) {
    const existing =
      await this.categoryRepository.findBySlug(
        data.slug
      );

    if (existing) {
      throw new Error(
        "Category slug already exists"
      );
    }

    const category =
      new Category({
        id: crypto.randomUUID(),
        ...data,
      });

    await this.categoryRepository.save(
      category
    );

    return category;
  }
}