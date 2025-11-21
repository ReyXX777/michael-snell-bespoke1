"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// UI Components
import Header from "@/components/Header";
import ProfileManagement from "@/components/ProfileManagement";
import AdminPersonalInformation from "@/components/AdminPersonalInformation";

// Icons
import {
    LayoutGrid,
    ShoppingBag,
    Globe,
    User,
    Shirt,
    Calendar,
    ClipboardList,
    ChevronRight,
} from "lucide-react";

// Right-side components
const Dashboard = () => (
    <div className="p-6 flex gap-6">
        {/* LEFT SIDE – PROFILE MANAGEMENT */}
        <div className="flex-1">
            <ProfileManagement />
        </div>

        {/* RIGHT SIDE – PERSONAL INFORMATION CARD */}
        <div className="flex-1">
            <AdminPersonalInformation />
        </div>
    </div>
);

const Orders = () => <div className="p-6 text-xl font-semibold">Orders Screen</div>;
const Catalog = () => <div className="p-6 text-xl font-semibold">Catalog Screen</div>;
const Account = () => <div className="p-6 text-xl font-semibold">Account Details</div>;
const Measurements = () => <div className="p-6 text-xl font-semibold">Measurements</div>;
const Appointments = () => <div className="p-6 text-xl font-semibold">Appointments</div>;
const Policy = () => <div className="p-6 text-xl font-semibold">Policy / Misc Section</div>;

// Sidebar items
const navItems = [
    { id: 1, icon: <LayoutGrid size={26} />, component: <Dashboard /> },
    { id: 2, icon: <ShoppingBag size={26} />, component: <Orders /> },
    { id: 3, icon: <Globe size={26} />, component: <Catalog /> },
    { id: 4, icon: <User size={26} />, component: <Account /> },
    { id: 5, icon: <Shirt size={26} />, component: <Measurements /> },
    { id: 6, icon: <Calendar size={26} />, component: <Appointments /> },
    { id: 7, icon: <ClipboardList size={26} />, component: <Policy /> },
];

export default function AdminSignInPage() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="w-full h-full bg-gray-50">
            {/* HEADER */}
            <Header />

            {/* MAIN LAYOUT */}
            <div className="flex min-h-screen pt-4 gap-4">
                {/* LEFT SIDEBAR */}
                <div className="w-20 bg-white border-r flex flex-col items-center py-6 shadow">
                    {/* MYS LOGO */}
                    <div className="mb-10 cursor-pointer">
                        <Image
                            src="/assets/mys-logo.svg"
                            width={48}
                            height={48}
                            alt="MYS Logo"
                            className="opacity-90 hover:opacity-100 transition"
                        />
                    </div>

                    {/* NAVIGATION ICONS */}
                    <div className="flex flex-col items-center gap-8">
                        {navItems.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveTab(item.id)}
                                className={`p-3 rounded-xl cursor-pointer transition ${
                                    activeTab === item.id ? "bg-black text-white" : "text-gray-600"
                                }`}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex-1"></div>

                    {/* USER AVATAR */}
                    <div className="flex flex-col items-center gap-3 mb-6">
                        <Image
                            src="/assets/user-avatar.png"
                            width={42}
                            height={42}
                            alt="User Profile"
                            className="rounded-full border shadow-sm"
                        />
                        <ChevronRight className="text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 bg-gray-100 min-h-screen p-8 rounded-lg"
                >
                    {navItems.find((i) => i.id === activeTab)?.component}
                </motion.div>
            </div>
        </div>
    );
}
