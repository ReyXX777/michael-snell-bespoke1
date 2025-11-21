"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminPersonalInformation() {
    return (
        <div className="w-full max-w-3xl mx-auto p-6">

            {/* HEADER ROW */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-semibold">Personal Information</h1>

                <Button variant="default" className="px-5">
                    Edit Profile
                </Button>
            </div>

            {/* MAIN CARD */}
            <Card className="rounded-xl shadow-sm border">
                <CardContent className="p-6 space-y-6">

                    {/* FIRST + LAST NAME ROW */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium">First Name</label>
                            <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-700">
                                Rodger
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Last Name</label>
                            <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-700">
                                Struck
                            </div>
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="text-sm font-medium">Email</label>
                        <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-700">
                            Rodger@gmail.com
                        </div>
                    </div>

                    {/* PHONE NUMBER */}
                    <div>
                        <label className="text-sm font-medium">Phone Number</label>

                        <div className="mt-1 flex gap-3">
                            <div className="p-3 border rounded-lg bg-gray-50 w-24 text-center text-gray-700">
                                +91
                            </div>
                            <div className="p-3 border rounded-lg bg-gray-50 flex-1 text-gray-700">
                                1234567890
                            </div>
                        </div>
                    </div>

                    {/* ROLE */}
                    <div>
                        <label className="text-sm font-medium">Role</label>
                        <div className="mt-1 p-3 border rounded-lg bg-gray-50 text-gray-700">
                            Admin
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
