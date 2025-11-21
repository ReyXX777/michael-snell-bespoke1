"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Header from "@/components/Header";          // ✅ Added Header
import MyDashboard from "@/components/MyDashboard"; // ✅ Added Dashboard Ribbon
import Footer from "@/components/Footer";           // ✅ Added Footer

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Reset link sent to:", email);
    };

    return (
        <>
            {/* HEADER */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* ---- DASHBOARD RIBBON WITH CUSTOM TEXT ---- */}
            <div className=" w-full fixed top-16 z-40 bg-[#0F172A]">

                {/* Main Title */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "36px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        color: "white",
                        letterSpacing: "0.5px",
                    }}
                >
                    Forgot Password?
                </p>

                {/* Subtitle */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "18px",
                        top: "53%",
                        left: "50%",
                        transform: "translate(-50%, 10%)",
                        color: "white",
                        letterSpacing: "0.3px",
                    }}
                >
                    Reset your password now
                </p>

                {/* Dashboard Background Component */}
                <div className="relative z-10">
                    <MyDashboard />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <Card className="w-full max-w-md shadow-xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                            Forgot Password?
                        </CardTitle>
                        <p className="text-center text-sm text-gray-600 mt-1">
                            Reset your password now!
                        </p>
                    </CardHeader>

                    <CardContent>
                        <p className="text-gray-700 text-sm mb-6">
                            Please enter the email address associated with your account.
                            We&apos;ll promptly send you a link to reset your password.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Label htmlFor="email" className="font-medium">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full py-5 text-base rounded-xl">
                                Send reset link
                            </Button>

                            <p className="text-center text-sm text-gray-600 mt-2">
                                <Link href="/login" className="underline hover:text-black">
                                    Back to login
                                </Link>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* FOOTER */}
            <Footer />
        </>
    );
}
