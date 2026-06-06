import styles from "./AdminButtonLink.module.css";

export default function AdminButtonLink({
  href,
  children,
}) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
}
