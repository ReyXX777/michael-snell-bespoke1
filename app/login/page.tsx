"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    // States for manual login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    // Manual Login Handler
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (res?.error) {
            setError("Invalid email or password");
            return;
        }

        // redirect on success
        router.push("/account");
    };

    return (
        <div className="flex flex-col min-h-screen bg-neutral-100 text-gray-800">
            {/* ╔══════════════════════════════════════════╗ */}
            {/* 🎩 HEADER */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                    {/* LEFT — LOGO */}
                    <div className="flex items-center space-x-3">
                        <img
                            src="/logo.png"
                            alt="MYS Logo"
                            className="w-15 h-15"
                        />
                    </div>

                    {/* CENTER — MAIN NAVIGATION */}
                    <nav className="hidden md:flex space-x-10 text-sm font-medium mx-auto">
                        <a href="#" className="hover:text-gray-600">About</a>
                        <a href="#" className="hover:text-gray-600">Catalogue</a>
                        <a href="#" className="hover:text-gray-600">Contact Us</a>
                        <a
                            href="#"
                            className="hover:text-gray-600"
                        >
                            Schedule Appointment
                        </a>
                    </nav>

                    {/* RIGHT — LOGIN BUTTON */}
                    <div className="hidden md:flex">
                        <a
                            href="#"
                            className="text-black border border-gray-800 px-4 py-1 rounded-md hover:bg-gray-100"
                        >
                            Login
                        </a>
                    </div>

                </div>
            </header>


            {/* ╠══════════════════════════════════════════╣ */}
            {/* 🔑 MAIN LOGIN AREA */}
            <main
                className="flex-grow flex items-center justify-center p-6 bg-cover bg-center"
                style={{ backgroundImage: "url('/loginbg.webp')" }}
            >
                <div
                    className="
                        w-full max-w-md p-8 space-y-6
                        rounded-2xl 
                        bg-white/20
                        backdrop-blur-xl
                        border border-white/30
                        shadow-2xl
                        text-white
                    "
                >
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <p className="text-center text-sm text-gray-200">
                        Sign in to manage your orders, fittings, and profile.
                    </p>

                    {/* GOOGLE LOGIN */}
                    <button
                        onClick={() => signIn("google", {
                            callbackUrl: `${process.env.NEXTAUTH_URL}/shopping`
                        })}
                        className="w-full flex items-center justify-center space-x-2 border border-white/40 rounded-md py-2 hover:bg-white/10"
                    >
                        <img
                            src="/google.png"
                            alt="Google Logo"
                            className="w-5 h-5"
                        />
                        <span>Continue with Google</span>
                    </button>

                    <div className="flex items-center justify-center space-x-2">
                        <hr className="w-1/3 border-white/40" />
                        <span className="text-xs text-gray-200">OR</span>
                        <hr className="w-1/3 border-white/40" />
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <div className="text-red-300 text-center text-sm">
                            {error}
                        </div>
                    )}

                    {/* MANUAL LOGIN FORM */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-100">Email</label>
                            <input
                                type="email"
                                placeholder="Email Input Field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-white/30 bg-white/10 text-white placeholder-gray-200 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-white focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-100">Password</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password Input Field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-white/30 bg-white/10 text-white placeholder-gray-200 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-white focus:outline-none"
                                />

                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-3 cursor-pointer text-gray-200 select-none"
                                >
                                    {showPassword ? "🙈" : "👁"}
                                </span>
                            </div>

                            <div className="text-right mt-1">
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-gray-100 hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black/70 text-white py-2 rounded-md hover:bg-black/90"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-100">
                        Don’t have an account?{" "}
                        <Link href="/create-account" className="font-semibold underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main>


            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    {/* Column 1 */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="MYS Logo"
                            className="w-15 h-15 mb-16 mix-blend-lighten"
                        />
                        <p className="text-xs">
                            © 2025 Michael Snell Bespoke. All Rights Reserved.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/login/home" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/measurements" className="hover:underline">
                                    Measurement
                                </Link>
                            </li>
                            <li>
                                <Link href="/account" className="hover:underline">
                                    Accounts
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="hover:underline">
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="hover:underline">
                                    FAQ&apos;s
                                </Link>
                            </li>
                            <li>
                                <Link href="/create-account" className="hover:underline">
                                    Create Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/forgot-password" className="hover:underline">
                                    Forgot Password
                                </Link>
                            </li>
                            <Link href="/reset-password" className="hover:underline">
                                Reset Password
                            </Link>
                            <li>
                                <Link href="/account-detail" className="hover:underline">
                                    Account Detail 1
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders" className="hover:underline">
                                    orders
                                </Link>
                            </li>
                            <li>
                                <Link href="/orders/history" className="hover:underline">
                                    orders status
                                </Link>
                            </li>
                            <li>
                                <Link href="/address" className="hover:underline">
                                    address
                                </Link>
                            </li>

                            <li>
                                <Link href="/fabric" className="hover:underline">
                                    fabric
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutus" className="hover:underline">
                                    about-us
                                </Link>
                            </li>
                            <li>
                                <Link href="/schedule-appointment" className="hover:underline">
                                    schedule-appointment
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin-signin" className="hover:underline">
                                    admin signin
                                </Link>
                            </li>

                            <li><a href="#">About</a></li>
                            <li>
                                <Link href="/contact-us" className="hover:underline">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shopping" className="hover:underline">
                                    Shopping
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="font-semibold mb-2">Contact Us</h3>
                        <p>📞 +1 999 888-76-54</p>
                        <p>✉️ hello@logoipsum.com</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="#">ⓕ</a>
                            <a href="#">ⓘ</a>
                            <a href="#">ⓟ</a>
                            <a href="#">ⓓ</a>
                            <a href="#">ⓣ</a>
                        </div>
                    </div>

                    {/* Column 4 — Legal */}
                    <div>
                        <h3 className="font-semibold mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-right px-6 mt-4">
                    <a href="#" className="text-xs text-gray-400 hover:text-gray-200">↑ Back to top</a>
                </div>
            </footer>
        </div>
    );
}
