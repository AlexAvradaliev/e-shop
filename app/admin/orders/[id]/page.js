"use client";

import OrderDetails from "@/components/admin/orders/OrderDetails.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminOrderDetailsPage() {
  return (
    <AdminPageShell
      title="Order details"
      description="Review order content and update fulfillment status."
    >
      <OrderDetails
        order={{
          id: "order-1",
          orderNumber: "ORD-001",
          userId: "user-1",
          status: "PENDING",
          paymentStatus: "UNPAID",
          total: 0,
          items: [],
        }}
        onStatusChange={() => {}}
      />
    </AdminPageShell>
  );
}
