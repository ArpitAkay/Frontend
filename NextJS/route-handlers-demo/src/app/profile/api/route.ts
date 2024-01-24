import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  const headerList = headers(); //headers returned from this function are read only

  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));

  //read the cookie
  const theme = req.cookies.get("theme");
  console.log(theme);

  cookies().set("resultsPerPage", "10");
  const resultsPerPageCookie = cookies().get("resultsPerPage");
  console.log(resultsPerPageCookie);
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
