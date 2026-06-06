import { NextResponse }
from "next/server";

import {
  removeFromCartUseCase,
  updateCartItemQuantityUseCase,
} from "@/modules/cart/application/container";

export async function PATCH(
  request,
  { params }
) {
  try {
    const { id: productId } =
      await params;

    const body =
      await request.json();

    const item =
      await updateCartItemQuantityUseCase.execute({
        userId: body.userId,
        productId,
        quantity: body.quantity,
      });

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

export async function DELETE(
  request,
  { params }
) {
  try {
    const { id: productId } =
      await params;

    const body =
      await request.json();

    await removeFromCartUseCase.execute({
      userId: body.userId,
      productId,
    });

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
