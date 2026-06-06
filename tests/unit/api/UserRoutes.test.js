import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock(
  "@/modules/user/application/container.js",
  () => ({
    getUserByIdUseCase: {
      execute: vi.fn(),
    },
    updateUserUseCase: {
      execute: vi.fn(),
    },
    deleteUserUseCase: {
      execute: vi.fn(),
    },
  })
);

import {
  getUserByIdUseCase,
  updateUserUseCase,
  deleteUserUseCase,
} from "@/modules/user/application/container.js";

import {
  GET as getUserById,
  PATCH as updateUser,
  DELETE as deleteUser,
} from "@/app/api/admin/users/[id]/route.js";

describe("User API routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("gets user by id", async () => {
    getUserByIdUseCase.execute.mockResolvedValue({
      id: "user-1",
      email: "john@example.com",
      role: "USER",
    });

    const response = await getUserById(
      {},
      { params: { id: "user-1" } }
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "user-1",
      email: "john@example.com",
      role: "USER",
    });
    expect(getUserByIdUseCase.execute).toHaveBeenCalledWith("user-1");
  });

  it("returns 404 when user does not exist", async () => {
    getUserByIdUseCase.execute.mockResolvedValue(null);

    const response = await getUserById(
      {},
      { params: { id: "missing-user" } }
    );
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body).toEqual({
      error: "User not found",
    });
  });

  it("returns 400 when get user by id fails", async () => {
    getUserByIdUseCase.execute.mockRejectedValue(
      new Error("User id is required")
    );

    const response = await getUserById(
      {},
      { params: { id: "" } }
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "User id is required",
    });
  });

  it("updates user", async () => {
    updateUserUseCase.execute.mockResolvedValue({
      id: "user-1",
      name: "John Updated",
      email: "john.updated@example.com",
      role: "ADMIN",
    });

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "John Updated",
        email: "john.updated@example.com",
        role: "ADMIN",
      }),
    };

    const response = await updateUser(
      request,
      { params: { id: "user-1" } }
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "user-1",
      name: "John Updated",
      email: "john.updated@example.com",
      role: "ADMIN",
    });
    expect(updateUserUseCase.execute).toHaveBeenCalledWith(
      "user-1",
      {
        name: "John Updated",
        email: "john.updated@example.com",
        role: "ADMIN",
      }
    );
  });

  it("returns 400 when update user fails", async () => {
    updateUserUseCase.execute.mockRejectedValue(
      new Error("User not found")
    );

    const request = {
      json: vi.fn().mockResolvedValue({
        name: "Missing",
      }),
    };

    const response = await updateUser(
      request,
      { params: { id: "missing-user" } }
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "User not found",
    });
  });

  it("deletes user", async () => {
    deleteUserUseCase.execute.mockResolvedValue({
      id: "user-1",
      email: "john@example.com",
      role: "USER",
    });

    const response = await deleteUser(
      {},
      { params: { id: "user-1" } }
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      id: "user-1",
      email: "john@example.com",
      role: "USER",
    });
    expect(deleteUserUseCase.execute).toHaveBeenCalledWith("user-1");
  });

  it("returns 400 when delete user fails", async () => {
    deleteUserUseCase.execute.mockRejectedValue(
      new Error("User id is required")
    );

    const response = await deleteUser(
      {},
      { params: { id: "" } }
    );
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      error: "User id is required",
    });
  });
});
