"use client";

import { Phone, Mail, Instagram, Facebook, Github } from "lucide-react";
import Link from "next/link";

// UI Components
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Imported Layout Components
import Header from "@/components/Header";
import MyDashboard from "@/components/MyDashboard";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit form → Hook to API here");
    };

    return (
        <>
            {/* ================= HEADER (STICKY) ================= */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* ================= DASHBOARD RIBBON (STICKY) ================= */}
            <div className="w-full fixed top-16 left-0 z-40 bg-[#0F172A]">

                {/* Title */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold text-white"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "36px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        letterSpacing: "0.5px",
                    }}
                >
                    Contact Us
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
                    We are here to help and answer your questions
                </p>

                <div className="relative z-10">
                    <MyDashboard />
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="min-h-screen bg-gray-50 px-6 py-10 pt-32">

                <div className="max-w-6xl mx-auto mt-10">
                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* LEFT — CONTACT INFORMATION */}
                        <Card className="border rounded-xl shadow-sm">
                            <CardContent className="p-6 space-y-6">

                                {/* CONTACT US */}
                                <div>
                                    <p className="text-sm font-medium text-gray-500">CONTACT US</p>
                                    <div className="flex items-center gap-2 mt-1 text-gray-800">
                                        <Phone size={18} /> +1 999 888-76-54
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <p className="text-sm font-medium text-gray-500">EMAIL</p>
                                    <div className="flex items-center gap-2 mt-1 text-gray-800">
                                        <Mail size={18} /> hello@logoipsum.com
                                    </div>
                                </div>

                                {/* SOCIAL */}
                                <div>
                                    <p className="text-sm font-medium text-gray-500">SOCIAL CONNECT</p>

                                    <div className="flex gap-4 mt-3 text-gray-700">
                                        <Link href="#">
                                            <Instagram className="w-6 h-6 hover:text-black transition" />
                                        </Link>
                                        <Link href="#">
                                            <Facebook className="w-6 h-6 hover:text-black transition" />
                                        </Link>
                                        <Link href="#">
                                            <Github className="w-6 h-6 hover:text-black transition" />
                                        </Link>
                                        <Link href="#">
                                            <Mail className="w-6 h-6 hover:text-black transition" />
                                        </Link>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>

                        {/* RIGHT — CONTACT FORM */}
                        <Card className="border rounded-xl shadow-sm">
                            <CardContent className="p-6">

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div className="space-y-2">
                                        <label className="font-medium text-sm">Full Name</label>
                                        <Input placeholder="Full Name" />
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="font-medium text-sm">Email</label>
                                        <Input placeholder="Email" type="email" />
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="font-medium text-sm">Message</label>
                                        <Textarea placeholder="Message" rows={6} />
                                    </div>

                                    {/* Submit */}
                                    <div className="flex justify-end">
                                        <Button type="submit" className="px-6">
                                            Submit
                                        </Button>
                                    </div>
                                </form>

                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* ================= FOOTER ================= */}
            <Footer />
        </>
    );
}
