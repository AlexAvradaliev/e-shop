export function saveCart(items) {
  localStorage.setItem(
    "cart",
    JSON.stringify(items)
  );
}

export function loadCart() {
  try {
    const cart =
      localStorage.getItem("cart");

    if (!cart) {
      return [];
    }

    const parsed =
      JSON.parse(cart);

    return Array.isArray(parsed)
      ? parsed
      : [];
  } catch {
    return [];
  }
}