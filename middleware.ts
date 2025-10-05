// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public paths to pass
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/public") || // public APIs
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

// Limit middleware to only dashboard routes for perf
export const config = {
  matcher: ["/dashboard/:path*"],
};
