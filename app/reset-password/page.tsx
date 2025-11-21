"use client";

import { useState } from "react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyDashboard from "@/components/MyDashboard";

export default function ResetPasswordPage() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <>
            {/* HEADER */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* ---- FIXED DASHBOARD RIBBON ---- */}
            <div className="w-full fixed top-16 left-0 z-40 bg-[#0F172A]">

                {/* Main Heading */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "36px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        letterSpacing: "0.5px",
                        color: "white",
                    }}
                >
                    Reset Your Password
                </p>

                {/* Sub Heading */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "18px",
                        top: "53%",
                        left: "50%",
                        transform: "translate(-50%, -1%)",
                        letterSpacing: "0.3px",
                        color: "white",
                    }}
                >
                    Choose a new password to secure your account
                </p>

                {/* Dashboard Ribbon Background */}
                <div className="relative z-10">
                    <MyDashboard />
                </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-44">
                <Card className="w-full max-w-md shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold text-center">
                            Reset Your Password?
                        </CardTitle>
                        <p className="text-center text-sm text-muted-foreground mt-2">
                            Choose a new password to secure your account
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        {/* New Password */}
                        <div className="space-y-1">
                            <Label htmlFor="newPassword">Create New Password</Label>

                            <div className="relative">
                                <Input
                                    id="newPassword"
                                    type={showNew ? "text" : "password"}
                                    placeholder="Create New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="pr-10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowNew(!showNew)}
                                    className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground"
                                >
                                    {showNew ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>

                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="pr-10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground"
                                >
                                    {showConfirm ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <Button className="w-full" size="lg">
                            Reset Login
                        </Button>

                        {/* Back to Login */}
                        <p className="text-center text-sm text-muted-foreground mt-2">
                            Remember your password?{" "}
                            <Link href="/login" className="text-primary hover:underline">
                                Go back to Login
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* FOOTER */}
            <Footer />
        </>
    );
}
