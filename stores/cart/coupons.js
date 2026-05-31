export function calculateDiscount(
  total,
  coupon
) {
  if (!coupon) {
    return 0;
  }

  if (
    coupon.type ===
    "percentage"
  ) {
    return (
      total *
      (coupon.value / 100)
    );
  }

  if (
    coupon.type === "fixed"
  ) {
    return Math.min(
      coupon.value,
      total
    );
  }

  return 0;
}