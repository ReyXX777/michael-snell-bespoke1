import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Skip middleware for API and Next.js internals
    if (
        pathname.startsWith("/api/") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/assets")
    ) {
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/orders/:path*"],
};
