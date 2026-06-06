import styles from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
}) {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <a className={styles.link} href="?page=1">
        Previous
      </a>

      <span className={styles.status}>
        Page {currentPage} of {totalPages}
      </span>

      <a className={styles.link} href="?page=2">
        Next
      </a>
    </nav>
  );
}
