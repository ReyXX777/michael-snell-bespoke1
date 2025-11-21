"use client";

import { useState } from "react";

// Imported Components
import Header from "@/components/Header";
import MyDashboard from "@/components/MyDashboard";
import Footer from "@/components/Footer";

export default function FAQPage() {
    const faqs = [
        {
            q: "How Does The Ordering Process Work?",
            a: "You can start by booking a fitting or selecting a suit online. Once your measurements are taken, we craft your suit from premium fabrics and deliver it to your doorstep.",
        },
        { q: "When Will My Order Ship?", a: "" },
        { q: "Can I Cancel Or Modify My Order?", a: "" },
        { q: "What Are My Shipping Options?", a: "" },
        { q: "What Type Of Payment Methods Do You Offer?", a: "" },
        { q: "Can I Order A Suit Without Visiting The Studio?", a: "" },
        { q: "What Payment Methods Do You Accept?", a: "" },
        { q: "What If My Suit Doesn't Fit Perfectly?", a: "" },
        { q: "How Long Does It Take To Receive My Suit?", a: "" },
    ];

    const [openIndex, setOpenIndex] = useState(0); // First FAQ open

    return (
        <>
            {/* ================= HEADER (STICKY) ================= */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* ================= DASHBOARD RIBBON (STICKY BELOW HEADER) ================= */}
            <div className="w-full fixed top-16 left-0 z-40 bg-[#0F172A]">

                {/* Title */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold text-white"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "34px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        letterSpacing: "0.5px",
                    }}
                >
                    Frequently Asked Questions
                </p>

                {/* Subtitle */}
                <p
                    className="absolute z-20 pointer-events-none text-white"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "18px",
                        top: "53%",
                        left: "50%",
                        transform: "translate(-50%, -5%)",
                        letterSpacing: "0.3px",
                    }}
                >
                    Find quick answers to common questions
                </p>

                <div className="relative z-10">
                    <MyDashboard />
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="max-w-4xl mx-auto px-6 py-20 pt-40">

                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border rounded-lg bg-white shadow-sm">
                                {/* Question Row */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    className="w-full flex justify-between items-center px-4 py-4 text-left font-medium"
                                >
                                    <span>{item.q}</span>

                                    <span className="text-xl font-bold">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Divider */}
                                <div className="border-t" />

                                {/* Answer */}
                                {isOpen && item.a && (
                                    <div className="px-4 py-3 text-sm text-gray-700">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <Footer />
        </>
    );
}
