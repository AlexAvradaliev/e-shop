import { PrismaUserRepository } from "./infrastructure/PrismaUserRepository.js";
import { GetUserByIdUseCase } from "./application/GetUserByIdUseCase.js";
import { UpdateUserUseCase } from "./application/UpdateUserUseCase.js";
import { DeleteUserUseCase } from "./application/DeleteUserUseCase.js";

export function createUserContainer(prisma) {
  const repository = new PrismaUserRepository(prisma);
  const getUserByIdUseCase = new GetUserByIdUseCase(repository);
  const updateUserUseCase = new UpdateUserUseCase(repository);
  const deleteUserUseCase = new DeleteUserUseCase(repository);

  return {
    getUserByIdUseCase,
    updateUserUseCase,
    deleteUserUseCase,
  };
}
