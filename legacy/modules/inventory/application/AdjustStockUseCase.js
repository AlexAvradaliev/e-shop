export class AdjustStockUseCase {
  constructor(inventoryRepository) {
    this.inventoryRepository = inventoryRepository;
  }

  async execute({ productId, quantity }) {
    if (!productId) throw new Error("Product id is required");
    if (typeof quantity !== "number" || quantity <= 0) throw new Error("Quantity must be positive");
    return this.inventoryRepository.adjustStock(productId, quantity);
  }
}
