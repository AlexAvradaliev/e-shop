import { describe, expect, it } from "vitest";
import { User } from "../../../modules/user/domain/User.js";

describe("User", () => {
  it("creates regular user", () => {
    const user = new User({ email: "TEST@MAIL.COM" });

    expect(user.id).toBeUndefined();
    expect(user.name).toBeNull();
    expect(user.email).toBe("test@mail.com");
    expect(user.role).toBe("USER");
    expect(user.createdAt).toBeNull();
    expect(user.updatedAt).toBeNull();
    expect(user.isAdmin()).toBe(false);
  });

  it("creates admin user", () => {
    const createdAt = new Date("2026-01-01T00:00:00.000Z");
    const updatedAt = new Date("2026-01-02T00:00:00.000Z");

    const user = new User({
      id: "user-1",
      name: "Admin",
      email: "admin@mail.com",
      role: "ADMIN",
      createdAt,
      updatedAt,
    });

    expect(user.id).toBe("user-1");
    expect(user.name).toBe("Admin");
    expect(user.email).toBe("admin@mail.com");
    expect(user.role).toBe("ADMIN");
    expect(user.createdAt).toBe(createdAt);
    expect(user.updatedAt).toBe(updatedAt);
    expect(user.isAdmin()).toBe(true);
  });

  it("updates user fields", () => {
    const user = new User({ email: "a@mail.com" });

    user.update({ name: "Alex", email: "B@MAIL.COM", role: "ADMIN" });

    expect(user.name).toBe("Alex");
    expect(user.email).toBe("b@mail.com");
    expect(user.role).toBe("ADMIN");
  });

  it("keeps role unchanged when update role is omitted", () => {
    const user = new User({ email: "admin@mail.com", role: "ADMIN" });

    const returnedUser = user.update({ name: "Alex" });

    expect(returnedUser).toBe(user);
    expect(user.name).toBe("Alex");
    expect(user.role).toBe("ADMIN");
  });

  it("keeps name and email unchanged when they are omitted", () => {
    const user = new User({ name: "Alex", email: "a@mail.com" });

    user.update({ role: "ADMIN" });

    expect(user.name).toBe("Alex");
    expect(user.email).toBe("a@mail.com");
    expect(user.role).toBe("ADMIN");
  });

  it("rejects invalid data", () => {
    expect(() => new User({})).toThrow("Email is required");
    expect(() => new User({ email: "a@mail.com", role: "BAD" })).toThrow("Invalid user role");

    const user = new User({ email: "a@mail.com" });

    expect(() => user.update({ email: "" })).toThrow("Email is required");
    expect(() => user.update({ role: "BAD" })).toThrow("Invalid user role");
  });
});
