import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-100 text-gray-800 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white shadow-sm rounded-2xl sm:items-start">
        {/* Logo */}
        <Image
          className="dark:invert mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />

        {/* Welcome Text */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Welcome to <span className="text-black">Michael</span> Project
          </h1>
          <p className="max-w-md text-lg leading-8 text-gray-600">
            You can start by editing{" "}
            <code className="bg-gray-100 px-2 py-1 rounded-md">app/page.tsx</code>.<br />
            Or visit your{" "}
            <a
              href="/login"
              className="font-semibold text-blue-600 hover:underline"
            >
              Login Page
            </a>{" "}
            to see the styled interface.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-gray-800 md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-gray-300 px-5 transition-colors hover:bg-gray-50 md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
