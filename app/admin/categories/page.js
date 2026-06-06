"use client";

import CategoryTable from "@/components/admin/categories/CategoryTable.js";
import AdminButtonLink from "@/components/admin/ui/AdminButtonLink.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminCategoriesPage() {
  return (
    <AdminPageShell
      title="Categories"
      description="Organize products into clear storefront categories."
      action={<AdminButtonLink href="/admin/categories/new">New category</AdminButtonLink>}
    >
      <CategoryTable
        categories={[]}
        onDelete={() => {}}
      />
    </AdminPageShell>
  );
}
