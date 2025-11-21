"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MyDashboard from "@/components/MyDashboard";

export default function TermsPage() {
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
                        fontSize: "36px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                        letterSpacing: "0.5px",
                        color: "white",
                    }}
                >
                    Terms & Conditions
                </p>

                {/* MyDashboard Component */}
                <MyDashboard />
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-100 py-10 px-6 flex justify-center">
                <div className="max-w-4xl bg-white p-8 rounded-xl shadow">

                    <h1 className="text-3xl font-semibold mb-6">Terms & Conditions</h1>

                    <p className="text-sm text-gray-500 mb-8">
                        Last Updated: November 2025
                    </p>

                    {/* INTRODUCTION */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Michael Snell Bespoke. These Terms and Conditions ("Terms") govern your
                            use of our website and services. By accessing or purchasing through our website, you
                            agree to comply with and be bound by these Terms. Please read them carefully before
                            using our services.
                        </p>
                    </section>

                    {/* 1. COMPANY INFORMATION */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">1. Company Information</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Michael Snell Bespoke</li>
                            <li>Registered Office: [Insert Address]</li>
                            <li>Email: [Insert Email]</li>
                            <li>Phone: [Insert Phone]</li>
                            <li>
                                We specialize in custom, made-to-measure, and bespoke tailoring services,
                                offering premium suits designed to fit individual measurements and preferences.
                            </li>
                        </ul>
                    </section>

                    {/* 2. USE OF WEBSITE */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">2. Use of the Website</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            By using our website, you agree to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Provide accurate and complete information during registration or purchase.</li>
                            <li>Use the website only for lawful purposes.</li>
                            <li>Not hack, disrupt, misuse, or circumvent website systems.</li>
                            <li>
                                We reserve the right to refuse service, terminate accounts, or cancel orders if
                                misuse or fraudulent activity is suspected.
                            </li>
                        </ul>
                    </section>

                    {/* 3. PRODUCTS & SERVICES */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">3. Products & Services</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>All products are made-to-order based on your measurements and selected fabrics.</li>
                            <li>
                                Minor variations in color, texture, or fit may occur due to fabric characteristics
                                or display differences.
                            </li>
                            <li>Each garment is handcrafted, ensuring no two items are identical.</li>
                        </ul>
                    </section>

                    {/* 4. MEASUREMENTS & FIT */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">4. Measurements & Fit</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Customers are responsible for ensuring submitted measurements are accurate.</li>
                            <li>Professional fittings conducted by our team come with guaranteed fit.</li>
                            <li>Alterations due to changed measurements may incur additional charges.</li>
                            <li>Alteration requests must be submitted within 7 days of delivery.</li>
                        </ul>
                    </section>

                    {/* 5. ORDERS & PAYMENTS */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">5. Orders & Payments</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Prices are listed in [Insert Currency].</li>
                            <li>Full payment is required at the time of order.</li>
                            <li>Payments are accepted through secure gateways on our website.</li>
                            <li>
                                We may cancel or modify orders due to pricing errors or system malfunctions—with
                                prior notice.
                            </li>
                        </ul>
                    </section>

                    {/* 6. DELIVERY & TIMELINES */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">6. Delivery & Timelines</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Typical delivery timelines range from 4–8 weeks.</li>
                            <li>Delays due to courier services or external factors are beyond our control.</li>
                            <li>Tracking details are provided once your order is shipped.</li>
                        </ul>
                    </section>

                    {/* 7. ALTERATIONS & RETURNS */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">7. Alterations & Returns</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Custom-made items are non-refundable once production begins.</li>
                            <li>
                                We offer repairs or fit corrections if the garment doesn’t match approved
                                measurements.
                            </li>
                            <li>
                                Manufacturing defects may qualify for repair or replacement upon review by our
                                quality team.
                            </li>
                            <li>Return requests must be made within 7 days of receiving the product.</li>
                        </ul>
                    </section>

                    {/* 8. CANCELLATIONS */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">8. Cancellations</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Orders can be canceled within 24 hours of placement. After this period, production
                            may begin, making cancellations ineligible.
                        </p>
                    </section>

                    {/* 9. INTELLECTUAL PROPERTY */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">9. Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed">
                            All website content—including text, images, logos, and designs—is the property of
                            Michael Snell Bespoke. Unauthorized reproduction or distribution is strictly
                            prohibited.
                        </p>
                    </section>

                    {/* 10. PRIVACY */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">10. Privacy & Data Protection</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We respect your privacy. Personal data is used only to fulfill orders and improve our
                            services. For full details, please refer to our Privacy Policy.
                        </p>
                    </section>

                    {/* 11. LIABILITY */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">11. Limitation of Liability</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>We are not liable for inaccuracies in customer-provided measurements.</li>
                            <li>We are not responsible for delays caused by couriers or external factors.</li>
                            <li>
                                We are not liable for indirect, incidental, or consequential damages from product
                                use or delays.
                            </li>
                        </ul>
                    </section>

                    {/* 12. GOVERNING LAW */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">12. Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms are governed by the laws of [Insert Country]. All disputes shall be
                            resolved under the exclusive jurisdiction of courts in that region.
                        </p>
                    </section>

                    {/* 13. UPDATES */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">13. Updates to These Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We reserve the right to modify these Terms at any time. Continued use of our
                            services implies acceptance of updated Terms.
                        </p>
                    </section>

                    {/* 14. CONTACT */}
                    <section className="mb-10">
                        <h2 className="text-xl font-semibold mb-3">14. Contact Us</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-1">
                            <li>Email: [Insert Email]</li>
                            <li>Phone: [Insert Phone Number]</li>
                            <li>Address: Michael Snell Bespoke, [Insert Address]</li>
                        </ul>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
