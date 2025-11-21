"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AppointmentDateComponent() {
    // State for date and time selections
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const dates = [
        7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27,
        29, 30,
    ];

    const highlightedDates = [23, 24, 25, 26, 29, 30];

    const times = [
        "9:30", "9:30", "9:30",
        "9:30", "9:30", "9:30",
        "9:30", "9:30", "9:30",
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-6 space-y-8">

            {/* Top instruction */}
            <h2 className="text-xl font-semibold">
                Choose a service that best fits your tailoring needs.
            </h2>

            {/* BACK / NEXT Buttons */}
            <div className="flex justify-end gap-3">
                <Button variant="outline">Back</Button>
                <Button>Next</Button>
            </div>

            {/* Calendar Section */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choose a Date</h3>

                {/* Month Switcher */}
                <div className="flex justify-center items-center gap-4 font-medium">
                    <Button variant="ghost">&lt;</Button>
                    <span>April 2025</span>
                    <Button variant="ghost">&gt;</Button>
                </div>

                {/* Calendar Grid */}
                <Card className="border rounded-xl">
                    <CardContent className="p-4">
                        {/* Days of week */}
                        <div className="grid grid-cols-7 text-center font-semibold mb-2">
                            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                                <div key={d}>{d}</div>
                            ))}
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-7 text-center gap-2">
                            {dates.map((day) => {
                                const isHighlighted = highlightedDates.includes(day);
                                const isSelected = selectedDate === day;

                                return (
                                    <motion.div
                                        key={day}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setSelectedDate(day)}
                                        className={`
                                            p-2 rounded-full cursor-pointer 
                                            ${isHighlighted ? "bg-purple-200" : ""}
                                            ${isSelected ? "bg-purple-500 text-white" : ""}
                                        `}
                                    >
                                        {day}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Time Zone + Time Selection */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Select Time Slot</h3>

                {/* Time Zone */}
                <div className="space-y-2">
                    <label className="text-sm font-medium">Select Time Zone</label>
                    <Select defaultValue="et">
                        <SelectTrigger className="w-64">
                            <SelectValue placeholder="Eastern Time (ET)" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="et">Eastern Time (ET)</SelectItem>
                            <SelectItem value="ct">Central Time (CT)</SelectItem>
                            <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Time Buttons */}
                <div className="grid grid-cols-3 gap-4">
                    {times.map((time, i) => (
                        <motion.div
                            key={i}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Button
                                variant={selectedTime === time ? "default" : "outline"}
                                className="w-full py-6"
                                onClick={() => setSelectedTime(time)}
                            >
                                {time}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
