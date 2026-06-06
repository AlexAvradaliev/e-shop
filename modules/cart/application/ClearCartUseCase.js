export class ClearCartUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userId) {
    return this.repository.clear(
      userId
    );
  }
}
