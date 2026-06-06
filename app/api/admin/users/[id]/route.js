import { NextResponse } from "next/server";
import {
  getUserByIdUseCase,
  updateUserUseCase,
  deleteUserUseCase,
} from "@/modules/user/application/container.js";

export async function GET(request, { params }) {
  try {
    const user = await getUserByIdUseCase.execute(params.id);

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const body = await request.json();
    const user = await updateUserUseCase.execute(params.id, body);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const user = await deleteUserUseCase.execute(params.id);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
