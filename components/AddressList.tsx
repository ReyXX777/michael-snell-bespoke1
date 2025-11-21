"use client";

import AddressCard, { Address } from "./AddressCard";

interface AddressListProps {
    addresses: Address[];
}

export default function AddressList({ addresses }: AddressListProps) {
    const defaultAddress = addresses.filter((a) => a.isDefault);
    const otherAddresses = addresses.filter((a) => !a.isDefault);

    return (
        <div className="space-y-6">
            {defaultAddress.map((a) => (
                <AddressCard key={a.id} address={a} isDefault />
            ))}

            {otherAddresses.map((a) => (
                <AddressCard key={a.id} address={a} />
            ))}
        </div>
    );
}
