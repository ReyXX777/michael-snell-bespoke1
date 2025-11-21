"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type OrderStatus = "In Progress" | "Completed" | "Failed";

export default function OrdersPage() {
    const orders: {
        id: string;
        date: string;
        price: string;
        thumbnail: string;
        status: OrderStatus;
    }[] = [
        {
            id: "1241321431",
            date: "27 July 2023",
            price: "₹18,900",
            thumbnail: "/placeholder.png",
            status: "In Progress",
        },
        {
            id: "1241321432",
            date: "15 Aug 2023",
            price: "₹12,500",
            thumbnail: "/placeholder.png",
            status: "Completed",
        },
        {
            id: "1241321433",
            date: "02 Sep 2023",
            price: "₹9,999",
            thumbnail: "/placeholder.png",
            status: "Failed",
        },
    ];

    const statusColor: Record<OrderStatus, string> = {
        "In Progress": "bg-blue-100 text-blue-700",
        "Completed": "bg-green-100 text-green-700",
        "Failed": "bg-red-100 text-red-700",
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-semibold mb-6">Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <Card key={order.id} className="shadow-sm border rounded-xl">
                        <CardContent className="flex items-center gap-4 p-4">
                            
                            <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                                <Image
                                    src={order.thumbnail}
                                    width={80}
                                    height={80}
                                    alt="Order Thumbnail"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <p className="text-lg font-semibold">
                                    Order #{order.id}
                                </p>

                                <p className="text-sm text-gray-600">
                                    Ordered On: {order.date}
                                </p>

                                <p className="text-sm font-medium mt-1">
                                    {order.price}
                                </p>

                                <span
                                    className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${statusColor[order.status]}`}
                                >
                                    {order.status}
                                </span>
                            </div>

                            <div className="flex flex-col justify-center items-end gap-2">
                                <Button className="bg-blue-600">View Item</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
