"use client";

import ProductForm from "@/components/admin/products/ProductForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function EditProductPage() {
  return (
    <AdminPageShell
      title="Edit product"
      description="Update product information and publication state."
    >
      <ProductForm
        initialProduct={{
          id: "",
          name: "",
          slug: "",
          description: "",
          price: "",
          sku: "",
          stock: "",
          status: "DRAFT",
          categoryId: "",
          brandId: "",
        }}
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
