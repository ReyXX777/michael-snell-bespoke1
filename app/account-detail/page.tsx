"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import Header from "@/components/Header";
import MyDashboard from "@/components/MyDashboard";
import MeasurementsComponent from "@/components/MeasurementsComponent";
import OrdersList from "@/components/OrdersList";
import AddressList from "@/components/AddressList";
import PasswordResetForm from "@/components/PasswordResetForm";

import {
    User,
    Ruler,
    Package,
    MapPin,
    KeyRound,
    LogOut,
} from "lucide-react";

export default function AccountDetailPage() {
    const [activeSection, setActiveSection] = useState("account");

    const [firstName] = useState("First Name");
    const [lastName] = useState("Last Name");
    const [email] = useState("email@example.com");
    const [phone] = useState("1234567890");

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">

            {/* ---- FIXED MAIN HEADER ---- */}
            <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow">
                <Header />
            </header>

            {/* ---- FIXED DASHBOARD BAR (NEVER MOVES) ---- */}
            <div className="fixed top-16 left-0 right-0 z-40 h-16 bg-white shadow border-b">
                <p
                    className="absolute z-20 font-inter font-semibold text-3xl text-white pointer-events-none 
                flex items-center justify-center"
                    style={{
                        top: "50%",        // default centered vertically
                        left: "50%",       // default centered horizontally
                        transform: "translate(-50%, -10%)",
                        letterSpacing: "0.3px",
                    }}
                >
                    My Dashboard
                </p>

                {/* Dashboard Ribbon */}
                <div className="z-10 relative">
                    <MyDashboard />
                </div>
            </div>

            {/* ---- Main Layout: Sidebar + Content ---- */}
            <div className="flex pt-32"> {/* pt-32 = 8rem = 128px = Header + Dashboard */}

                {/* ==== FIXED SIDEBAR ==== */}
                <aside className="fixed left-0 top-32 z-30 w-64 bg-white border-r h-[calc(100vh-8rem)] overflow-y-auto p-5 space-y-2">
                    <button
                        onClick={() => setActiveSection("account")}
                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors
              ${activeSection === "account" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
                    >
                        <User size={18} /> Account Detail
                    </button>

                    <button
                        onClick={() => setActiveSection("measurements")}
                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors
              ${activeSection === "measurements" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
                    >
                        <Ruler size={18} /> Measurements
                    </button>

                    <button
                        onClick={() => setActiveSection("orders")}
                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors
              ${activeSection === "orders" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
                    >
                        <Package size={18} /> Orders
                    </button>

                    <button
                        onClick={() => setActiveSection("address")}
                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors
              ${activeSection === "address" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
                    >
                        <MapPin size={18} /> Address
                    </button>

                    <button
                        onClick={() => setActiveSection("password")}
                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors
              ${activeSection === "password" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"}`}
                    >
                        <KeyRound size={18} /> Password
                    </button>

                    <button
                        onClick={() => (window.location.href = "/login")}
                        className="flex w-full items-center gap-3 rounded-lg p-3 text-left text-red-600 transition-colors hover:bg-gray-100"
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </aside>

                {/* ==== SCROLLABLE MAIN CONTENT ==== */}
                <main className="flex-1 ml-64 min-h-screen overflow-y-auto bg-gray-50 p-8">
                    {/* ----- ACCOUNT ----- */}
                    {activeSection === "account" && (
                        <div>
                            <div className="mb-6 flex items-center justify-between">
                                <h1 className="text-2xl font-semibold">Account Detail</h1>
                                <Button>Edit Profile</Button>
                            </div>

                            <Card className="max-w-4xl">
                                <CardHeader>
                                    <CardTitle>Profile Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div>
                                            <label className="mb-1 block text-sm">First Name</label>
                                            <Input value={firstName} readOnly />
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm">Last Name</label>
                                            <Input value={lastName} readOnly />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm">Email</label>
                                        <Input value={email} readOnly />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm">Phone Number</label>
                                        <div className="flex gap-3">
                                            <Input value="+91" readOnly className="w-20" />
                                            <Input value={phone} readOnly />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* ----- MEASUREMENTS (Long content) ----- */}
                    {activeSection === "measurements" && <MeasurementsComponent />}

                    {/* ----- ORDERS ----- */}
                    {activeSection === "orders" && (
                        <OrdersList
                            orders={[
                                {
                                    id: "1241321431",
                                    date: "27 July 2023",
                                    price: "₹18,900",
                                    thumbnail: "order1.png",
                                    status: "In Progress",
                                },
                                {
                                    id: "1241321432",
                                    date: "15 Aug 2023",
                                    price: "₹12,500",
                                    thumbnail: "order2.png",
                                    status: "Completed",
                                },
                                {
                                    id: "1241321433",
                                    date: "02 Sep 2023",
                                    price: "₹9,999",
                                    thumbnail: "order3.png",
                                    status: "Failed",
                                },
                            ]}
                        />
                    )}

                    {/* ----- ADDRESS ----- */}
                    {activeSection === "address" && (
                        <div className="rounded-lg bg-white p-6 shadow">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Address</h2>
                                <Button className="bg-gray-300 text-black hover:bg-gray-400">
                                    Add New Address
                                </Button>
                            </div>

                            <AddressList
                                addresses={[
                                    {
                                        id: 1,
                                        name: "James Anderson",
                                        line1: "2745 Lakeview Drive",
                                        line2: "Chicago, IL 60616, USA",
                                        isDefault: true,
                                    },
                                    {
                                        id: 2,
                                        name: "Jane Doe",
                                        line1: "101 Corporate Lane",
                                        line2: "New York, NY 10001, USA",
                                        isDefault: false,
                                    },
                                ]}
                            />
                        </div>
                    )}

                    {/* ----- PASSWORD ----- */}
                    {activeSection === "password" && (
                        <div className="rounded-lg bg-white p-6 shadow">
                            <PasswordResetForm
                                onSubmit={(newPassword, confirmPassword) => {
                                    console.log("New:", newPassword, "Confirm:", confirmPassword);
                                }}
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}