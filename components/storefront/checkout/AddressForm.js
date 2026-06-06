"use client";

import { useState } from "react";
import styles from "./AddressForm.module.css";

export default function AddressForm({
  onSubmit = () => {},
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(form);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Delivery form">
      <h2 className={styles.title}>Delivery information</h2>

      <div className={styles.grid}>
        <label className={styles.field}>
          Full name
          <input
            className={styles.input}
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Email
          <input
            className={styles.input}
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>

        <label className={`${styles.field} ${styles.fieldFull}`}>
          Address
          <input
            className={styles.input}
            value={form.address}
            onChange={(event) => updateField("address", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          City
          <input
            className={styles.input}
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Postal code
          <input
            className={styles.input}
            value={form.postalCode}
            onChange={(event) => updateField("postalCode", event.target.value)}
          />
        </label>
      </div>

      <button className={styles.button} type="submit">
        Save delivery information
      </button>
    </form>
  );
}
