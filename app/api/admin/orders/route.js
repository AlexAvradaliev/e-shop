import { NextResponse }
from "next/server";

import {
  getOrdersUseCase,
  createOrderUseCase,
} from "@/modules/order/application/container";

export async function GET() {
  const orders =
    await getOrdersUseCase.execute();

  return NextResponse.json(
    orders
  );
}

export async function POST(request) {
  try {
    const body =
      await request.json();

    const order =
      await createOrderUseCase.execute(
        body
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
