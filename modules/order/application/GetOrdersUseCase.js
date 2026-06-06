export class GetOrdersUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return this.repository.findAll();
  }
}
