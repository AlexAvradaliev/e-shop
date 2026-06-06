"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function UserStatusBadge({
  status = "ACTIVE",
}) {
  return (
    <span className={styles.badge}>
      {status}
    </span>
  );
}
