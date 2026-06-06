export class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id) {
    if (!id) throw new Error("User id is required");
    return this.userRepository.delete(id);
  }
}
