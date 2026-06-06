export class DeleteCouponUseCase {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("Coupon id is required");
    }

    return this.couponRepository.delete(id);
  }
}
