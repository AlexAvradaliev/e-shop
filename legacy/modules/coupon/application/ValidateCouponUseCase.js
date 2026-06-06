export class ValidateCouponUseCase {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(code, total, now = new Date()) {
    if (!code) throw new Error("Coupon code is required");
    const coupon = await this.couponRepository.findByCode(code.trim().toUpperCase());
    if (!coupon) return { valid: false, reason: "NOT_FOUND" };
    if (!coupon.isValid(now)) return { valid: false, reason: "INVALID" };
    return { valid: true, coupon, totalAfterDiscount: coupon.applyTo(total) };
  }
}
