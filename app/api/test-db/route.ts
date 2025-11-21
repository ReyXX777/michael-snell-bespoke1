import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);

        return NextResponse.json({ status: "connected" });
    } catch (err: any) {
        return NextResponse.json({ status: "error", message: err.message });
    }
}
