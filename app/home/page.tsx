import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Michael</h1>
            <p className="text-lg mb-6">Please <Link href="/login" className="text-blue-600 underline">Login</Link> to continue.</p>
        </div>
    );
}
