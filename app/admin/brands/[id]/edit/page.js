"use client";

import BrandForm from "@/components/admin/brands/BrandForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function EditBrandPage() {
  return (
    <AdminPageShell
      title="Edit brand"
      description="Update brand information."
    >
      <BrandForm
        initialBrand={{
          id: "",
          name: "",
          slug: "",
        }}
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
