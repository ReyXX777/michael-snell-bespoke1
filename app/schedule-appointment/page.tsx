"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

// IMPORT YOUR COMPONENTS FOR EACH STEP
import FabricContent from "@/components/FabricContent";  // Step 1 (your new file)
import MeasurementsComponent from "@/components/MeasurementsComponent";
import AppointmentDateComponent from "@/components/AppointmentDateComponent";
import PaymentComponent from "@/components/PaymentComponent";
import PaymentSuccessfulComponent from "@/components/PaymentSuccessfulComponent";


const steps = [
    { id: 1, title: "Select Fabric", status: "completed" },
    { id: 2, title: "Measurements", status: "active" },
    { id: 3, title: "Book Appointment", status: "pending" },
    { id: 4, title: "Payment", status: "pending" },
    { id: 5, title: "Confirmation", status: "pending" },
];

export default function ScheduleAppointmentPage() {
    const [activeStep, setActiveStep] = useState(2);

    const renderContent = () => {
        switch (activeStep) {
            case 1:
                // OPEN YOUR FABRIC COMPONENT
                return <FabricContent />;

            case 2:
                return <MeasurementsComponent />;


            case 3:
                return <AppointmentDateComponent />;

            case 4:
                return <PaymentComponent />;

            case 5:
                return <PaymentSuccessfulComponent />;

            default:
                return null;
        }
    };

    return (
        <div className="w-full min-h-screen">
            {/* HEADER */}
            <Header />

            {/* FIXED TOP IMAGE (NO SCALING) */}
            <div className="relative flex justify-center p-0 m-0">
                {/* OVERLAY TEXT */}
                <div
                    className="absolute font-bold text-white text-3xl"
                    style={{
                        top: "20px",     // 👈 Adjust Y position
                        left: "50%",     // Keep centered horizontally
                        transform: "translateX(-50%,-10%)",
                        fontFamily: "Poppins, Inter, sans-serif", // modern ecommerce style
                    }}
                >
                    Schedule Appointment
                </div>

                <Image
                    src="/assets/dashboard.svg"
                    alt="Appointment Banner"
                    width={1440}
                    height={104}
                    style={{ width: "1440px", height: "104px" }}
                    className="block"
                    priority
                />
            </div>

            {/* MAIN CONTAINER */}
            <div className="w-full flex justify-center py-10 px-6 bg-white">
                <div className="w-full max-w-7xl flex">

                    {/* LEFT SIDE STEPS PANEL */}
                    <div className="w-1/3 pr-8">
                        <div className="sticky top-20">
                            {steps.map((step, index) => {
                                const isLast = index === steps.length - 1;

                                const circleColor =
                                    step.status === "completed"
                                        ? "bg-green-600 text-white"
                                        : step.status === "active"
                                            ? "bg-black text-white"
                                            : "bg-gray-300 text-gray-600";

                                const connectorColor =
                                    step.status === "completed"
                                        ? "bg-green-500"
                                        : "bg-gray-300";

                                return (
                                    <div key={step.id} className="flex items-start mb-4">
                                        {/* CIRCLE + CONNECTOR */}
                                        <div className="flex flex-col items-center">
                                            <div
                                                onClick={() => setActiveStep(step.id)}
                                                className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition ${circleColor}`}
                                            >
                                                {step.id}
                                            </div>

                                            {!isLast && (
                                                <div className={`w-1 h-12 ${connectorColor}`}></div>
                                            )}
                                        </div>

                                        {/* STEP LABEL */}
                                        <div
                                            className="ml-4 mt-1 cursor-pointer"
                                            onClick={() => setActiveStep(step.id)}
                                        >
                                            <p className="font-bold text-lg">STEP {step.id}</p>
                                            <p className="text-gray-700">{step.title}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-2/3 bg-gray-50 rounded-xl shadow p-6"
                    >
                        {renderContent()}
                    </motion.div>
                </div>
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
