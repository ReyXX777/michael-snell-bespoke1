"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-md w-full overflow-hidden">
            <div className="max-w-[100vw] flex items-center justify-between px-4 py-3">

                {/* LEFT — LOGO */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="MYS Logo"
                        className="w-12 h-12 object-contain"
                    />
                </div>

                {/* CENTER — MAIN NAVIGATION */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium flex-1 justify-center min-w-0">
                    <Link href="/aboutus" className="hover:text-gray-600 truncate">
                        About
                    </Link>

                    <Link href="/fabric" className="hover:text-gray-600 truncate">
                        Catalogue
                    </Link>

                    <Link href="/contact-us" className="hover:text-gray-600 truncate">
                        Contact Us
                    </Link>

                    <Link href="/schedule-appointment" className="hover:text-gray-600 truncate">
                        Schedule Appointment
                    </Link>
                </nav>

                {/* RIGHT — LOGIN BUTTON */}
                <div className="hidden md:flex flex-shrink-0">
                    <Link
                        href="/login"
                        className="text-black border border-gray-800 px-4 py-1 rounded-md hover:bg-gray-100"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
