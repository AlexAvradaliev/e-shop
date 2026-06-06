import styles from "./ProductGallery.module.css";

export default function ProductGallery({
  productName,
}) {
  return (
    <section className={styles.gallery} aria-label={`${productName} gallery`}>
      <div className={styles.mainImage} aria-label={`${productName} image`} />
      <div className={styles.thumbnails}>
        <button className={styles.thumbnail} type="button" aria-label="Image 1" />
        <button className={styles.thumbnail} type="button" aria-label="Image 2" />
        <button className={styles.thumbnail} type="button" aria-label="Image 3" />
      </div>
    </section>
  );
}
