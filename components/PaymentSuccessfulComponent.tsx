"use client";

import { CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentSuccessfulComponent() {
    // ➤ Later replace with real API data
    const appointment = {
        date: "Tuesday, Nov 4",
        time: "11:00 AM - 12:30 PM EST",
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-10">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
                <CheckCircle className="text-green-600 w-20 h-20" strokeWidth={1.5} />
            </div>

            {/* Success Title */}
            <h1 className="text-2xl font-semibold text-center mb-6">
                Thank you, your appointment is scheduled.
            </h1>

            {/* Appointment Summary */}
            <Card className="w-full max-w-md shadow-sm border rounded-xl">
                <CardContent className="flex items-start gap-4 p-4">
                    <Calendar className="w-10 h-10 text-gray-700" />

                    <div>
                        <p className="font-medium text-lg">{appointment.date}</p>
                        <p className="text-gray-600 text-sm">{appointment.time}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
