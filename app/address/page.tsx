"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AddressPage() {
    // Placeholder — very easy to swap with API data later
    const addresses = [
        {
            id: 1,
            name: "James Anderson",
            line1: "2745 Lakeview Drive",
            line2: "Chicago, IL 60616, USA",
            isDefault: true,
        },
        {
            id: 2,
            name: "Jane Doe",
            line1: "101 Corporate Lane",
            line2: "New York, NY 10001, USA",
            isDefault: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-semibold">Address</h1>
                <Button className="bg-blue-600">Add New Address</Button>
            </div>

            <div className="space-y-6">
                {/* Default Address Section */}
                <Card className="border shadow-sm rounded-xl">
                    <CardContent className="p-5">
                        <h2 className="text-xl font-semibold mb-4">
                            Default Address
                        </h2>

                        {addresses
                            .filter((a) => a.isDefault)
                            .map((address) => (
                                <div key={address.id}>
                                    <p className="font-bold text-lg">{address.name}</p>
                                    <p>{address.line1}</p>
                                    <p>{address.line2}</p>

                                    <div className="flex gap-3 mt-4">
                                        <Button variant="outline">Edit</Button>
                                        <Button variant="outline">Delete</Button>
                                    </div>
                                </div>
                            ))}
                    </CardContent>
                </Card>

                {/* Other Addresses */}
                <Card className="border shadow-sm rounded-xl">
                    <CardContent className="p-5">
                        <h2 className="text-xl font-semibold mb-4">
                            Other Address
                        </h2>

                        {addresses
                            .filter((a) => !a.isDefault)
                            .map((address) => (
                                <div key={address.id} className="mb-6">
                                    <p className="font-bold text-lg">{address.name}</p>
                                    <p>{address.line1}</p>
                                    <p className="mb-2">{address.line2}</p>

                                    <div className="flex flex-wrap gap-3">
                                        <Button variant="outline">Edit</Button>
                                        <Button variant="outline">Delete</Button>
                                        <Button className="bg-blue-600">
                                            Set as Default
                                        </Button>
                                    </div>
                                </div>
                            ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
