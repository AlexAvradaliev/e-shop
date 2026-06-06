import { NextResponse }
from "next/server";

import {
  addToCartUseCase,
} from "@/modules/cart/application/container";

export async function POST(request) {
  try {
    const body =
      await request.json();

    const item =
      await addToCartUseCase.execute(
        body
      );

    return NextResponse.json(
      item
    );
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
