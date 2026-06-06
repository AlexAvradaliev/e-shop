import styles from "./SearchResults.module.css";

export default function SearchResults({
  results = [],
}) {
  if (results.length === 0) {
    return (
      <p className={styles.empty}>No search results found.</p>
    );
  }

  return (
    <section className={styles.grid} aria-label="Search results">
      {results.map((result) => (
        <article className={styles.card} key={result.id}>
          <div className={styles.imagePlaceholder} aria-hidden="true" />
          <h2 className={styles.name}>
            <a href={result.href}>{result.name}</a>
          </h2>
          <p className={styles.price}>€{result.price}</p>
        </article>
      ))}
    </section>
  );
}
