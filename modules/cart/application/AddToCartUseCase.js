export class AddToCartUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({
    userId,
    productId,
    quantity = 1,
  }) {
    if (quantity <= 0) {
      throw new Error(
        "Quantity must be positive"
      );
    }

    return this.repository.addItem({
      userId,
      productId,
      quantity,
    });
  }
}
