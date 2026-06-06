import { Order } from "../domain/Order";

export class CreateOrderUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    const order = new Order({
      id: crypto.randomUUID(),
      ...data,
    });

    return this.repository.save(order);
  }
}
