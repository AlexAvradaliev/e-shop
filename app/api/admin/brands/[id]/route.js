import { NextResponse }
from "next/server";

import {
  getBrandByIdUseCase,
  updateBrandUseCase,
  deleteBrandUseCase,
} from "@/modules/brand/application/container";

export async function GET(
  request,
  { params }
) {
  const { id } =
    await params;

  const brand =
    await getBrandByIdUseCase.execute(
      id
    );

  if (!brand) {
    return NextResponse.json(
      {
        error: "Brand not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    brand
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

    const brand =
      await updateBrandUseCase.execute(
        id,
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

export async function DELETE(
  request,
  { params }
) {
  try {
    const { id } =
      await params;

    await deleteBrandUseCase.execute(
      id
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