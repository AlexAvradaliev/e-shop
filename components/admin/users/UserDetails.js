"use client";

import UserStatusBadge from "./UserStatusBadge.js";
import styles from "./UserDetails.module.css";

export default function UserDetails({
  user,
}) {
  return (
    <section className={styles.details} aria-label="User details">
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Customer profile</p>
          <h2 className={styles.title}>{user.name || "Unnamed user"}</h2>
        </div>

        <UserStatusBadge status={user.status} />
      </div>

      <div className={styles.meta}>
        <p className={styles.metaItem}>Email: {user.email}</p>
        <p className={styles.metaItem}>Role: {user.role}</p>
        <p className={styles.metaItem}>Orders: {user.ordersCount}</p>
        <p className={styles.metaItem}>Registered: {user.createdAt}</p>
      </div>
    </section>
  );
}
