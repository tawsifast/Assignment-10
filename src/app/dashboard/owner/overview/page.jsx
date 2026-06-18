import React from 'react';
import { getUserSession } from '@/lib/core/session';
import { DollarSign, Home, Calendar, BarChart3 } from 'lucide-react';
import OwnerEarningsChart from './OwnerEarningsChart';
import { getPropertyByOwnerId } from '@/lib/api/property';
// Import the newly created client chart component


const fetchOwnerAnalyticsData = async () => {
    const user = await getUserSession();
    const property = await getPropertyByOwnerId(user.id)
    const totalEarnings = 14250.00; 
    const totalProperties = property.length; 
    const totalBookings = 42; 

    const monthlyEarningsData = [
        { month: 'Jul 25', earnings: 850 },
        { month: 'Aug 25', earnings: 920 },
        { month: 'Sep 25', earnings: 1100 },
        { month: 'Oct 25', earnings: 1050 },
        { month: 'Nov 25', earnings: 1300 },
        { month: 'Dec 25', earnings: 1650 },
        { month: 'Jan 26', earnings: 1200 },
        { month: 'Feb 26', earnings: 1400 },
        { month: 'Mar 26', earnings: 1350 },
        { month: 'Apr 26', earnings: 1500 },
        { month: 'May 26', earnings: 1750 },
        { month: 'Jun 26', earnings: 1900 },
    ];

    return { totalEarnings, totalProperties, totalBookings, monthlyEarningsData };
};

const OwnerDashboardHome = async () => {
    const user = await getUserSession();
    
    const { 
        totalEarnings, 
        totalProperties, 
        totalBookings, 
        monthlyEarningsData 
    } = await fetchOwnerAnalyticsData(user?.id);

    return (
        <div className="min-h-screen bg-[#030307] text-slate-100 p-6 sm:p-8 antialiased">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* Header Metadata Section */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        Dashboard Overview
                    </h1>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <BarChart3 className="size-3.5" /> Performance Analytics & Management Summary
                    </p>
                </div>

                {/* 3 Summary Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* Total Earnings Card */}
                    <div className="bg-[#09090f] border border-white/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
                        <div className="space-y-1">
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Total Earnings</span>
                            <span className="text-2xl font-bold text-white block font-mono">
                                ${totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                            </span>
                        </div>
                        <div className="p-3.5 bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 rounded-xl">
                            <DollarSign className="size-6" />
                        </div>
                    </div>

                    {/* Total Properties Card */}
                    <div className="bg-[#09090f] border border-white/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
                        <div className="space-y-1">
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Total Properties</span>
                            <span className="text-2xl font-bold text-white block font-mono">
                                {totalProperties}
                            </span>
                        </div>
                        <div className="p-3.5 bg-blue-500/5 text-blue-400 border border-blue-500/10 rounded-xl">
                            <Home className="size-6" />
                        </div>
                    </div>

                    {/* Total Bookings Card */}
                    <div className="bg-[#09090f] border border-white/5 p-6 rounded-xl flex items-center justify-between shadow-sm">
                        <div className="space-y-1">
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Total Bookings</span>
                            <span className="text-2xl font-bold text-white block font-mono">
                                {totalBookings}
                            </span>
                        </div>
                        <div className="p-3.5 bg-amber-500/5 text-amber-400 border border-amber-500/10 rounded-xl">
                            <Calendar className="size-6" />
                        </div>
                    </div>

                </div>

                {/* Safely Render Client Component Chart here */}
                <OwnerEarningsChart data={monthlyEarningsData}/>

            </div>
        </div>
    );
};

export default OwnerDashboardHome;