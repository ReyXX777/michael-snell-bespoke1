"use client";

import Image from "next/image";
import { useState } from "react";

type MeasurementsState = Record<string, number | "">;

const MEASUREMENTS = [
    { key: "Jacket Length In Front", img: "Jacket Length In Front.png" },
    { key: "Jacket Length In Back", img: "Jacket Length In Back.png" },
    { key: "Coat Length", img: "Coat Length.png" },
    { key: "Vest Length", img: "Vest Length.png" },

    { key: "Chest", img: "Chest.png" },
    { key: "Stomach", img: "Stomach.png" },
    { key: "Waist", img: "Waist.png" },
    { key: "Hips", img: "Hips.png" },

    { key: "Full Shoulder", img: "Full Shoulder.png" },
    { key: "Half Shoulder", img: "Half Shoulder.png" },
    { key: "Sleeves", img: "Sleeves.png" },
    { key: "Front", img: "Front.png" },

    { key: "Back", img: "Back.png" },
    { key: "Trousers Waist", img: "Trousers Waist.png" },
    { key: "Trousers Inseam", img: "Trousers Inseam.png" },
    { key: "Trousers Outseam", img: "Trousers Outseam.png" },

    { key: "Trousers Required Cuff", img: "Trousers Required Cuff.png" },
    { key: "Thighs", img: "Thighs.png" },
    { key: "Neck", img: "Neck.png" },
];

const FIGURE_OPTIONS = [
    {
        key: "Normal Shoulder / Normal Neck",
        value: "normal_shoulder_normal_neck",
        img: "Normal Shoulder Normal Neck.png",
    },
    {
        key: "Sloping Shoulder / Long Neck",
        value: "sloping_long_neck",
        img: "Sloping Shoulder Long Neck.png",
    },
    {
        key: "Square Shoulder / Short Neck",
        value: "square_short_neck",
        img: "Square Shoulder Short Neck.png",
    },
    {
        key: "Normal Posture",
        value: "normal_posture",
        img: "Normal Posture.png",
    },
];

const POSTURE_OPTIONS = [
    { key: "Erect", value: "erect", img: "Erect.png" },
    { key: "Forward Stoop", value: "forward_stoop", img: "Forward Stoop.png" },
    { key: "Forward Stomach", value: "forward_stomach", img: "Forward Stomach.png" },
    { key: "Stout", value: "stout", img: "Stout.png" },
];

export default function MeasurementsComponent() {
    const defaultMeasurements: MeasurementsState = {};
    MEASUREMENTS.forEach((m) => (defaultMeasurements[m.key] = 70));

    const [unit, setUnit] = useState<"cm" | "inch">("cm");
    const [measurements, setMeasurements] = useState(defaultMeasurements);
    const [figure, setFigure] = useState<string | null>(null);
    const [posture, setPosture] = useState<string | null>(null);

    const [activities, setActivities] = useState<Record<string, boolean>>({
        Gym: false,
        Swimming: false,
        Cycling: false,
        Yoga: false,
        Running: false,
    });

    const [otherActivity, setOtherActivity] = useState("");
    const [size, setSize] = useState("S (Small)");
    const [height, setHeight] = useState("180 cm (5'11\")");
    const [weight, setWeight] = useState("70 kg");
    const [race, setRace] = useState("South Asian");
    const [raceOther, setRaceOther] = useState("");
    const [uploads, setUploads] = useState<File[]>([]);

    const [notes, setNotes] = useState("");

    const [fitPreferences, setFitPreferences] = useState<Record<string, boolean>>({
        "Very exactly": false,
        "Very loosely": false,
        Comfortable: false,
        Other: false,
    });

    const [clothingComfort, setClothingComfort] = useState<Record<string, boolean>>({
        Snug: false,
        Comfortable: false,
        "Very Comfortable": false,
        "Very Loose": false,
        "Very Baggy": false,
        Other: false,
    });

    const [trouserWear, setTrouserWear] = useState<Record<string, boolean>>({
        "Normal waist": false,
        "Higher in the waist": false,
        "Lower in the back": false,
        "Lower on the waist": false,
    });

    const [previews, setPreviews] = useState({
        1: null as string | null,
        2: null as string | null,
        3: null as string | null,
    });

    function setMeasurementValue(key: string, value: string) {
        const parsed = value === "" ? "" : Number(value);
        setMeasurements((prev) => ({ ...prev, [key]: parsed }));
    }

    function toggleActivity(name: string) {
        setActivities((prev) => ({ ...prev, [name]: !prev[name] }));
    }

    function handleFiles(e: React.ChangeEvent<HTMLInputElement>, index: number) {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];

        setUploads((prev) => {
            const updated = [...prev];
            updated[index - 1] = file;
            return updated;
        });

        const previewUrl = URL.createObjectURL(file);

        setPreviews((prev) => ({
            ...prev,
            [index]: previewUrl,
        }));
    }

    return (
        <div className="min-h-screen bg-neutral-50 text-gray-900 p-6">
            <div className="max-w-7xl mx-auto bg-white shadow rounded-lg overflow-hidden">
                {/* ---------------- HEADER ---------------- */}
                <div className="px-6 py-5 border-b">
                    <h1 className="text-2xl font-semibold">Measurements</h1>
                </div>

                {/* ---------------- Measurement Settings ---------------- */}
                <div className="px-6 py-4 border-b">
                    <h2 className="font-medium mb-2 bg-gray-200 px-3 py-2 rounded w-[90%]">
                        Measurement Settings
                    </h2>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <label className="text-sm">Select Measurement Unit:</label>

                            <label className={`px-3 py-1 rounded-full cursor-pointer ${unit === "cm" ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}>
                                <input type="radio" checked={unit === "cm"} onChange={() => setUnit("cm")} className="hidden" />
                                Cm
                            </label>

                            <label className={`px-3 py-1 rounded-full cursor-pointer ${unit === "inch" ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}>
                                <input type="radio" checked={unit === "inch"} onChange={() => setUnit("inch")} className="hidden" />
                                Inch
                            </label>
                        </div>
                    </div>
                </div>

                {/* ---------------- Measurement GRID ---------------- */}
                <div className="px-6 py-6 border-b">
                    <h2 className="font-medium mb-4 bg-gray-200 px-3 py-2 rounded w-[90%]">
                        General Measurement
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {MEASUREMENTS.map((m) => {
                            const imgPath = `/assets/${encodeURIComponent(m.img)}`;
                            return (
                                <div key={m.key} className="bg-white rounded-lg border p-4 shadow-sm">
                                    <div className="text-sm font-semibold mb-2">{m.key}</div>

                                    <div className="w-full h-36 relative rounded-md overflow-hidden border bg-gray-50">
                                        <img src={imgPath} alt={m.key} className="object-contain w-full h-full" />
                                    </div>

                                    <div className="mt-3">
                                        <label className="text-xs text-gray-600 block mb-1">Value ({unit})</label>
                                        <input
                                            value={measurements[m.key] === "" ? "" : String(measurements[m.key])}
                                            onChange={(e) => setMeasurementValue(m.key, e.target.value)}
                                            inputMode="numeric"
                                            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ---------------- FIGURE & POSTURE ---------------- */}
                <div className="px-6 py-6 border-b">
                    <h2 className="font-medium mb-4">Figure and Posture</h2>

                    <h3 className="font-semibold text-lg mb-3">Figure Type</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {FIGURE_OPTIONS.map((f) => (
                            <label key={f.value} className="bg-white rounded-lg border p-4 shadow-sm cursor-pointer">
                                <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                                    <input type="radio" name="figure" checked={figure === f.value} onChange={() => setFigure(f.value)} />
                                    {f.key}
                                </div>

                                <div className="w-full h-40 border rounded-md overflow-hidden bg-gray-50">
                                    <img src={`/assets/${encodeURIComponent(f.img)}`} alt={f.key} className="object-contain w-full h-full" />
                                </div>
                            </label>
                        ))}
                    </div>

                    <h3 className="font-semibold text-lg mb-3">Posture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {POSTURE_OPTIONS.map((p) => (
                            <label key={p.value} className="bg-white rounded-lg border p-4 shadow-sm cursor-pointer">
                                <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                                    <input type="radio" name="posture" checked={posture === p.value} onChange={() => setPosture(p.value)} />
                                    {p.key}
                                </div>

                                <div className="w-full h-40 border rounded-md overflow-hidden bg-gray-50">
                                    <img src={`/assets/${encodeURIComponent(p.img)}`} alt={p.key} className="object-contain w-full h-full" />
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* ---------------- Additional Details ---------------- */}
                <div className="px-6 py-6 border-b">
                    <h2 className="font-medium mb-4 bg-gray-200 px-3 py-2 rounded w-[90%]">
                        Additional Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="mb-3">
                                <div className="font-semibold mb-2">
                                    Do you participate in any of these physical activities:
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {["Gym", "Swimming", "Cycling", "Yoga", "Running"].map((a) => (
                                        <label key={a} className="flex items-center gap-2">
                                            <input type="checkbox" checked={activities[a]} onChange={() => toggleActivity(a)} />
                                            <span className="text-sm">{a}</span>
                                        </label>
                                    ))}

                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" checked={!!otherActivity} onChange={() => setOtherActivity((v) => (v ? "" : ""))} />
                                        <input
                                            placeholder="If other, specify"
                                            value={otherActivity}
                                            onChange={(e) => setOtherActivity(e.target.value)}
                                            className="ml-2 border rounded px-2 py-1 text-sm"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3 grid grid-cols-1 gap-2">
                                <label className="text-sm">What size do you wear:</label>
                                <select value={size} onChange={(e) => setSize(e.target.value)} className="w-64 border rounded px-3 py-2">
                                    <option>S (Small)</option>
                                    <option>M (Medium)</option>
                                    <option>L (Large)</option>
                                    <option>XL (X-Large)</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 gap-2">
                                <label className="text-sm">What is your height:</label>
                                <input value={height} onChange={(e) => setHeight(e.target.value)} className="w-64 border rounded px-3 py-2" />

                                <label className="text-sm mt-2">Weight:</label>
                                <input value={weight} onChange={(e) => setWeight(e.target.value)} className="w-64 border rounded px-3 py-2" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-3">
                            <label className="text-sm font-semibold">Race</label>
                            <select value={race} onChange={(e) => setRace(e.target.value)} className="w-64 border rounded px-3 py-2">
                                <option>South Asian</option>
                                <option>East Asian</option>
                                <option>White / Caucasian</option>
                                <option>African / Black</option>
                                <option>Other</option>
                            </select>

                            {race === "Other" && (
                                <input
                                    value={raceOther}
                                    onChange={(e) => setRaceOther(e.target.value)}
                                    className="mt-2 w-64 border rounded px-3 py-2"
                                    placeholder="If Other, specify"
                                />
                            )}
                        </div>

                        {/* Fit Preferences */}
                        <div className="mb-3">
                            <label className="text-sm font-semibold bg-gray-200 px-3 py-2 rounded w-[90%] block mb-3">
                                Fit and Style Preferences
                            </label>

                            <div className="grid gap-2 mt-2">
                                {Object.keys(fitPreferences).map((k) => (
                                    <label key={k} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={fitPreferences[k]}
                                            onChange={() => setFitPreferences((prev) => ({ ...prev, [k]: !prev[k] }))}
                                        />
                                        <span className="text-sm">{k}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Clothes Comfort */}
                        <div className="mb-3">
                            <label className="text-sm font-semibold">How do you like your clothes to be:</label>

                            <div className="grid gap-2 mt-2">
                                {Object.keys(clothingComfort).map((k) => (
                                    <label key={k} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={clothingComfort[k]}
                                            onChange={() => setClothingComfort((prev) => ({ ...prev, [k]: !prev[k] }))}
                                        />
                                        <span className="text-sm">{k}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Trousers */}
                        <div>
                            <label className="text-sm font-semibold">How do you wear your trousers:</label>

                            <div className="grid gap-2 mt-2">
                                {Object.keys(trouserWear).map((k) => (
                                    <label key={k} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={trouserWear[k]}
                                            onChange={() => setTrouserWear((prev) => ({ ...prev, [k]: !prev[k] }))}
                                        />
                                        <span className="text-sm">{k}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------- Reference & Notes ---------------- */}
                <div className="px-6 py-6 border-b">
                    <h2 className="font-medium mb-4 bg-gray-200 px-3 py-2 rounded w-[90%]">
                        Reference and Final Notes
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {[1, 2, 3].map((i) => (
                            <label key={i} className="flex flex-col items-center gap-2 p-3 border rounded cursor-pointer">
                                <div className="w-full h-40 bg-gray-50 flex items-center justify-center overflow-hidden rounded">
                                    {previews[i as 1 | 2 | 3] ? (
                                        <img src={previews[i as 1 | 2 | 3]!} alt={`Preview ${i}`} />
                                    ) : (
                                        <span>Image {i}</span>
                                    )}

                                </div>

                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png"
                                    onChange={(e) => handleFiles(e, i)}
                                    className="text-sm"
                                />
                            </label>
                        ))}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm">
                            If measurements were taken from another garment, mention which:
                        </label>
                        <input className="w-full border rounded px-3 py-2" placeholder="e.g. old coat - chest/waist" />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm">Special instructions:</label>
                        <textarea
                            rows={4}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="w-full border rounded px-3 py-2"
                            placeholder="Prefer slightly loose sleeves..."
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                        <small className="text-xs text-gray-500">
                            Only support .doc, .jpg and .zip file.
                        </small>

                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-gray-200 rounded">Reset</button>
                            <button className="px-4 py-2 bg-black text-white rounded">
                                Save Measurements
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 text-center text-xs text-gray-500">
                    © 2025 Michael Snell Bespoke
                </div>
            </div>
        </div>
    );
}
