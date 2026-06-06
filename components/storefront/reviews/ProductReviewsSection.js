import ReviewForm from "./ReviewForm.js";
import ReviewList from "./ReviewList.js";
import styles from "./ProductReviewsSection.module.css";

export default function ProductReviewsSection() {
  const reviews = [
    {
      id: "review-1",
      author: "Marie",
      rating: 5,
      comment: "Great value and very comfortable to use.",
      createdAt: "2026-01-15",
    },
    {
      id: "review-2",
      author: "Alex",
      rating: 4,
      comment: "Good product for the price.",
      createdAt: "2026-01-20",
    },
  ];

  return (
    <section className={styles.section} aria-label="Product reviews">
      <div className={styles.header}>
        <p className={styles.eyebrow}>Customer feedback</p>
        <h2 className={styles.title}>Product reviews</h2>
      </div>

      <div className={styles.layout}>
        <ReviewList reviews={reviews} />
        <ReviewForm />
      </div>
    </section>
  );
}
