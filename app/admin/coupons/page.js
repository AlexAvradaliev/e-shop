"use client";

import CouponTable from "@/components/admin/coupons/CouponTable.js";
import AdminButtonLink from "@/components/admin/ui/AdminButtonLink.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function AdminCouponsPage() {
  return (
    <AdminPageShell
      title="Coupons"
      description="Create and manage promotional discount codes for checkout."
      action={<AdminButtonLink href="/admin/coupons/new">New coupon</AdminButtonLink>}
    >
      <CouponTable
        coupons={[]}
        onDelete={() => {}}
      />
    </AdminPageShell>
  );
}
