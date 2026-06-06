import { NextResponse } from "next/server";
import {
  createProductUseCase,
  getProductsUseCase,
} from "@/modules/catalog/application/container.js";

export async function GET() {
  const products = await getProductsUseCase.execute();

  return NextResponse.json(products);
}

export async function POST(request) {
  const payload = await request.json();
  const product = await createProductUseCase.execute(payload);

  return NextResponse.json(product, {
    status: 201,
  });
}
