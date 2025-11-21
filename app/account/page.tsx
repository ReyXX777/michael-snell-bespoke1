"use client";

import { useState } from "react";

export default function EditAccountDetails() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("1234567890");

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-10">
            <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">

                {/* Header */}
                <h1 className="text-xl font-semibold mb-8 bg-gray-200 py-3 px-4 rounded w-[90%]">
                    Edit Details
                </h1>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                    {/* First Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                </div>

                {/* Email */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-10">
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>

                    <div className="flex gap-2">
                        {/* Country Code */}
                        <input
                            type="text"
                            value="+91"
                            readOnly
                            className="w-20 border rounded px-3 py-2 bg-gray-100"
                        />

                        {/* Mobile Number */}
                        <input
                            type="text"
                            placeholder="1234567890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button className="px-5 py-2 rounded border text-gray-700">
                        Cancel
                    </button>

                    <button className="px-5 py-2 rounded bg-black text-white">
                        Save Details
                    </button>
                </div>

            </div>
        </div>
    );
}
