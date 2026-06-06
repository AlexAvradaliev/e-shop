import OrderHistoryList from "./OrderHistoryList.js";
import AccountSummary from "./AccountSummary.js";
import styles from "./AccountOrdersPage.module.css";

export default function AccountOrdersPage() {
  const orders = [
    {
      id: "order-1",
      orderNumber: "ORD-001",
      status: "PAID",
      total: "74.96",
      placedAt: "2026-01-01",
      itemsCount: 3,
    },
    {
      id: "order-2",
      orderNumber: "ORD-002",
      status: "SHIPPED",
      total: "29.99",
      placedAt: "2026-01-10",
      itemsCount: 1,
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>My account</p>
        <h1 className={styles.title}>My orders</h1>
        <p className={styles.description}>
          Track recent orders, payment state and delivery progress.
        </p>
      </section>

      <section className={styles.layout} aria-label="Account orders content">
        <AccountSummary
          name="Alex Customer"
          email="alex@example.com"
          ordersCount={orders.length}
        />

        <OrderHistoryList orders={orders} />
      </section>
    </main>
  );
}
