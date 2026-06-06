import { describe, expect, it, vi } from "vitest";
import { User } from "../../../modules/user/domain/User.js";
import { PrismaUserRepository } from "../../../modules/user/infrastructure/PrismaUserRepository.js";

describe("PrismaUserRepository", () => {
  const record = { id: "u1", name: "Alex", email: "a@mail.com", role: "USER" };

  it("maps records", () => {
    const repo = new PrismaUserRepository({});
    expect(repo.toDomain(null)).toBeNull();
    expect(repo.toDomain(record)).toBeInstanceOf(User);
  });

  it("finds, updates and deletes user", async () => {
    const prisma = { user: {
      findUnique: vi.fn().mockResolvedValue(record),
      update: vi.fn().mockResolvedValue({ ...record, role: "ADMIN" }),
      delete: vi.fn().mockResolvedValue(record),
    } };
    const repo = new PrismaUserRepository(prisma);
    await expect(repo.findById("u1")).resolves.toBeInstanceOf(User);
    await expect(repo.update(new User({ ...record, role: "ADMIN" }))).resolves.toMatchObject({ role: "ADMIN" });
    await expect(repo.delete("u1")).resolves.toBeInstanceOf(User);
  });
});
