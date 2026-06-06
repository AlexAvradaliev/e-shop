"use client";

import { useState } from "react";
import styles from "@/components/admin/ui/AdminForm.module.css";

export default function ProductForm({
  initialProduct = null,
  onSubmit,
}) {
  const [form, setForm] = useState({
    name: initialProduct?.name || "",
    slug: initialProduct?.slug || "",
    description: initialProduct?.description || "",
    price: initialProduct?.price || "",
    sku: initialProduct?.sku || "",
    stock: initialProduct?.stock || "",
    status: initialProduct?.status || "DRAFT",
    categoryId: initialProduct?.categoryId || "",
    brandId: initialProduct?.brandId || "",
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
      price: Number(form.price),
      stock: Number(form.stock),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Product form">
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

        <label className={`${styles.field} ${styles.fieldFull}`}>
          Description
          <textarea
            className={styles.textarea}
            value={form.description}
            onChange={(event) => updateField("description", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Price
          <input
            className={styles.input}
            type="number"
            value={form.price}
            onChange={(event) => updateField("price", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          SKU
          <input
            className={styles.input}
            value={form.sku}
            onChange={(event) => updateField("sku", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Stock
          <input
            className={styles.input}
            type="number"
            value={form.stock}
            onChange={(event) => updateField("stock", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Status
          <select
            className={styles.select}
            value={form.status}
            onChange={(event) => updateField("status", event.target.value)}
          >
            <option value="DRAFT">DRAFT</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="ARCHIVED">ARCHIVED</option>
          </select>
        </label>

        <label className={styles.field}>
          Category ID
          <input
            className={styles.input}
            value={form.categoryId}
            onChange={(event) => updateField("categoryId", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          Brand ID
          <input
            className={styles.input}
            value={form.brandId}
            onChange={(event) => updateField("brandId", event.target.value)}
          />
        </label>
      </div>

      <button className={styles.submit} type="submit">
        Save product
      </button>
    </form>
  );
}
