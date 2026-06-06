export class UpdateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, data) {
    if (!id) throw new Error("User id is required");
    const user = await this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    user.update(data);
    return this.userRepository.update(user);
  }
}
