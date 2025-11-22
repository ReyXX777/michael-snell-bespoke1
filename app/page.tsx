import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 text-gray-800 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white shadow-sm rounded-2xl sm:items-start">

        {/* Logo */}
        <Image
          className="dark:invert mb-6"
          src="/logo.png"
          alt="Michael Logo"
          width={120}
          height={60}
          priority
        />

        {/* Welcome Text */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Welcome to <span className="text-black">Michael</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-gray-600">
            Start exploring the platform and access your account
            using our secure login system.
            <br />
            Visit your{" "}
            <a
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login Page
            </a>{" "}
            to continue.
          </p>
        </div>

        {/* Call to action */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-gray-800 md:w-[158px]"
            href="/login"
          >
            Go to Login
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-gray-300 px-5 transition-colors hover:bg-gray-50 md:w-[158px]"
            href="/create-account"
          >
            Create Account
          </a>
        </div>
      </main>
    </div>
  );
}
