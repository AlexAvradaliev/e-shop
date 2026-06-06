"use client";

import BrandTable from "@/components/admin/brands/BrandTable.js";
import AdminButtonLink from "@/components/admin/ui/AdminButtonLink.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminBrandsPage() {
  return (
    <AdminPageShell
      title="Brands"
      description="Manage product brands and storefront brand pages."
      action={<AdminButtonLink href="/admin/brands/new">New brand</AdminButtonLink>}
    >
      <BrandTable
        brands={[]}
        onDelete={() => {}}
      />
    </AdminPageShell>
  );
}
