import { NextResponse } from "next/server";
import { createCouponContainer } from "@/modules/coupon/container.js";
import { prisma } from "@/lib/prisma.js";

export async function GET(_request, { params }) {
  const container = createCouponContainer(prisma);
  const coupon = await container.getCouponByCodeUseCase.execute(params.code);

  if (!coupon) {
    return NextResponse.json(
      { error: "Coupon not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(coupon);
}
