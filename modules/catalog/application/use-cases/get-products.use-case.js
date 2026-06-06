export class GetProductsUseCase {
  constructor(productRepository) {
    this.productRepository =
      productRepository;
  }

  async execute() {
    return this.productRepository.findAll();
  }
}