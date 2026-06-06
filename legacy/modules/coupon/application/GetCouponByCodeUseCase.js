export class GetCouponByCodeUseCase {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(code) {
    if (!code) throw new Error("Coupon code is required");
    return this.couponRepository.findByCode(code.trim().toUpperCase());
  }
}
