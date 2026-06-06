import ReviewCard from "./ReviewCard.js";
import styles from "./ReviewList.module.css";

export default function ReviewList({
  reviews = [],
}) {
  if (reviews.length === 0) {
    return (
      <p className={styles.empty}>No reviews yet.</p>
    );
  }

  return (
    <div className={styles.list} aria-label="Product reviews list">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}
