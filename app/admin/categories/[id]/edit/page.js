"use client";

import CategoryForm from "@/components/admin/categories/CategoryForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function EditCategoryPage() {
  return (
    <AdminPageShell
      title="Edit category"
      description="Update category information."
    >
      <CategoryForm
        initialCategory={{
          id: "",
          name: "",
          slug: "",
        }}
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
