"use client";

import Image from "next/image";

export default function HomeComponent() {
    return (
        <div className="w-full min-h-screen overflow-y-auto bg-neutral-100 text-gray-800">
            {/* Main Image Section */}
            <div className="relative w-full h-screen">
                <Image
                    src="/home.png"
                    alt="Home Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Below (Scroll Area) */}
            <div className="max-w-6xl mx-auto p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-700">
                    <li>
                        <a href="#" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
