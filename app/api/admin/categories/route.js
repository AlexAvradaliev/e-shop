import { NextResponse } from "next/server";
import {
  createCategoryUseCase,
  getCategoriesUseCase,
} from "@/modules/category/application/container.js";

export async function GET() {
  const categories = await getCategoriesUseCase.execute();

  return NextResponse.json(categories);
}

export async function POST(request) {
  const payload = await request.json();
  const category = await createCategoryUseCase.execute(payload);

  return NextResponse.json(category, {
    status: 201,
  });
}
