import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

/* --------------------------------------------------
   🔹 FORCE DYNAMIC — Prevent Static Optimization
-------------------------------------------------- */
export const dynamic = "force-dynamic";

/* --------------------------------------------------
   🔹 REGISTER API
-------------------------------------------------- */
export async function POST(req: Request) {
    console.info("🟦 STEP 1: Register API hit");

    try {
        console.info("🟦 STEP 2: Trying to connect to DB...");
        const connectionResult = await connectDB();
        console.info("🟩 DB RESULT:", connectionResult);

        // READ RAW BODY
        let bodyText = await req.text();
        console.info("🟦 STEP 3: Raw incoming body:", bodyText);

        // PARSE JSON MANUALLY (more reliable)
        let body: any = {};
        try {
            body = JSON.parse(bodyText);
        } catch (err) {
            console.error("❌ JSON Parse Error:", err);
        }

        const { fullname, email, password } = body;
        console.info("🟦 STEP 4: Parsed body:", body);

        // CHECK FIELDS
        if (!fullname || !email || !password) {
            console.warn("❌ STEP 5: Missing fields:", { fullname, email, password });

            return NextResponse.json(
                { success: false, message: "All fields are required", received: body },
                { status: 400 }
            );
        }

        // CHECK USER EXISTS
        console.info("🟦 STEP 6: Checking existing user...");
        const existingUser = await User.findOne({ email });
        console.info("Existing user:", existingUser);

        if (existingUser) {
            return NextResponse.json(
                { success: false, message: "Email already registered" },
                { status: 400 }
            );
        }

        // HASH PASSWORD
        console.info("🟦 STEP 7: Hashing password...");
        const hashedPassword = await bcrypt.hash(password, 12);

        // CREATE USER
        console.info("🟦 STEP 8: Creating user...");
        await User.create({
            name: fullname,
            email,
            password: hashedPassword,
        });

        console.info("🟩 STEP 9: Registration success!");

        return NextResponse.json(
            { success: true, message: "User registered successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ REGISTER API ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Server error",
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
