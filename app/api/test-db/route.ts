import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userCount = await prisma.user.count();

    return NextResponse.json({
      success: true,
      userCount,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 }
    );
  }
}