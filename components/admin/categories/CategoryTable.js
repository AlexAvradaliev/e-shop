"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function CategoryTable({
  categories = [],
  onDelete,
}) {
  if (categories.length === 0) {
    return (
      <p className={styles.empty}>No categories found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Categorys table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.slug}</td>
              <td>
                <a className={styles.link} href={`/admin/categories/${category.id}/edit`}>
                  Edit
                </a>

                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => onDelete(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
