import { NextResponse } from "next/server";
import { handleWebhookUseCase } from "@/modules/payment/application/container.js";

export async function POST(request) {
  try {
    const payload = await request.text();
    const signature = request.headers.get("stripe-signature");
    const result = await handleWebhookUseCase.execute({
      payload,
      signature,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
