import { NextResponse } from "next/server";
import { deleteCouponUseCase } from "@/modules/coupon/application/container.js";

export async function DELETE(request, { params }) {
  try {
    const coupon = await deleteCouponUseCase.execute(params.id);

    return NextResponse.json(coupon);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
