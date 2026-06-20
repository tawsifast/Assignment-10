"use client";

import React, { useState } from "react";
import { Table } from "@heroui/react";
import { 
  User, 
  Building2, 
  Calendar, 
  DollarSign, 
  ShieldAlert, 
  Mail, 
  Smartphone 
} from "lucide-react";

export default function AdminBookingTable({ initialBookings }) {
  const [bookings] = useState(initialBookings || []);

  if (bookings.length === 0) {
    return (
      <div className="bg-[#09090f] border border-white/5 rounded-xl py-16 text-center">
        <p className="text-sm text-slate-500 font-mono">
          No active system booking logs found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#09090f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      <Table aria-label="Global System Booking Operations Overview">
        <Table.ScrollContainer>
          <Table.Content aria-label="Administrative System Booking List" className="min-w-[1000px]">
            <Table.Header>
              <Table.Column isRowHeader className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">
                Tenant Info
              </Table.Column>
              <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                Property Context
              </Table.Column>
              <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                Timeline Metrics
              </Table.Column>
              <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                Financials
              </Table.Column>
              <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                Escrow Status
              </Table.Column>
              <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 text-right border-b border-white/5">
                Node Status
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {bookings.map((item) => {
                const bookingId = item._id?.$oid || item._id || Math.random().toString();
                return (
                  <Table.Row key={bookingId} className="border-b border-white/2 hover:bg-white/1 transition-colors">
                    
                    {/* Tenant Profile Context */}
                    <Table.Cell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-slate-400">
                          <User className="size-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-semibold text-slate-200 block text-sm">
                            {item.userName || "Unknown Tenant"}
                          </span>
                          <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                            <Mail className="size-3 text-slate-600" /> {item.userEmail}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                            <Smartphone className="size-3 text-slate-600" /> {item.contactNumber}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Property Destination Context */}
                    <Table.Cell className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-slate-400">
                          <Building2 className="size-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-medium text-slate-200 block text-sm line-clamp-1">
                            {item.title}
                          </span>
                          <span className="text-xs text-slate-500 block">
                            {item.location}
                          </span>
                          <span className="text-[10px] text-slate-600 block font-mono">
                            Owner: {item.ownerEmail}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Timeline Metrics */}
                    <Table.Cell className="py-4 px-4">
                      <div className="space-y-1">
                        <span className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-slate-500" />
                          In: {item.moveInDate}
                        </span>
                        <span className="text-[10px] text-slate-600 font-mono block">
                          Logged: {item.bookedAt ? new Date(item.bookedAt).toLocaleDateString() : 'N/A'}
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Financial Layout */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm font-bold font-mono text-cyan-400 flex items-center">
                        <DollarSign className="size-3.5 shrink-0" />
                        {item.price?.toLocaleString()}
                      </span>
                    </Table.Cell>

                    {/* Escrow Payment Status Badge */}
                    <Table.Cell className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold font-mono border uppercase tracking-wider ${
                        item.paymentStatus === "paid"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                      }`}>
                        {item.paymentStatus || "unpaid"}
                      </span>
                    </Table.Cell>

                    {/* Booking Lifecycle State */}
                    <Table.Cell className="py-4 px-6 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                        item.bookingStatus === "Approved"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : item.bookingStatus === "Rejected"
                          ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        <ShieldAlert className="size-3.5" />
                        {item.bookingStatus || "Pending"}
                      </span>
                    </Table.Cell>

                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}