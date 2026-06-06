import styles from "./ReviewCard.module.css";

export default function ReviewCard({
  review,
}) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.author}>{review.author}</h3>
        <span className={styles.rating}>{review.rating}/5</span>
      </div>

      <p className={styles.comment}>{review.comment}</p>
      <p className={styles.date}>{review.createdAt}</p>
    </article>
  );
}
