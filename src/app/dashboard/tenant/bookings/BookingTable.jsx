"use client";

import React from 'react';
import { Table } from "@heroui/react";
import { Calendar, DollarSign, MapPin, ShieldAlert, Clock } from "lucide-react";

const BookingTable = ({ initialBookings }) => {
  const bookings = Array.isArray(initialBookings) ? initialBookings : [initialBookings];

  return (
    <div className="bg-[#09090f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      {bookings.length === 0 || !bookings[0] ? (
        <div className="text-center py-16">
          <p className="text-sm text-slate-500 font-mono">No bookings found.</p>
        </div>
      ) : (
        <Table aria-label="Booking Information Table">
          <Table.ScrollContainer>
            <Table.Content className="min-w-[900px]">
              <Table.Header>
                <Table.Column isRowHeader className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">Property Title</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Location</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Move In Date</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Price</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Payment Status</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">Booking Status</Table.Column>
              </Table.Header>
              <Table.Body>
                {bookings.map((item) => (
                  <Table.Row key={item._id?.["$oid"] || item._id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                    
                    {/* Title */}
                    <Table.Cell className="py-4 px-6">
                      <div>
                        <span className="font-semibold text-slate-200 tracking-wide block">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">
                          User: {item.userName} ({item.userEmail})
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Location */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm text-slate-300 flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-slate-500 shrink-0" />
                        {item.location}
                      </span>
                    </Table.Cell>

                    {/* Move In Date */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm text-slate-300 font-mono flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-slate-500 shrink-0" />
                        {item.moveInDate}
                      </span>
                    </Table.Cell>

                    {/* Price */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm font-bold font-mono text-emerald-400 flex items-center">
                        <DollarSign className="size-3.5 shrink-0" />
                        {item.price}
                      </span>
                    </Table.Cell>

                    {/* Payment Status */}
                    <Table.Cell className="py-4 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold font-mono border ${
                        item.paymentStatus === 'paid' 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                      }`}>
                        <ShieldAlert className="size-3" />
                        {item.paymentStatus}
                      </span>
                    </Table.Cell>

                    {/* Booking Status */}
                    <Table.Cell className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border ${
                        item.bookingStatus === 'Confirmed'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        <Clock className="size-3" />
                        {item.bookingStatus}
                      </span>
                    </Table.Cell>

                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
};

export default BookingTable;