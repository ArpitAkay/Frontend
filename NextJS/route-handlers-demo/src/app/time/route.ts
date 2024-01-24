//Route Handlers are cached by default when using the GET method with the Response object in Next.js

//How to opt out of caching?
// - dynamic mode in Segment Config Option
// - using the Request object with the GET method
// - employing dynamic functions like headers) and cookies()
// - using any HTTP method other than GET

export const dynamic = "force-dynamic"; //by default auto
export async function GET() {
  return new Response(new Date().toLocaleTimeString());
}
