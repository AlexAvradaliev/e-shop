"use client";

import ProductTable from "@/components/admin/products/ProductTable.js";
import AdminButtonLink from "@/components/admin/ui/AdminButtonLink.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminProductsPage() {
  return (
    <AdminPageShell
      title="Products"
      description="Manage catalog products, stock visibility, prices and publication state."
      action={<AdminButtonLink href="/admin/products/new">New product</AdminButtonLink>}
    >
      <ProductTable
        products={[]}
        onDelete={() => {}}
      />
    </AdminPageShell>
  );
}
