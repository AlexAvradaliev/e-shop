"use client";

import InventoryTable from "@/components/admin/inventory/InventoryTable.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminInventoryPage() {
  return (
    <AdminPageShell
      title="Inventory"
      description="Monitor stock availability, reserved quantities and product fulfillment state."
    >
      <InventoryTable
        items={[]}
      />
    </AdminPageShell>
  );
}
