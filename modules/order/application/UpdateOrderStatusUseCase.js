export class UpdateOrderStatusUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id, status) {
    return this.repository.updateStatus(
      id,
      status
    );
  }
}
