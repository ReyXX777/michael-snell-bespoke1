"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="w-full min-h-screen">
            {/* Header */}
            <Header />

            {/* Full-size stacked images */}
            <div className="w-full">
                <Image
                    src="/assets/aboutus1.png"
                    alt="About Us Image 1"
                    width={1920}
                    height={1200}
                    className="w-full h-auto block p-0 m-0"
                />

                <Image
                    src="/assets/aboutus2.png"
                    alt="About Us Image 2"
                    width={1920}
                    height={1200}
                    className="w-full h-auto block p-0 m-0"
                />

                <Image
                    src="/assets/aboutus3.png"
                    alt="About Us Image 3"
                    width={1920}
                    height={1200}
                    className="w-full h-auto block p-0 m-0"
                />

                <Image
                    src="/assets/aboutus4.png"
                    alt="About Us Image 4"
                    width={1920}
                    height={1200}
                    className="w-full h-auto block p-0 m-0"
                />
                <Image
                    src="/assets/aboutus5.png"
                    alt="About Us Image 4"
                    width={1920}
                    height={1200}
                    className="w-full h-auto block p-0 m-0"
                />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
