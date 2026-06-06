export class GetProductBySlugUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(slug) {
    return this.productRepository.findBySlug(slug);
  }
}