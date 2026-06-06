"use client";

import UserDetails from "@/components/admin/users/UserDetails.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminUserDetailsPage() {
  return (
    <AdminPageShell
      title="User details"
      description="Inspect account data and customer order activity."
    >
      <UserDetails
        user={{
          id: "user-1",
          name: "Alex Customer",
          email: "alex@example.com",
          role: "USER",
          status: "ACTIVE",
          ordersCount: 0,
          createdAt: "2026-01-01",
        }}
      />
    </AdminPageShell>
  );
}
