"use client";

import { useState, useCallback } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Lock, Trash2, X } from "lucide-react";

/* ------------------------------------------------------
   TYPE DEFINITIONS
--------------------------------------------------------- */
export type ModalType =
    | "passwordSuccess"
    | "addressDeleted"
    | "updatePassword"
    | "setDefaultAddress"
    | "deleteAddress"
    | null;

/* ------------------------------------------------------
   CUSTOM HOOK
--------------------------------------------------------- */
export function useDashboardModals() {
    const [modalType, setModalType] = useState<ModalType>(null);
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback((type: ModalType) => {
        setModalType(type);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
        setModalType(null);
    }, []);

    return {
        modalType,
        isOpen,
        open,
        close,
    };
}

/* ------------------------------------------------------
   MAIN COMPONENT
--------------------------------------------------------- */
interface DashboardModalsProps {
    modalType: ModalType;
    isOpen: boolean;
    close: () => void;
    onConfirm?: (type: ModalType) => void;
}

export default function DashboardModals({
    modalType,
    isOpen,
    close,
    onConfirm,
}: DashboardModalsProps) {
    return (
        <>
            {/* ----------------------- NOTIFICATIONS ---------------------------- */}

            {/* Password Updated Notification */}
            {modalType === "passwordSuccess" && (
                <Alert className="fixed top-5 right-5 w-96 bg-white shadow-xl border z-50">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                            <CheckCircle className="text-green-600 mt-1" />
                            <div>
                                <AlertTitle>Password Updated</AlertTitle>
                                <AlertDescription>
                                    Your password has been changed successfully.
                                </AlertDescription>
                            </div>
                        </div>
                        <X className="cursor-pointer" onClick={close} />
                    </div>
                </Alert>
            )}

            {/* Address Deleted Notification */}
            {modalType === "addressDeleted" && (
                <Alert className="fixed top-5 right-5 w-80 bg-white shadow-xl border z-50">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-3">
                            <CheckCircle className="text-green-600 mt-1" />
                            <div>
                                <AlertTitle>Success</AlertTitle>
                                <AlertDescription>
                                    Address deleted successfully.
                                </AlertDescription>
                            </div>
                        </div>
                        <X className="cursor-pointer" onClick={close} />
                    </div>
                </Alert>
            )}

            {/* ----------------------- CONFIRMATION MODALS ---------------------------- */}

            <Dialog open={isOpen} onOpenChange={close}>
                <DialogContent>
                    <DialogHeader>
                        {modalType === "updatePassword" && (
                            <DialogTitle className="flex items-center gap-2">
                                <Lock className="w-5 h-5" />
                                Update Password
                            </DialogTitle>
                        )}

                        {modalType === "setDefaultAddress" && (
                            <DialogTitle>Set as Default Address</DialogTitle>
                        )}

                        {modalType === "deleteAddress" && (
                            <DialogTitle className="flex items-center gap-2">
                                <Trash2 className="w-5 h-5" />
                                Remove Saved Address
                            </DialogTitle>
                        )}
                    </DialogHeader>

                    {/* Body text section */}
                    <div className="py-4 text-sm text-gray-700">
                        {modalType === "updatePassword" &&
                            `Are you sure you want to change your password? You'll need to use the new password next time.`}

                        {modalType === "setDefaultAddress" &&
                            `Do you want to make this your default delivery address?`}

                        {modalType === "deleteAddress" &&
                            `Once removed, this address will no longer be available for deliveries.`}
                    </div>

                    <DialogFooter>
                        <Button variant="outline" onClick={close}>
                            Cancel
                        </Button>
                        <Button
                            className="bg-blue-600"
                            onClick={() => {
                                onConfirm?.(modalType);
                                close();
                            }}
                        >
                            {modalType === "updatePassword" && "Update Password"}
                            {modalType === "setDefaultAddress" && "Set as Default"}
                            {modalType === "deleteAddress" && "Remove Address"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
