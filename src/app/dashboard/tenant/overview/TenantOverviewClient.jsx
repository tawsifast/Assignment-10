"use client";

import React from "react";
import { 
  Activity, 
  Briefcase, 
  Bookmark, 
  CreditCard, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  SealCheck
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Factory } from "lucide-react";

export default function TenantOverviewClient({ bookings = [], favourites = [], user }) {
  
  // ১. আপনার ডাটাবেজ অবজেক্ট স্ট্রাকচার অনুযায়ী রিয়েল-টাইম ক্যালকুলেশন
  const activeBookingsCount = bookings.filter(b => b.bookingStatus?.toLowerCase() === "accepted" || b.bookingStatus?.toLowerCase() === "active").length;
  const pendingBookingsCount = bookings.filter(b => b.bookingStatus?.toLowerCase() === "pending").length;
  const favouritesCount = favourites.length;

  // প্রাইমারি ডিসপ্লে এর জন্য লেটেস্ট বুকিং বা পেন্ডিং রেন্টাল খোঁজা
  const primaryLease = bookings[0]; 

  const metrics = [
    {
      label: "Total Bookings",
      value: bookings.length,
      icon: Briefcase,
      color: "text-cyan-400",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.15)]",
      borderColor: "border-cyan-500/20",
    },
    {
      label: "Saved Favourites",
      value: favouritesCount,
      icon: Bookmark,
      color: "text-purple-400",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      borderColor: "border-purple-500/20",
    },
    {
      label: "Pending Approvals",
      value: pendingBookingsCount,
      icon: Clock,
      color: "text-yellow-400",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.15)]",
      borderColor: "border-yellow-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 p-6 font-sans relative overflow-hidden">
      {/* Background Matrix Glows */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-8">
        
        {/* Top Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">System Operational</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{user?.name || "Tenant"}</span>
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-slate-500 block">NODE // {user?.email}</span>
            <span className="text-xs font-mono text-purple-400/80">SECURE CONNECT // ACTIVE</span>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className={`bg-[#12121a]/60 border ${metric.borderColor} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] ${metric.glow}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{metric.label}</p>
                  <h3 className="text-3xl font-black text-white tracking-tight">{metric.value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-white/[0.02] border border-white/5 ${metric.color}`}>
                  <metric.icon className="size-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard split content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Side: Active Matrix Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-transparent p-6 shadow-[0_0_20px_rgba(168,85,247,0.05)]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4 max-w-lg">
                <h2 className="text-lg font-bold text-white tracking-wide">Manage Your Matrix Shortlists</h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  You have locked {favouritesCount} properties into your watchlist cluster. Click below to review or initiate a new secure lease setup.
                </p>
                <Link href="/dashboard/tenant/favourites">
                <Button 
                  variant="none" 
                  className="inline-flex items-center gap-2 bg-[#161622] border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-400 hover:border-cyan-500/40 hover:bg-[#1f1f2e] transition-all"
                >
                  <span>Explore Favourites</span>
                  <ArrowRight className="size-3.5" />
                </Button>
                </Link>
              </div>
            </div>

            {/* Active Lease Info (Dynamic mapping based on latest booking object) */}
            <div className="bg-[#12121a]/40 border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Factory className="size-4 text-cyan-400" />
                  Recent Matrix Allocation
                </h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase ${
                  primaryLease?.bookingStatus?.toLowerCase() === "pending" 
                    ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" 
                    : primaryLease 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                    : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                }`}>
                  {primaryLease?.bookingStatus || "NO DATA SEGMENT FOUND"}
                </span>
              </div>
              
              {primaryLease ? (
                <div className="border border-white/5 bg-black/20 rounded-xl p-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Property Identifier:</span>
                    <span className="text-slate-200">{primaryLease.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Location Vector:</span>
                    <span className="text-slate-200">{primaryLease.location?.replace(/"/g, "")}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-400">Target Move-In:</span>
                    <span className="text-slate-200">{primaryLease.moveInDate || "Immediate"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Financial Weight:</span>
                    <span className="text-cyan-400 font-bold">${primaryLease.price?.toLocaleString()} USD</span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400 font-mono text-center py-4">No active core rental allocations found in database matrix.</p>
              )}
            </div>
          </div>

          {/* Right Side: Live Data Sync Dynamic Streams */}
          <div className="bg-[#12121a]/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="border-b border-white/5 pb-3 mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">System Event Stream</h3>
              </div>

              <div className="space-y-4">
                {favourites.length > 0 ? (
                  favourites.slice(0, 4).map((fav) => (
                    <div key={fav._id?.["$oid"] || fav._id} className="flex gap-3 group">
                      <div className="mt-0.5">
                        <SealCheck className="size-4 text-purple-400" />
                      </div>
                      <div className="space-y-0.5 flex-1">
                        <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {fav.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          Type: {fav.type || "Property"} Listed at ${fav.rentPrice?.toLocaleString()}/mo
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 font-mono py-2">No recent favorite clusters registered.</p>
                )}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/5 text-center">
              <Link 
                href="/dashboard/tenant/bookings" 
                className="text-[11px] font-bold text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider inline-flex items-center gap-1.5"
              >
                <span>View All System Bookings</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}