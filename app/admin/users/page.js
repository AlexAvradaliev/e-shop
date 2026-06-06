"use client";

import UserTable from "@/components/admin/users/UserTable.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminUsersPage() {
  return (
    <AdminPageShell
      title="Users"
      description="Review customer profiles, roles and order activity."
    >
      <UserTable
        users={[]}
      />
    </AdminPageShell>
  );
}
