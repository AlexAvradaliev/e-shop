export class CreateBrandUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    return this.repository.save(
      data
    );
  }
}