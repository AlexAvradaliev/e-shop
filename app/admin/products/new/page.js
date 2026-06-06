"use client";

import ProductForm from "@/components/admin/products/ProductForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function NewProductPage() {
  return (
    <AdminPageShell
      title="New product"
      description="Create a product for the storefront catalog."
    >
      <ProductForm
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
