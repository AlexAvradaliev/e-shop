import styles from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  return (
    <section className={styles.section} aria-label="Newsletter signup">
      <h2 className={styles.title}>Get weekly deals in your inbox</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <button className={styles.button} type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
