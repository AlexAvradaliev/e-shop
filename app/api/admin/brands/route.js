import { NextResponse }
from "next/server";

import {
  getBrandsUseCase,
  createBrandUseCase,
} from "@/modules/brand/application/container";

export async function GET() {
  const brands =
    await getBrandsUseCase.execute();

  return NextResponse.json(
    brands
  );
}

export async function POST(request) {
  try {
    const body =
      await request.json();

    const brand =
      await createBrandUseCase.execute(
        body
      );

    return NextResponse.json(
      brand
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