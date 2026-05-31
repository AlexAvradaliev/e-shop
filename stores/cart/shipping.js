export function calculateShipping(
  subtotal,
  method
) {
  if (subtotal <= 0) {
    return 0;
  }

  const FREE_SHIPPING_THRESHOLD = 100;

  if (
    subtotal >=
    FREE_SHIPPING_THRESHOLD
  ) {
    return 0;
  }

  switch (method) {
    case "standard":
      return 5;

    case "express":
      return 15;

    case "pickup":
      return 0;

    default:
      return 0;
  }
}