import { NextResponse }
from "next/server";

import {
  getOrderByIdUseCase,
  updateOrderStatusUseCase,
} from "@/modules/order/application/container";

export async function GET(
  request,
  { params }
) {
  const { id } =
    await params;

  const order =
    await getOrderByIdUseCase.execute(
      id
    );

  if (!order) {
    return NextResponse.json(
      {
        error: "Order not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    order
  );
}

export async function PATCH(
  request,
  { params }
) {
  try {
    const { id } =
      await params;

    const body =
      await request.json();

    const order =
      await updateOrderStatusUseCase.execute(
        id,
        body.status
      );

    return NextResponse.json(
      order
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
