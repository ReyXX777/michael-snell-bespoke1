"use client";

import { useState } from "react";
import { Search, Download } from "lucide-react";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AppointmentManagement() {
    // ----------------------------------------------------------------------
    // 📌 Dummy Appointments (Future API Integration)
    // ----------------------------------------------------------------------
    const [appointments] = useState([
        {
            id: 1,
            name: "Emma Janssen",
            phone: "+31 681 223 334",
            email: "robertfox@example.com",
            tailor: "Charlos Martin",
            date: "2025-10-24 20:15",
            payment: "Paid",
            status: "Scheduled",
        },
        {
            id: 2,
            name: "Emma Janssen",
            phone: "+31 681 223 334",
            email: "robertfox@example.com",
            tailor: "Charlos Martin",
            date: "2025-10-24 20:15",
            payment: "Paid",
            status: "Scheduled",
        },
    ]);

    const currentPage = 1;
    const totalPages = 10;

    return (
        <div className="p-6 w-full">
            {/* ------------------------------------------------------------------ */}
            {/* 🔍 TOP SEARCH + FILTER BAR */}
            {/* ------------------------------------------------------------------ */}
            <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl shadow-sm border mb-6">
                {/* Search Input */}
                <div className="flex items-center w-full sm:w-1/3 relative">
                    <Search className="absolute left-3 top-2.5 text-gray-500 h-5 w-5" />
                    <Input placeholder="Search for Appointments" className="pl-10" />
                </div>

                {/* Status Filter */}
                <Select>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>

                {/* Date Range */}
                <Select>
                    <SelectTrigger className="w-48">
                        <SelectValue placeholder="Select Date Range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                </Select>

                {/* Export */}
                <Button variant="outline" className="flex gap-2">
                    <Download size={16} /> Export
                </Button>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* 📋 TABLE */}
            {/* ------------------------------------------------------------------ */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="p-3 text-left">S.No</th>
                            <th className="p-3 text-left">Client Name</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Assigned Tailor</th>
                            <th className="p-3 text-left">Appointment Date</th>
                            <th className="p-3 text-left">Payment Status</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">...</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.map((row, index) => (
                            <tr
                                key={row.id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{row.name}</td>
                                <td className="p-3">{row.phone}</td>
                                <td className="p-3">{row.email}</td>
                                <td className="p-3">{row.tailor}</td>
                                <td className="p-3">{row.date}</td>

                                {/* Payment Tag */}
                                <td className="p-3">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                                        {row.payment}
                                    </span>
                                </td>

                                {/* Status Tag */}
                                <td className="p-3">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
                                        {row.status}
                                    </span>
                                </td>

                                <td className="p-3">...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* ⏭ PAGINATION */}
            {/* ------------------------------------------------------------------ */}
            <div className="flex items-center justify-between mt-6 bg-white p-4 rounded-xl border shadow-sm">
                <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border rounded">&lt;</button>
                    <button className="px-2 py-1 border rounded">◄</button>

                    <span className="px-3 py-1 border rounded bg-black text-white">
                        1
                    </span>
                    <span className="px-3 py-1 border rounded">2</span>
                    <span className="px-3 py-1 border rounded">3</span>
                    <span className="px-3 py-1 border rounded">...</span>
                    <span className="px-3 py-1 border rounded">10</span>

                    <button className="px-2 py-1 border rounded">►</button>
                    <button className="px-2 py-1 border rounded">&gt;</button>
                </div>

                <div className="flex items-center gap-3">
                    <span>
                        Page <strong>{currentPage}</strong> of{" "}
                        <strong>{totalPages}</strong>
                    </span>

                    <Select>
                        <SelectTrigger className="w-24">
                            <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}
