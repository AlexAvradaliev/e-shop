"use client";

import { useState } from "react";
import OrderStatusSelect from "./OrderStatusSelect.js";
import styles from "./OrderDetails.module.css";

export default function OrderDetails({
  order,
  onStatusChange,
}) {
  const [status, setStatus] = useState(order.status);

  function handleStatusChange(nextStatus) {
    setStatus(nextStatus);
    onStatusChange(order.id, nextStatus);
  }

  return (
    <section className={styles.details} aria-label="Order details">
      <h2 className={styles.title}>{order.orderNumber}</h2>

      <div className={styles.meta}>
        <p className={styles.metaItem}>User: {order.userId}</p>
        <p className={styles.metaItem}>Payment: {order.paymentStatus}</p>
        <p className={styles.metaItem}>Total: {order.total}</p>
      </div>

      <OrderStatusSelect
        value={status}
        onChange={handleStatusChange}
      />

      {order.items.length === 0 ? (
        <p className={styles.empty}>No order items.</p>
      ) : (
        <ul className={styles.items} aria-label="Order items">
          {order.items.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
