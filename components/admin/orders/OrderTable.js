"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function OrderTable({
  orders = [],
}) {
  if (orders.length === 0) {
    return (
      <p className={styles.empty}>No orders found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Orders table">
        <thead>
          <tr>
            <th>Order number</th>
            <th>User</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderNumber}</td>
              <td>{order.userId}</td>
              <td>
                <span className={styles.badge}>{order.status}</span>
              </td>
              <td>{order.paymentStatus}</td>
              <td>{order.total}</td>
              <td>
                <a className={styles.link} href={`/admin/orders/${order.id}`}>
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
