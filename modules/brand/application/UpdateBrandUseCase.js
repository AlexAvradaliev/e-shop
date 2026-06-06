export class UpdateBrandUseCase {
  constructor(repository) {
    this.repository =
      repository;
  }

  async execute(
    id,
    data
  ) {
    return this.repository.update(
      id,
      data
    );
  }
}