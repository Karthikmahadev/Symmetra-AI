import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const { pathname } = req.nextUrl;

    const publicRoutes = [
      "/",
      "/auth/login",
      "/auth/error",
      "/auth/success",
    ];

    const isPublicRoute =
      publicRoutes.includes(pathname) ||
      pathname.startsWith("/api/auth"); // 🔥 VERY IMPORTANT

    // If logged in and visiting home → redirect to dashboard
    if (token && pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // If not logged in and trying protected route
    if (!token && !isPublicRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
