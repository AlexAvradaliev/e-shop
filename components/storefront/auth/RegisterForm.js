"use client";

import { useState } from "react";
import styles from "./AuthForm.module.css";

export default function RegisterForm({
  onSubmit = () => {},
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Register form">
      <label className={styles.field}>
        Name
        <input
          className={styles.input}
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
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

      <label className={styles.field}>
        Password
        <input
          className={styles.input}
          type="password"
          value={form.password}
          onChange={(event) => updateField("password", event.target.value)}
        />
      </label>

      <label className={styles.field}>
        Confirm password
        <input
          className={styles.input}
          type="password"
          value={form.confirmPassword}
          onChange={(event) => updateField("confirmPassword", event.target.value)}
        />
      </label>

      <button className={styles.button} type="submit">
        Create account
      </button>

      <p className={styles.switchText}>
        Already registered? <a href="/login">Sign in</a>
      </p>
    </form>
  );
}
