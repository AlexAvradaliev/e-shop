import { NextResponse } from "next/server";
import {
  getCouponsUseCase,
  createCouponUseCase,
} from "@/modules/coupon/application/container.js";

export async function GET() {
  const coupons = await getCouponsUseCase.execute();

  return NextResponse.json(coupons);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const coupon = await createCouponUseCase.execute(body);

    return NextResponse.json(coupon);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
