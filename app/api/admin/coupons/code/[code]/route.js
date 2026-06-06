import { NextResponse } from "next/server";
import { getCouponByCodeUseCase } from "@/modules/coupon/application/container.js";

export async function GET(request, { params }) {
  try {
    const coupon = await getCouponByCodeUseCase.execute(params.code);

    if (!coupon) {
      return NextResponse.json(
        { error: "Coupon not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(coupon);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
