"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-100 mt-16 pt-12 border-t">
            {/* Scroll to top */}
            <div className="flex justify-end pr-6">
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                >
                    <ArrowUp size={18} />
                    <span>Scroll Up</span>
                </button>
            </div>

            {/* Main Footer Grid */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Branding */}
                <div className="col-span-1 space-y-3">
                    <Image
                        src="/logo.png"
                        width={70}
                        height={70}
                        alt="MYS Logo"
                    />
                    <h2 className="text-2xl font-bold leading-tight">
                        Michael Snell <br /> Bespoke
                    </h2>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">

                        <li>
                            <Link href="/" className="hover:text-black cursor-pointer">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/aboutus" className="hover:text-black cursor-pointer">
                                About
                            </Link>
                        </li>

                        <li>
                            <Link href="/contact-us" className="hover:text-black cursor-pointer">
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link href="/terms" className="hover:text-black cursor-pointer">
                                Terms & Conditions
                            </Link>
                        </li>

                        <li>
                            <Link href="/refund-policy" className="hover:text-black cursor-pointer">
                                Refund Policy
                            </Link>
                        </li>

                        <li>
                            <Link href="/faqs" className="hover:text-black cursor-pointer">
                                FAQ&apos;s
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">CONTACT US</h3>
                    <p className="text-gray-800">+1 999 888-76-54</p>

                    <h4 className="font-semibold text-gray-700 mt-4">EMAIL</h4>
                    <p className="text-gray-800">Michael-bespoke@gmail.com</p>

                    <h4 className="font-semibold text-gray-700 mt-4">SOCIAL CONNECT</h4>
                    <div className="flex gap-3 mt-2">
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Instagram size={18} />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Facebook size={18} />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Youtube size={18} />
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Twitter size={18} />
                        </div>
                    </div>
                </div>

                {/* Payments */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">SECURE PAYMENTS</h3>

                    <div className="flex flex-wrap gap-3">

                        <div className="px-3 py-2 bg-white border rounded flex items-center">
                            <img
                                src="/assets/stripe.svg"
                                alt="Stripe"
                                className="h-6 w-auto"
                            />
                        </div>

                        <div className="px-3 py-2 bg-white border rounded flex items-center">
                            <img
                                src="/assets/paypal.svg"
                                alt="PayPal"
                                className="h-6 w-auto"
                            />
                        </div>

                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="py-6 text-center text-gray-600 text-sm border-t">
                © 2025 Michael Snell Bespoke. All Rights Reserved.
            </div>
        </footer>
    );
}
