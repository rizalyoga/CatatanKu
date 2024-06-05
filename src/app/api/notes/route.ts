import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getNotes } from "@/lib/data";

export async function GET(request: NextRequest) {
  const session = await getServerSession({ req: request, ...authOptions });

  if (!session) {
    return NextResponse.redirect("/api/auth/signin");
  }

  const userId = session.user.id;
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 1);
  const progress = searchParams.get("progress") || "";

  try {
    const notes = await getNotes(query, currentPage, progress, userId);
    return NextResponse.json(notes);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch notes data" },
      { status: 500 }
    );
  }
}
