"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function PaymentComponent() {
    const [gateway, setGateway] = useState("stripe");

    // 🔧 API-friendly structure
    const appointmentData = {
        date: "Tuesday, Nov 4",
        time: "11:00 AM - 12:30 PM EST",
        fee: 50.0,
        taxes: 0.0,
    };

    const total = appointmentData.fee + appointmentData.taxes;

    const handleSubmit = async () => {
        console.log("Selected Gateway:", gateway);

        alert(`Booking confirmed using: ${gateway}`);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 mt-6">
            {/* Header Section */}
            <h1 className="text-2xl font-semibold mb-6">
                Review and pay securely to continue your appointment
            </h1>

            {/* Appointment Summary */}
            <Card className="mb-8">
                <CardHeader>
                    <h2 className="text-lg font-medium">Appointment Summary</h2>
                </CardHeader>

                <CardContent>
                    {/* Date & Time Row */}
                    <div className="flex items-center gap-4 mb-6">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        <div>
                            <p className="font-semibold">{appointmentData.date}</p>
                            <p className="text-sm text-gray-600">{appointmentData.time}</p>
                        </div>
                    </div>

                    {/* Price List */}
                    <div className="flex justify-between py-2 text-sm">
                        <span>Appointment Fee</span>
                        <span>€{appointmentData.fee.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between py-2 text-sm">
                        <span>Taxes</span>
                        <span>€{appointmentData.taxes.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between py-3 border-t mt-3 font-semibold">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Payment Gateway */}
            <Card className="mb-10">
                <CardHeader>
                    <h2 className="text-lg font-medium">Select Payment Gateway</h2>
                </CardHeader>

                <CardContent>
                    <RadioGroup
                        defaultValue="stripe"
                        value={gateway}
                        onValueChange={setGateway}
                        className="flex items-center gap-10"
                    >
                        {/* Stripe */}
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="stripe" id="stripe" />
                            <Label htmlFor="stripe" className="flex items-center gap-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Stripe_Logo%2C_revised_2016.svg"
                                    alt="Stripe Logo"
                                    className="h-5"
                                />
                            </Label>
                        </div>

                        {/* PayPal */}
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex items-center gap-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="PayPal Logo"
                                    className="h-5"
                                />
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4">
                <Button variant="outline">
                    Back
                </Button>

                <Button
                    className="bg-blue-600 text-white"
                    onClick={handleSubmit}
                >
                    Pay and Book Appointment
                </Button>
            </div>
        </div>
    );
}
