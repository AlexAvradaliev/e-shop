import { NextResponse } from "next/server";
import {
  deleteProductUseCase,
  getProductByIdUseCase,
  updateProductUseCase,
} from "@/modules/catalog/application/container.js";

export async function GET(_request, { params }) {
  const product = await getProductByIdUseCase.execute(params.id);

  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

export async function PATCH(request, { params }) {
  const payload = await request.json();
  const product = await updateProductUseCase.execute(params.id, payload);

  return NextResponse.json(product);
}

export async function DELETE(_request, { params }) {
  await deleteProductUseCase.execute(params.id);

  return NextResponse.json({
    success: true,
  });
}
