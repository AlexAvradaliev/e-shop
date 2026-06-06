import OrderStatusBadge from "./OrderStatusBadge.js";
import styles from "./OrderHistoryList.module.css";

export default function OrderHistoryList({
  orders = [],
}) {
  if (orders.length === 0) {
    return (
      <p className={styles.empty}>No orders found.</p>
    );
  }

  return (
    <section className={styles.list} aria-label="Order history">
      {orders.map((order) => (
        <article className={styles.card} key={order.id}>
          <div>
            <h2 className={styles.orderNumber}>{order.orderNumber}</h2>
            <p className={styles.meta}>
              Placed on {order.placedAt} · {order.itemsCount} items
            </p>
          </div>

          <OrderStatusBadge status={order.status} />

          <p className={styles.total}>€{order.total}</p>

          <a className={styles.link} href={`/account/orders/${order.id}`}>
            View order
          </a>
        </article>
      ))}
    </section>
  );
}
