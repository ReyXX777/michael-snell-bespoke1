"use client";

export default function MyDashboard() {
    return (
        <div className="w-full">
            <div
                className="w-full relative"
                style={{
                    paddingTop: `${(90 / 1440) * 100}%`, // maintains original aspect ratio
                    backgroundImage: "url('/assets/dashboard.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Optional overlay text */}
                {/* <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-white">
                    My Dashboard
                </h2> */}
            </div>
        </div>
    );
}
