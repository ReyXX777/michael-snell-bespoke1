"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Order {
    id: number | string;
    date: string;
    price: string;
    status: "In Progress" | "Completed" | "Failed";
    thumbnail: string;
}

export default function OrderCard({ order }: { order: Order }) {
    const statusColor = {
        "In Progress": "bg-blue-100 text-blue-700",
        "Completed": "bg-green-100 text-green-700",
        "Failed": "bg-red-100 text-red-700",
    };

    return (
        <Card className="shadow-sm border rounded-xl">
            <CardContent className="flex items-center gap-4 p-4">

                {/* Thumbnail */}
                <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                        src={`/assets/${order.thumbnail}`}
                        width={80}
                        height={80}
                        alt="Order Thumbnail"
                        className="object-cover"
                    />
                </div>

                {/* Order Info */}
                <div className="flex-1">
                    <p className="text-lg font-semibold">Order #{order.id}</p>

                    <p className="text-sm text-gray-600">
                        Ordered On: {order.date}
                    </p>

                    <p className="text-sm font-medium mt-1">
                        {order.price}
                    </p>

                    {/* Status Badge */}
                    <span
                        className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full 
                        ${statusColor[order.status]}`}
                    >
                        {order.status}
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col justify-center items-end gap-2">
                    <Button className="bg-blue-600">View Item</Button>
                </div>

            </CardContent>
        </Card>
    );
}
