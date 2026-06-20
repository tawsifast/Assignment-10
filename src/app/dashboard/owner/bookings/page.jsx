import { getOwnerBookingProperty } from '@/lib/actions/ownerBooking';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import { ShieldCheck } from "lucide-react";
import OwnerBookingTable from './OwnerBookingTable';


const OwnerBookingPage = async () => {
    const owner = await getUserSession();
    const propertyList = await getOwnerBookingProperty(owner?.email) || [];

    return (
        <div className="min-h-screen bg-[#030307] text-slate-100 p-6 sm:p-8 antialiased">
            <div className="max-w-6xl mx-auto space-y-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                    <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/10">
                        <ShieldCheck className="size-5" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Booking Requests</h1>
                        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-mono">
                            Manage coming property tenant reservation approvals
                        </p>
                    </div>
                </div>

                {/* Interactive Client Table Component */}
                <OwnerBookingTable initialBookings={propertyList} />

            </div>
        </div>
    );
};

export default OwnerBookingPage;