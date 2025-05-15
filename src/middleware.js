import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = (await cookies()).get('token');
    if (!token && /*!request.nextUrl.pathname.startsWith("/auth/login")*/ request.nextUrl.pathname !== "/auth/login") {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (token && request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
}

