"use client";

import CouponForm from "@/components/admin/coupons/CouponForm.js";
import AdminPageShell from "@/components/admin/ui/AdminPageShell.js";

export default function NewCouponPage() {
  return (
    <AdminPageShell
      title="New coupon"
      description="Create a discount code for customers."
    >
      <CouponForm
        onSubmit={() => {}}
      />
    </AdminPageShell>
  );
}
