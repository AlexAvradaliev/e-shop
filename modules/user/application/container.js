import { prisma } from "@/server/db/prisma";
import { PrismaUserRepository } from "@/modules/user/infrastructure/PrismaUserRepository.js";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase.js";
import { UpdateUserUseCase } from "./UpdateUserUseCase.js";
import { DeleteUserUseCase } from "./DeleteUserUseCase.js";

const repository = new PrismaUserRepository(prisma);

export const getUserByIdUseCase = new GetUserByIdUseCase(repository);
export const updateUserUseCase = new UpdateUserUseCase(repository);
export const deleteUserUseCase = new DeleteUserUseCase(repository);
