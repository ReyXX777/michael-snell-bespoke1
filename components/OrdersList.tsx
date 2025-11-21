"use client";

import OrderCard from "./OrderCard";
import type { Order } from "./OrderCard"; // ⬅ Import the type

export default function OrdersList({ orders }: { orders: Order[] }) {
    return (
        <div className="p-6 bg-white rounded-lg shadow space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>

            {orders.length === 0 ? (
                <p className="text-gray-600">No orders available.</p>
            ) : (
                orders.map((order) => (
                    <OrderCard 
                        key={order.id}
                        order={order}
                    />
                ))
            )}
        </div>
    );
}
