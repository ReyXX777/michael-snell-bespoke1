"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

// Imported components
import Header from "@/components/Header";
import MyDashboard from "@/components/MyDashboard";
import Footer from "@/components/Footer";

export default function CreateAccountPage() {
    const router = useRouter();

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    async function handleRegister() {
        setError("");

        if (!fullname || !email || !password || !confirmPassword) {
            return setError("All fields are required.");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match.");
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setLoading(false);
                return setError(data.message || "Something went wrong.");
            }

            router.push("/login");
        } catch (err) {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    }

    return (
        <>
            {/* HEADER (Sticky) */}
            <div className="w-full sticky top-0 z-50 bg-white shadow">
                <Header />
            </div>

            {/* ---- DASHBOARD RIBBON ---- */}
            <div className="w-full fixed top-16 left-0 z-40 bg-[#0F172A]">
                <p
                    className="absolute z-20 pointer-events-none flex items-center justify-center font-semibold text-white"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "36px",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -60%)",
                    }}
                >
                    Create Your Account
                </p>

                <p
                    className="absolute z-20 pointer-events-none text-white"
                    style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: "18px",
                        top: "53%",
                        left: "50%",
                        transform: "translate(-50%, -5%)",
                    }}
                >
                    Get started with custom suits tailored to your style
                </p>

                <div className="relative z-10">
                    <MyDashboard />
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="min-h-screen flex flex-col items-center bg-gray-50 px-6 py-10 pt-32">
                <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">

                    {/* Google Login */}
                    <button className="w-full border rounded-md py-3 text-sm font-medium flex items-center justify-center gap-2">
                        <img src="/google.png" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    {/* Separator */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <p className="text-red-600 text-sm mb-4">{error}</p>
                    )}

                    {/* Full Name */}
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="w-full mt-1 mb-4 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
                    />

                    {/* Email */}
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-1 mb-4 border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
                    />

                    {/* Password */}
                    <label className="text-sm font-medium text-gray-700">Create Password</label>
                    <div className="relative mt-1 mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                    <div className="relative mt-1 mb-4">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-2.5 text-gray-500"
                        >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    {/* Terms */}
                    <p className="text-xs text-gray-500 mt-2 mb-6">
                        By Clicking <span className="font-semibold">Register Now</span> You Agree To  
                        <span className="underline mx-1">Terms & Conditions</span> 
                        And 
                        <span className="underline ml-1">Privacy Policy</span>.
                    </p>

                    {/* Register Button */}
                    <button
                        onClick={handleRegister}
                        disabled={loading}
                        className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                    >
                        {loading ? "Creating Account..." : "Register Now"}
                    </button>
                </div>

                {/* Already have account */}
                <p className="text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-black font-medium underline">
                        Login
                    </Link>
                </p>
            </div>

            {/* FOOTER */}
            <Footer />
        </>
    );
}
