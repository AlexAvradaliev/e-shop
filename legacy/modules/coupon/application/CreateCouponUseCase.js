import { Coupon } from "../domain/Coupon.js";

export class CreateCouponUseCase {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(input) {
    const coupon = new Coupon(input);
    const existing = await this.couponRepository.findByCode(coupon.code);
    if (existing) throw new Error("Coupon already exists");
    return this.couponRepository.create(coupon);
  }
}
