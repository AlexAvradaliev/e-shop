"use client";

import InventoryAdjustmentForm from "@/components/admin/inventory/InventoryAdjustmentForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminInventoryProductPage() {
  return (
    <AdminPageShell
      title="Manage inventory"
      description="Reserve, release or adjust stock for a selected product."
    >
      <InventoryAdjustmentForm
        productId="product-1"
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
