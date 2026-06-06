import { NextResponse }
from "next/server";

import {
  getCartUseCase,
  clearCartUseCase,
} from "@/modules/cart/application/container";

export async function GET(request) {
  const userId =
    request.nextUrl.searchParams.get(
      "userId"
    );

  const cart =
    await getCartUseCase.execute(
      userId
    );

  return NextResponse.json(
    cart
  );
}

export async function DELETE(request) {
  try {
    const body =
      await request.json();

    await clearCartUseCase.execute(
      body.userId
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
}
