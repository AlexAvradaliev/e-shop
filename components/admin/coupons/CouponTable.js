"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function CouponTable({
  coupons = [],
  onDelete,
}) {
  if (coupons.length === 0) {
    return (
      <p className={styles.empty}>No coupons found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Coupons table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Type</th>
            <th>Value</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {coupons.map((coupon) => (
            <tr key={coupon.id}>
              <td>{coupon.code}</td>
              <td>
                <span className={styles.badge}>{coupon.type}</span>
              </td>
              <td>{coupon.value}</td>
              <td>{coupon.isActive ? "Yes" : "No"}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => onDelete(coupon.id)}
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
