"use client";

import { useState } from "react";
import styles from "@/components/admin/ui/AdminForm.module.css";

export default function BrandForm({
  initialBrand = null,
  onSubmit,
}) {
  const [form, setForm] = useState({
    name: initialBrand?.name || "",
    slug: initialBrand?.slug || "",
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
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Brand form">
      <div className={styles.grid}>
        <label className={styles.field}>
          Name
          <input
            className={styles.input}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Slug
          <input
            className={styles.input}
            value={form.slug}
            onChange={(event) => updateField("slug", event.target.value)}
          />
        </label>
      </div>

      <button className={styles.submit} type="submit">
        Save brand
      </button>
    </form>
  );
}
