"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyDashboard from "@/components/MyDashboard";

export default function RefundPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Sticky Header */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* Sticky MyDashboard with overlay title */}
            <div className="w-full sticky top-[70px] z-40 bg-white shadow relative">

                {/* Overlay Title */}
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "36px", // adjustable
                        top: "38%", // adjust Y position
                        left: "50%", // center X
                        transform: "translate(-50%, -60%)",
                        letterSpacing: "0.5px",
                        color: "white",
                    }}
                >
                    Refund Policy
                </p>

                {/* MyDashboard Component */}
                <MyDashboard />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 py-10 px-6 flex justify-center">
                <div className="max-w-4xl bg-white p-8 rounded-xl shadow">

                    {/* Page Title */}
                    <h1 className="text-xl font-semibold mb-6 bg-gray-200 px-4 py-2 rounded w-[90%] text-gray-800">
                        Refund Policy
                    </h1>

                    {/* Last Updated */}
                    <p className="text-sm text-gray-600 mb-6">
                        <strong>Last Updated:</strong> November 2025
                    </p>

                    {/* Introduction */}
                    <section className="mb-8 leading-relaxed text-gray-700">
                        <p>
                            At Michael Snell Bespoke, every garment is individually tailored to your
                            unique measurements and preferences. Our goal is to ensure every client
                            experiences the perfect fit, premium quality, and timeless design our brand
                            stands for. Because all our products are custom-made, please read our policy
                            carefully before placing an order.
                        </p>
                    </section>

                    {/* 1. Made-to-Order Policy */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">1. Made-to-Order Policy</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>All suits and garments are hand-tailored to order based on your measurements, fabric, and design choices.</li>
                            <li>Since each piece is uniquely crafted, refunds or exchanges are not available once production begins.</li>
                            <li>This ensures true bespoke exclusivity in every order.</li>
                        </ul>
                    </section>

                    {/* 2. Cancellations */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">2. Cancellations</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>Orders may be canceled only within the first 24 hours.</li>
                            <li>After 24 hours, production begins and cancellation is not permitted.</li>
                            <li>Contact our support team at <span className="text-blue-600">[Insert email/phone]</span>.</li>
                            <li>Approved cancellations are refunded within 7–10 business days.</li>
                        </ul>
                    </section>

                    {/* 3. Alterations */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">3. Alterations & Fit Adjustments</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>Free alterations if fit issues differ from approved measurements.</li>
                            <li>Issues must be reported within 7 days of receiving your garment.</li>
                            <li>Alterations for studio-measured clients are fully covered.</li>
                            <li>Self-measured orders may incur a small service fee.</li>
                            <li>Our team may request photos and measurement verification.</li>
                        </ul>
                    </section>

                    {/* 4. Manufacturing Defects */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">4. Manufacturing Defects</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>Report any defects within 7 days of delivery.</li>
                            <li>After review, we may offer repair, replacement, or refund.</li>
                            <li>Refunds for defects process within 10–15 business days.</li>
                        </ul>
                    </section>

                    {/* 5. Non-Refundable Items */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">5. Non-Refundable Items</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>Custom-tailored garments once production has started.</li>
                            <li>Gift cards and vouchers.</li>
                            <li>Completed alteration services.</li>
                            <li>Rush tailoring fees.</li>
                        </ul>
                    </section>

                    {/* 6. Delivery Delays */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">6. Delivery Delays</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Handcrafted garments may experience slight delays due to fabric availability,
                            production complexity, or logistics. Such delays do not qualify for refunds.
                        </p>
                    </section>

                    {/* 7. Return Shipping */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">7. Return Shipping</h2>
                        <p className="text-gray-700 leading-relaxed">
                            If a return or alteration is approved, instructions will be provided. Customers
                            are responsible for safely returning the garment in unused condition with original
                            packaging.
                        </p>
                    </section>

                    {/* 8. Refund Processing */}
                    <section className="mb-8">
                        <h2 className="font-semibold text-lg mb-2">8. Refund Processing</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>Refunds are issued to the original payment method.</li>
                            <li>Processing usually takes 7–10 business days.</li>
                        </ul>
                    </section>

                    {/* 9. Contact */}
                    <section className="mb-4">
                        <h2 className="font-semibold text-lg mb-2">9. Contact Us</h2>
                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                            <li>[Insert Email]</li>
                            <li>[Insert Phone Number]</li>
                            <li>Michael Snell Bespoke, [Insert Address]</li>
                        </ul>ss
                    </section>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
