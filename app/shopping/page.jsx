"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ShoppingPage() {
    return (
        <div className="w-full">
            {/* Header */}
            <Header />

            {/* Full-size vertical images */}
            <div className="w-full">
                <Image
                    src="/assets/shop1.png"
                    alt="Shopping Image 1"
                    width={1200}
                    height={1800}
                    className="w-full h-auto block p-0 m-0"
                />

                <Image
                    src="/assets/shop2.png"
                    alt="Shopping Image 2"
                    width={1200}
                    height={1800}
                    className="w-full h-auto block p-0 m-0"
                />
                <Image
                    src="/assets/shop5.png"
                    alt="Shopping Image 5"
                    width={1200}
                    height={1800}
                    className="w-full h-auto block p-0 m-0"
                />

                <Image
                    src="/assets/shop3.png"
                    alt="Shopping Image 3"
                    width={1200}
                    height={1800}
                    className="w-full h-auto block p-0 m-0"
                />

                {/* shop4 with overlay text */}
                <div className="relative w-full">
                    <Image
                        src="/assets/shop4.jpg"
                        alt="Shopping Image 4"
                        width={1200}
                        height={1800}
                        className="w-full h-auto block p-0 m-0"
                    />

                    {/* Transparent Text Overlay */}
                    <div
                        className="
                            absolute top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            text-white px-8 py-6
                            max-w-[90%] text-center
                        "
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold leading-snug tracking-wide">
                            Tailored to you. Delivered to your door.
                            <br />
                            Guaranteed to impress.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
