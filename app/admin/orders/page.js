"use client";

import OrderTable from "@/components/admin/orders/OrderTable.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminOrdersPage() {
  return (
    <AdminPageShell
      title="Orders"
      description="Track order status, payment state and fulfillment."
    >
      <OrderTable
        orders={[]}
      />
    </AdminPageShell>
  );
}
