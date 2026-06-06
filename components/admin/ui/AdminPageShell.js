import styles from "./AdminPageShell.module.css";

export default function AdminPageShell({
  title,
  description,
  action,
  children,
}) {
  return (
    <main className={styles.shell}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>E-Shop Admin</p>
          <h1 className={styles.title}>{title}</h1>
          {description ? (
            <p className={styles.description}>{description}</p>
          ) : null}
        </div>

        {action ? (
          <div className={styles.action}>
            {action}
          </div>
        ) : null}
      </section>

      <section className={styles.content}>
        {children}
      </section>
    </main>
  );
}
