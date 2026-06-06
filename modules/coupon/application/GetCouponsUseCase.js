export class GetCouponsUseCase {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute() {
    return this.couponRepository.findMany();
  }
}
