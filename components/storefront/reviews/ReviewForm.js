"use client";

import { useState } from "react";
import styles from "./ReviewForm.module.css";

export default function ReviewForm({
  onSubmit = () => {},
}) {
  const [form, setForm] = useState({
    author: "",
    rating: "5",
    comment: "",
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
      rating: Number(form.rating),
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Review form">
      <h3 className={styles.title}>Write a review</h3>

      <label className={styles.field}>
        Name
        <input
          className={styles.input}
          value={form.author}
          onChange={(event) => updateField("author", event.target.value)}
        />
      </label>

      <label className={styles.field}>
        Rating
        <select
          className={styles.select}
          value={form.rating}
          onChange={(event) => updateField("rating", event.target.value)}
        >
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </label>

      <label className={styles.field}>
        Comment
        <textarea
          className={styles.textarea}
          value={form.comment}
          onChange={(event) => updateField("comment", event.target.value)}
        />
      </label>

      <button className={styles.button} type="submit">
        Submit review
      </button>
    </form>
  );
}
