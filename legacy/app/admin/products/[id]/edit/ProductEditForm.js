"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductEditForm({
  product,
}) {
  const [form, setForm] = useState({
    name: product.name || "",
    slug: product.slug || "",
    price: product.price?.toString() || "",
    sku: product.sku || "",
    stock: product.stock || 0,
    status: product.status || "DRAFT",
    categoryId: product.categoryId || "",
    brandId: product.brandId || null,
  });
  
const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response =
      await fetch(
        `/api/admin/products/${product.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

    const result =
      await response.json();

   if (response.ok) {
  router.push("/admin/products");
} else {
  alert(result.error);
}
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Name
        <br />
        <input
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </p>

      <p>
        Slug
        <br />
        <input
          value={form.slug}
          onChange={(e) =>
            setForm({
              ...form,
              slug: e.target.value,
            })
          }
        />
      </p>

      <p>
        Price
        <br />
        <input
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: Number(e.target.value),
            })
          }
        />
      </p>

      <p>
        Stock
        <br />
        <input
          value={form.stock}
          onChange={(e) =>
            setForm({
              ...form,
              stock: Number(e.target.value),
            })
          }
        />
      </p>

      <button type="submit">
        Save
      </button>
    </form>
  );
}