export class User {
  constructor({ id, name = null, email, role = "USER", createdAt = null, updatedAt = null }) {
    if (!email) throw new Error("Email is required");
    if (!["USER", "ADMIN"].includes(role)) throw new Error("Invalid user role");

    this.id = id;
    this.name = name;
    this.email = email.toLowerCase();
    this.role = role;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  isAdmin() {
    return this.role === "ADMIN";
  }

  update({ name, email, role }) {
    if (name !== undefined) this.name = name;
    if (email !== undefined) {
      if (!email) throw new Error("Email is required");
      this.email = email.toLowerCase();
    }
    if (role !== undefined) {
      if (!["USER", "ADMIN"].includes(role)) throw new Error("Invalid user role");
      this.role = role;
    }
    return this;
  }
}
