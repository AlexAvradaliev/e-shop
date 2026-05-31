import { calculateDiscount }
  from "./coupons";

import { calculateShipping }
  from "./shipping";

export function calculateOrderSummary({
  subtotal,
  coupon,
  shippingMethod,
}) {
  const discount =
    calculateDiscount(
      subtotal,
      coupon
    );

  const discountedSubtotal =
    subtotal - discount;

  const shipping =
    calculateShipping(
      discountedSubtotal,
      shippingMethod
    );

  const tax =
    discountedSubtotal * 0.19;

  const total =
    discountedSubtotal +
    shipping +
    tax;

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total,
  };
}