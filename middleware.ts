// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Allow public routes and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/public") ||
    pathname === "/login" ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // ✅ Protect dashboard routes
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

// ✅ Apply only to dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
