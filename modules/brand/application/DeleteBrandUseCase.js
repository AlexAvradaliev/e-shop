export class DeleteBrandUseCase {
  constructor(repository) {
    this.repository =
      repository;
  }

  async execute(id) {
    return this.repository.delete(
      id
    );
  }
}