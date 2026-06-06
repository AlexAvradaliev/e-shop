import { NextResponse } from "next/server";
import { createCouponContainer } from "@/modules/coupon/container.js";
import { prisma } from "@/lib/prisma.js";

export async function GET() {
  const container = createCouponContainer(prisma);
  const coupons = await container.getCouponsUseCase.execute();

  return NextResponse.json(coupons);
}

export async function POST(request) {
  const payload = await request.json();
  const container = createCouponContainer(prisma);
  const coupon = await container.createCouponUseCase.execute(payload);

  return NextResponse.json(coupon, {
    status: 201,
  });
}
