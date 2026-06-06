"use client";

import styles from "@/components/admin/ui/AdminForm.module.css";

export default function OrderStatusSelect({
  value = "PENDING",
  onChange,
}) {
  return (
    <label className={styles.field}>
      Status
      <select
        className={styles.select}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="PENDING">PENDING</option>
        <option value="PAID">PAID</option>
        <option value="SHIPPED">SHIPPED</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="CANCELLED">CANCELLED</option>
      </select>
    </label>
  );
}
