// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public paths to pass
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/public") || 
    pathname === "/login" ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  
  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("refreshToken")?.value; 
    if (!token) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*"],
};
