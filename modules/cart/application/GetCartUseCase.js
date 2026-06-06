export class GetCartUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userId) {
    return this.repository.findByUserId(
      userId
    );
  }
}
