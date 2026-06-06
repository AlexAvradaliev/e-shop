"use client";

import { useState } from "react";
import styles from "@/components/admin/ui/AdminForm.module.css";

export default function InventoryAdjustmentForm({
  productId,
  onSubmit,
}) {
  const [form, setForm] = useState({
    operation: "ADJUST",
    quantity: "",
    reason: "",
  });

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      productId,
      operation: form.operation,
      quantity: Number(form.quantity),
      reason: form.reason,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Inventory adjustment form">
      <div className={styles.grid}>
        <label className={styles.field}>
          Operation
          <select
            className={styles.select}
            value={form.operation}
            onChange={(event) => updateField("operation", event.target.value)}
          >
            <option value="ADJUST">ADJUST</option>
            <option value="RESERVE">RESERVE</option>
            <option value="RELEASE">RELEASE</option>
          </select>
        </label>

        <label className={styles.field}>
          Quantity
          <input
            className={styles.input}
            type="number"
            value={form.quantity}
            onChange={(event) => updateField("quantity", event.target.value)}
          />
        </label>

        <label className={`${styles.field} ${styles.fieldFull}`}>
          Reason
          <textarea
            className={styles.textarea}
            value={form.reason}
            onChange={(event) => updateField("reason", event.target.value)}
          />
        </label>
      </div>

      <button className={styles.submit} type="submit">
        Save inventory change
      </button>
    </form>
  );
}
