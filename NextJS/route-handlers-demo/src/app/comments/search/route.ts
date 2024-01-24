import { NextRequest, NextResponse } from "next/server";
import { comments } from "../data";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest, res: NextResponse) {
  const queryParams = req.nextUrl.searchParams;
  const query = queryParams.get("query");
  console.log(query);
  console.log(typeof query);

  if (!query) {
    return redirect("/comments");
  }

  const searchedResult = comments.filter((comment) => {
    if (comment.text.includes(query.toLowerCase())) {
      return comment;
    }
  });

  return NextResponse.json(searchedResult);
}
