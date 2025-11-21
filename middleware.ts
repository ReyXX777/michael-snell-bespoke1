import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // 🔓 Public routes (do NOT block)
    const publicPaths = [
        "/login",
        "/create-account",
        "/forgot-password",
        "/reset-password",
    ];
    const isPublic = publicPaths.some((path) => pathname.startsWith(path));

    // 🔓 Skip middleware for NextAuth routes & static assets
    if (
        pathname.startsWith("/api/auth") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/assets") ||
        isPublic
    ) {
        return NextResponse.next();
    }

    // 🔐 Check auth token
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    });

    // ❌ No token → redirect to login
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

// 🔐 Protected routes only
export const config = {
    matcher: [
        "/dashboard/:path*",
        "/profile/:path*",
        "/orders/:path*",
    ],
};
