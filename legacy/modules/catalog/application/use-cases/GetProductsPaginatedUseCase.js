export class GetProductsPaginatedUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(filters = {}) {
    return this.productRepository.findAll(filters);
  }
}