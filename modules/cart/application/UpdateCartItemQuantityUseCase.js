export class UpdateCartItemQuantityUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({
    userId,
    productId,
    quantity,
  }) {
    if (quantity <= 0) {
      throw new Error(
        "Quantity must be positive"
      );
    }

    return this.repository.updateItemQuantity({
      userId,
      productId,
      quantity,
    });
  }
}
