export class RemoveFromCartUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({
    userId,
    productId,
  }) {
    return this.repository.removeItem({
      userId,
      productId,
    });
  }
}
