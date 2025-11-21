"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Address {
    id: number;
    name: string;
    line1: string;
    line2: string;
    isDefault: boolean;
}

interface AddressCardProps {
    address: Address;
    isDefault?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
    onSetDefault?: () => void;
}

export default function AddressCard({
    address,
    isDefault = false,
    onEdit,
    onDelete,
    onSetDefault,
}: AddressCardProps) {
    return (
        <Card className="border shadow-sm rounded-xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <CardContent className="p-5">
                <h2 className="text-xl font-semibold mb-4">
                    {isDefault ? "Default Address" : "Other Address"}
                </h2>

                <p className="font-bold text-lg">{address.name}</p>
                <p>{address.line1}</p>
                <p>{address.line2}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                    <Button variant="outline" onClick={onEdit}>Edit</Button>
                    <Button variant="outline" onClick={onDelete}>Delete</Button>

                    {!isDefault && onSetDefault && (
                        <Button className="bg-gray-400 text-black" onClick={onSetDefault}>
                            Set as Default
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
