import { describe, expect, it, vi } from "vitest";
import { User } from "../../../modules/user/domain/User.js";
import { GetUserByIdUseCase } from "../../../modules/user/application/GetUserByIdUseCase.js";
import { UpdateUserUseCase } from "../../../modules/user/application/UpdateUserUseCase.js";
import { DeleteUserUseCase } from "../../../modules/user/application/DeleteUserUseCase.js";

describe("User use cases", () => {
  it("gets user by id", async () => {
    const repo = { findById: vi.fn().mockResolvedValue({ id: "u" }) };
    await expect(new GetUserByIdUseCase(repo).execute()).rejects.toThrow("User id is required");
    await expect(new GetUserByIdUseCase(repo).execute("u")).resolves.toEqual({ id: "u" });
  });

  it("updates user", async () => {
    const user = new User({ id: "u", email: "a@mail.com" });
    const repo = { findById: vi.fn().mockResolvedValue(user), update: vi.fn(async (updated) => updated) };
    const result = await new UpdateUserUseCase(repo).execute("u", { role: "ADMIN" });
    expect(result.isAdmin()).toBe(true);
  });

  it("handles update errors", async () => {
    await expect(new UpdateUserUseCase({}).execute()).rejects.toThrow("User id is required");
    await expect(new UpdateUserUseCase({ findById: vi.fn().mockResolvedValue(null) }).execute("u", {})).rejects.toThrow("User not found");
  });

  it("deletes user", async () => {
    const repo = { delete: vi.fn().mockResolvedValue({ id: "u" }) };
    await expect(new DeleteUserUseCase(repo).execute()).rejects.toThrow("User id is required");
    await expect(new DeleteUserUseCase(repo).execute("u")).resolves.toEqual({ id: "u" });
  });
});
