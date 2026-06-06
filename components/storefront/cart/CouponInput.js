"use client";

import styles from "./CouponInput.module.css";

export default function CouponInput({
  onApply = () => {},
}) {
  return (
    <form
      className={styles.form}
      aria-label="Coupon form"
      onSubmit={(event) => {
        event.preventDefault();
        onApply(event.currentTarget.elements.coupon.value);
      }}
    >
      <label className={styles.label}>
        Coupon code
        <input
          className={styles.input}
          name="coupon"
          placeholder="SAVE10"
        />
      </label>

      <button className={styles.button} type="submit">
        Apply coupon
      </button>
    </form>
  );
}
