import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"; // bcryptjs works better in serverless
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User"; // default export recommended
import mongoose from "mongoose";

const handler = NextAuth({
    providers: [
        /* -----------------------------------------
         🔹 GOOGLE AUTH PROVIDER 
        ----------------------------------------- */
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        /* -----------------------------------------
         🔹 CREDENTIALS (MANUAL LOGIN)
        ----------------------------------------- */
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }

                await connectDB();

                const user = await User.findOne({ email: credentials.email });
                if (!user) {
                    throw new Error("User not found");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if (!isValid) {
                    throw new Error("Invalid password");
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                };
            },
        }),
    ],

    /* -----------------------------------------
       SESSION STRATEGY
    ----------------------------------------- */
    session: {
        strategy: "jwt",
    },

    /* -----------------------------------------
       PAGES
    ----------------------------------------- */
    pages: {
        signIn: "/login",
    },

    /* -----------------------------------------
       EVENTS — Track Logins in MongoDB
    ----------------------------------------- */
    events: {
        async signIn({ user, account }) {
            try {
                await connectDB();

                const LoginEvent = mongoose.connection.collection("login_events");

                await LoginEvent.insertOne({
                    email: user?.email || "unknown",
                    provider: account?.provider || "unknown",
                    time: new Date(),
                });
            } catch (error) {
                console.error("Error logging sign-in:", error);
            }
        },
    },

    /* -----------------------------------------
       SECURITY
    ----------------------------------------- */
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
