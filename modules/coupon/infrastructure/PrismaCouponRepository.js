import { Coupon } from "../domain/Coupon.js";

export class PrismaCouponRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  toDomain(record) {
    return record ? new Coupon(record) : null;
  }

  async create(coupon) {
    const record = await this.prisma.coupon.create({
      data: {
        code: coupon.code,
        type: coupon.type,
        value: coupon.value,
        active: coupon.active,
        expiresAt: coupon.expiresAt,
      },
    });
    return this.toDomain(record);
  }

  async findByCode(code) {
    const record = await this.prisma.coupon.findUnique({ where: { code } });
    return this.toDomain(record);
  }

  async findMany() {
    const records = await this.prisma.coupon.findMany({ orderBy: { createdAt: "desc" } });
    return records.map((record) => this.toDomain(record));
  }

  async delete(id) {
    const record = await this.prisma.coupon.delete({ where: { id } });
    return this.toDomain(record);
  }
}
