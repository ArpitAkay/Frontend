import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const newComment = { ...body, id: comments.length + 1 };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
