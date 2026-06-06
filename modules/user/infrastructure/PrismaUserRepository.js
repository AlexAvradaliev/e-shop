import { User } from "../domain/User.js";

export class PrismaUserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  toDomain(record) {
    return record ? new User(record) : null;
  }

  async findById(id) {
    const record = await this.prisma.user.findUnique({ where: { id } });
    return this.toDomain(record);
  }

  async update(user) {
    const record = await this.prisma.user.update({
      where: { id: user.id },
      data: { name: user.name, email: user.email, role: user.role },
    });
    return this.toDomain(record);
  }

  async delete(id) {
    const record = await this.prisma.user.delete({ where: { id } });
    return this.toDomain(record);
  }
}
