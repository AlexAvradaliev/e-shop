export class UpdateProductUseCase {
  constructor(productRepository) {
    this.productRepository =
      productRepository;
  }

  async execute(id, data) {
    return this.productRepository.update(
      id,
      data
    );
  }
}