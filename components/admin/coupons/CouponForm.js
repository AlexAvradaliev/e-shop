"use client";

import { useState } from "react";
import styles from "@/components/admin/ui/AdminForm.module.css";

export default function CouponForm({
  initialCoupon = null,
  onSubmit,
}) {
  const [form, setForm] = useState({
    code: initialCoupon?.code || "",
    type: initialCoupon?.type || "PERCENTAGE",
    value: initialCoupon?.value || "",
    isActive: initialCoupon?.isActive ?? true,
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
      ...form,
      value: Number(form.value),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Coupon form">
      <div className={styles.grid}>
        <label className={styles.field}>
          Code
          <input
            className={styles.input}
            value={form.code}
            onChange={(event) => updateField("code", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Type
          <select
            className={styles.select}
            value={form.type}
            onChange={(event) => updateField("type", event.target.value)}
          >
            <option value="PERCENTAGE">PERCENTAGE</option>
            <option value="FIXED">FIXED</option>
          </select>
        </label>

        <label className={styles.field}>
          Value
          <input
            className={styles.input}
            type="number"
            value={form.value}
            onChange={(event) => updateField("value", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Active
          <select
            className={styles.select}
            value={form.isActive ? "true" : "false"}
            onChange={(event) => updateField("isActive", event.target.value === "true")}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
      </div>

      <button className={styles.submit} type="submit">
        Save coupon
      </button>
    </form>
  );
}
