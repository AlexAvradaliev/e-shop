"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function ProductTable({
  products = [],
  onDelete,
}) {
  if (products.length === 0) {
    return (
      <p className={styles.empty}>No products found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Products table">
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <span className={styles.badge}>{product.status}</span>
              </td>
              <td>
                <a className={styles.link} href={`/admin/products/${product.id}/edit`}>
                  Edit
                </a>

                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
