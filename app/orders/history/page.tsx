"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function OrderStatusPage() {
    // -------------------------------------------
    // API-CONSUMPTION READY (JUST REPLACE THIS)
    // -------------------------------------------
    const order = {
        id: "1241321431",
        product: "Custom 3-Piece Suit (Navy Blue)",
        qty: 1,
        status: "In Transit",
        statusPercent: 60,
        lastUpdated: "8:55:18 PM",

        // Payment Details
        advancePaid: "$12,220",
        outstanding: "$320",
        shipping: "$61.99",
        tax: "Free",
        total: "$357.99 USD",

        // Transaction Details
        transactionDate: "2025-10-24 20:15",
        paymentMethod: "Credit Card",
        card: "VISA **** 4242",
        transactionStatus: "Success",

        // Address
        billingAddress:
            "James Anderson, 2745 Lakeview Drive, Chicago, IL, 60616, USA",
        shippingAddress:
            "James Anderson, 2745 Lakeview Drive, Chicago, IL, 60616, USA",
    };

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">Orders</h1>
                <Button variant="destructive">Cancel Order</Button>
            </div>

            {/* ORDER ID */}
            <h2 className="text-xl font-medium mb-4">
                Order #{order.id}
            </h2>

            {/* ORDER DETAILS */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Order Details</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* STATUS BLOCK */}
                        <Card className="border shadow-sm">
                            <CardHeader>
                                <CardTitle>Order Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">{order.product}</p>
                                <p className="text-sm text-gray-600">
                                    Qty: {order.qty}
                                </p>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <p className="text-sm mb-1">{order.status}</p>
                                    <Progress value={order.statusPercent} />
                                </div>

                                <p className="text-xs text-gray-500 mt-3">
                                    Last updated: {order.lastUpdated}
                                </p>
                            </CardContent>
                        </Card>

                        {/* PAYMENT BLOCK */}
                        <Card className="border shadow-sm">
                            <CardHeader>
                                <CardTitle>Payment Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Advance Paid: {order.advancePaid}</p>
                                <p>Outstanding Balance: {order.outstanding}</p>
                                <p>Shipping: {order.shipping}</p>
                                <p>Tax: {order.tax}</p>
                                <p className="font-semibold mt-2">
                                    Total: {order.total}
                                </p>
                            </CardContent>
                        </Card>

                        {/* TRANSACTION BLOCK */}
                        <Card className="border shadow-sm">
                            <CardHeader>
                                <CardTitle>Transaction Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Transaction Date: {order.transactionDate}</p>
                                <p>Payment Method: {order.paymentMethod}</p>
                                <p>Card Details: {order.card}</p>
                                <p>Status: {order.transactionStatus}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* ADDRESS BLOCKS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {/* Billing */}
                        <Card className="border shadow-sm">
                            <CardHeader>
                                <CardTitle>Billing Address</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{order.billingAddress}</p>
                            </CardContent>
                        </Card>

                        {/* Shipping */}
                        <Card className="border shadow-sm">
                            <CardHeader>
                                <CardTitle>Shipping Address</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{order.shippingAddress}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <p className="text-xs text-gray-500 mt-6">
                        Last updated: {order.lastUpdated}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
