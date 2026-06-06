"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function InventoryTable({
  items = [],
}) {
  if (items.length === 0) {
    return (
      <p className={styles.empty}>No inventory items found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Inventory table">
        <thead>
          <tr>
            <th>Product</th>
            <th>SKU</th>
            <th>Available</th>
            <th>Reserved</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.productId}>
              <td>{item.productName}</td>
              <td>{item.sku}</td>
              <td>{item.available}</td>
              <td>{item.reserved}</td>
              <td>
                <span className={styles.badge}>
                  {item.available > 0 ? "IN STOCK" : "OUT OF STOCK"}
                </span>
              </td>
              <td>
                <a className={styles.link} href={`/admin/inventory/${item.productId}`}>
                  Manage
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
