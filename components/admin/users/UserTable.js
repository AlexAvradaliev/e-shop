"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";
import UserStatusBadge from "./UserStatusBadge.js";

export default function UserTable({
  users = [],
}) {
  if (users.length === 0) {
    return (
      <p className={styles.empty}>No users found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Users table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Orders</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name || "Unnamed user"}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <UserStatusBadge status={user.status} />
              </td>
              <td>{user.ordersCount}</td>
              <td>
                <a className={styles.link} href={`/admin/users/${user.id}`}>
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
