"use client";

import Image from "next/image";
import { Lock, User as UserIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfileManagement() {
    return (
        <div className="w-full flex flex-col items-center py-10 px-6">

            {/* USER AVATAR */}
            <div className="flex flex-col items-center mb-8">
                <Image
                    src="/assets/user-avatar.png"
                    alt="User Profile"
                    width={120}
                    height={120}
                    className="rounded-full shadow-md border"
                />

                <h2 className="text-2xl font-semibold mt-4">Rodger Struck</h2>
                <p className="text-gray-600 text-sm">Admin</p>
            </div>

            {/* MAIN CARD */}
            <Card className="w-full max-w-md rounded-xl shadow-sm border">
                <CardContent className="p-0">
                    
                    {/* PERSONAL INFO */}
                    <Button
                        variant="ghost"
                        className="w-full flex items-center gap-3 justify-start text-base px-5 py-4 hover:bg-gray-100 rounded-none"
                    >
                        <Lock size={20} className="text-gray-700" />
                        Personal Information
                    </Button>

                    <div className="h-px bg-gray-200"></div>

                    {/* RESET PASSWORD */}
                    <button className="w-full flex items-center gap-3 text-left text-base px-5 py-4 text-gray-700 hover:bg-gray-100 transition">
                        <Lock size={20} />
                        Reset Password
                    </button>

                    <div className="h-px bg-gray-200"></div>

                    {/* LOG OUT */}
                    <button className="w-full flex items-center gap-3 text-left text-base px-5 py-4 text-gray-700 hover:bg-gray-100 transition">
                        <UserIcon size={20} />
                        Log Out
                    </button>

                </CardContent>
            </Card>

        </div>
    );
}
