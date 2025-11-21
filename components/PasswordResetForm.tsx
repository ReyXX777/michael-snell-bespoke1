"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface PasswordResetFormProps {
    title?: string;
    description?: string;
    onSubmit?: (newPassword: string, confirmPassword: string) => void;
    backToLoginUrl?: string;
}

export default function PasswordResetForm({
    title = "Reset Your Password?",
    description = "Choose a new password to secure your account",
    onSubmit,
    backToLoginUrl = "/login",
}: PasswordResetFormProps) {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = () => {
        if (onSubmit) {
            onSubmit(newPassword, confirmPassword);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <Card className="w-full max-w-md shadow-lg rounded-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-center">{title}</CardTitle>
                    <p className="text-center text-sm text-muted-foreground mt-2">{description}</p>
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

                    {/* Submit Button */}
                    <Button className="w-full" size="lg" onClick={handleSubmit}>
                        Reset Login
                    </Button>

                    {/* Back to login */}
                    <p className="text-center text-sm text-muted-foreground mt-2">
                        Remember your password?{" "}
                        <Link href={backToLoginUrl} className="text-primary hover:underline">
                            Go back to Login
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
