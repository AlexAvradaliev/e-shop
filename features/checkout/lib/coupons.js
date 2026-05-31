export function applyCoupon(
  total,
  coupon
) {
  if (!coupon) {
    return total;
  }

  if (
    coupon.type === 'PERCENTAGE'
  ) {
    return (
      total -
      total *
        (coupon.value / 100)
    );
  }

  if (
    coupon.type === 'FIXED'
  ) {
    return total - coupon.value;
  }

  return total;
}