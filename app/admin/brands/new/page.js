"use client";

import BrandForm from "@/components/admin/brands/BrandForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function NewBrandPage() {
  return (
    <AdminPageShell
      title="New brand"
      description="Create a new product brand."
    >
      <BrandForm
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
