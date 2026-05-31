export function createOrder(items = []) {
  const total = items.reduce(
    (sum, item) =>
      sum + (item.price * item.quantity),
    0,
  );

  return {
    id: Date.now().toString(),
    items: items.length,
    total,
    status: "pending",
  };
}