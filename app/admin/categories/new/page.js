"use client";

import CategoryForm from "@/components/admin/categories/CategoryForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function NewCategoryPage() {
  return (
    <AdminPageShell
      title="New category"
      description="Create a new product category."
    >
      <CategoryForm
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
