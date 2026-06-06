import { NextResponse } from "next/server";
import { createCheckoutSessionUseCase } from "@/modules/payment/application/container.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const session = await createCheckoutSessionUseCase.execute(body);

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
