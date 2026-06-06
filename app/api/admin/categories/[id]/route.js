import { NextResponse } from "next/server";
import {
  deleteCategoryUseCase,
  getCategoryByIdUseCase,
  updateCategoryUseCase,
} from "@/modules/category/application/container.js";

export async function GET(_request, { params }) {
  const category = await getCategoryByIdUseCase.execute(params.id);

  if (!category) {
    return NextResponse.json(
      { error: "Category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(category);
}

export async function PATCH(request, { params }) {
  const payload = await request.json();
  const category = await updateCategoryUseCase.execute(params.id, payload);

  return NextResponse.json(category);
}

export async function DELETE(_request, { params }) {
  await deleteCategoryUseCase.execute(params.id);

  return NextResponse.json({
    success: true,
  });
}
