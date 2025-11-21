import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // Just pass through everything
    return NextResponse.next();
}

// Apply middleware to all routes if needed
export const config = {
    matcher: ["/:path*"], // optional, can be omitted to apply globally
};
