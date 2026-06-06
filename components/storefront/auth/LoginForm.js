"use client";

import { useState } from "react";
import styles from "./AuthForm.module.css";

export default function LoginForm({
  onSubmit = () => {},
}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Login form">
      <label className={styles.field}>
        Email
        <input
          className={styles.input}
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
      </label>

      <label className={styles.field}>
        Password
        <input
          className={styles.input}
          type="password"
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
        />
      </label>

      <button className={styles.button} type="submit">
        Sign in
      </button>

      <p className={styles.switchText}>
        New customer? <a href="/register">Create account</a>
      </p>
    </form>
  );
}
