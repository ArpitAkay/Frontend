import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
  //second method
  if (req.nextUrl.pathname === "/profile") {
    // return NextResponse.redirect(new URL("/", req.url));
    return NextResponse.rewrite(new URL("/", req.url));
  }
  //first method
  // return NextResponse.redirect(new URL("/", req.url));
}

// export const config = {
//   matcher: "/profile",
// };
