"use client";

import styles from "@/components/admin/ui/AdminTable.module.css";

export default function BrandTable({
  brands = [],
  onDelete,
}) {
  if (brands.length === 0) {
    return (
      <p className={styles.empty}>No brands found.</p>
    );
  }

  return (
    <div className={styles.card}>
      <table className={styles.table} aria-label="Brands table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {brands.map((brand) => (
            <tr key={brand.id}>
              <td>{brand.name}</td>
              <td>{brand.slug}</td>
              <td>
                <a className={styles.link} href={`/admin/brands/${brand.id}/edit`}>
                  Edit
                </a>

                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => onDelete(brand.id)}
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
