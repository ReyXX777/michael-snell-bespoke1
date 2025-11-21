"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

interface Fabric {
    id: number;
    name: string;
    type?: string;
    composition: string;
    price: string;
    image: string;
}

const fabrics: Fabric[] = [
    { id: 1, name: "Italian Merino Wool", type: "New", composition: "100% Wool", price: "€160/Mtr", image: "/assets/fabric1.png" },
    { id: 2, name: "Cashmere Wool Blend", type: "New", composition: "80% Wool - 20% Cashmere", price: "€95/Mtr", image: "/assets/fabric2.png" },
    { id: 3, name: "Tropical Poly-Wool", type: "New", composition: "60% Wool - 40% Polyester", price: "€95/Mtr", image: "/assets/fabric3.png" },
    { id: 4, name: "Italian Merino Wool", type: "New", composition: "100% Wool", price: "€160/Mtr", image: "/assets/fabric4.png" },
    { id: 5, name: "Cashmere Wool Blend", type: "New", composition: "80% Wool - 20% Cashmere", price: "€95/Mtr", image: "/assets/fabric5.png" },
    { id: 6, name: "Tropical Poly-Wool", type: "New", composition: "60% Wool - 40% Polyester", price: "€95/Mtr", image: "/assets/fabric6.png" },
];

export default function FabricPage() {
    const [search, setSearch] = useState("");
    const [material, setMaterial] = useState("");
    const [color, setColor] = useState("");
    const [pattern, setPattern] = useState("");
    const [price, setPrice] = useState("");

    const filteredFabrics = fabrics.filter(fabric =>
        fabric.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full min-h-screen">
            {/* Header */}
            <Header />

            {/* Full-width Hero Image */}
            <div className="w-full">
                <Image
                    src="/assets/fabricmain.png"
                    alt="Fabric Main"
                    width={1920}
                    height={600}
                    className="w-full h-auto block"
                />
            </div>

            {/* Filters and Fabric Grid */}
            <div className="container mx-auto px-6 py-6 -mt-0">
                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-4">
                    <input
                        type="text"
                        placeholder="Search for colors, fabric name..."
                        className="border rounded px-4 py-2 flex-1"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="border rounded px-4 py-2"
                        value={material}
                        onChange={(e) => setMaterial(e.target.value)}
                    >
                        <option value="">Material</option>
                        <option value="wool">Wool</option>
                        <option value="cashmere">Cashmere</option>
                        <option value="polyester">Polyester</option>
                    </select>
                    <select
                        className="border rounded px-4 py-2"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value="">Color</option>
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="gray">Gray</option>
                    </select>
                    <select
                        className="border rounded px-4 py-2"
                        value={pattern}
                        onChange={(e) => setPattern(e.target.value)}
                    >
                        <option value="">Pattern</option>
                        <option value="solid">Solid</option>
                        <option value="striped">Striped</option>
                        <option value="checked">Checked</option>
                    </select>
                    <select
                        className="border rounded px-4 py-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="">Price</option>
                        <option value="0-50">€0 - €50</option>
                        <option value="51-100">€51 - €100</option>
                        <option value="101-200">€101 - €200</option>
                    </select>
                </div>

                {/* Active Filters */}
                <div className="mb-2 text-gray-600">
                    Active Filters: Electronics Devices X | 5 Star Rating X
                </div>

                {/* Result Count */}
                <div className="mb-6 text-gray-600">
                    {filteredFabrics.length.toLocaleString()} Results found.
                </div>

                {/* Fabric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredFabrics.map((fabric) => (
                        <div key={fabric.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition relative">
                            <div className="relative">
                                <Image
                                    src={fabric.image}
                                    alt={fabric.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                {fabric.type && (
                                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                        {fabric.type}
                                    </span>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800">{fabric.name}</h3>
                                <p className="text-gray-600 text-sm">{fabric.composition}</p>
                                <p className="font-semibold mt-1">{fabric.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-width Lower Image */}
            <div className="w-full">
                <Image
                    src="/assets/fabriclower.jpg"
                    alt="Fabric Lower"
                    width={1920}
                    height={600}
                    className="w-full h-auto block"
                />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
