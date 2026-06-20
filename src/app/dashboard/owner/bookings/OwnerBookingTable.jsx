"use client";

import React, { useState } from "react";
import { Table, Button } from "@heroui/react";
import {
  Check,
  X,
  User,
  Building2,
  Calendar,
  DollarSign,
  Clock,
} from "lucide-react";
import toast from "react-hot-toast";
import { updateBooking } from "@/lib/actions/ownerBooking";


const OwnerBookingTable = ({ initialBookings }) => {
  const [bookings, setBookmarks] = useState(initialBookings || []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await updateBooking(id, { bookingStatus: newStatus });
      console.log(res,"res");

      if (!res.modifiedCount) throw new Error("Failed to update status");

      // Update state instantly
      setBookmarks((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, bookingStatus: newStatus } : item,
        ),
      );

      toast.success(`Booking request ${newStatus.toLowerCase()} successfully!`);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-[#09090f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      {bookings.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sm text-slate-500 font-mono">
            No booking requests available.
          </p>
        </div>
      ) : (
        <Table aria-label="Owner Bookings Matrix Table">
          <Table.ScrollContainer>
            <Table.Content aria-label="Owner Bookings List Data" className="min-w-225">
              <Table.Header>
                <Table.Column
                  isRowHeader
                  className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5"
                >
                  Tenant Information
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Property Information
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Move In Date
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Booking Amount
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Payment Status
                </Table.Column>
                {/* Added explicit Booking Status Column */}
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Booking Status
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 text-right border-b border-white/5">
                  Actions
                </Table.Column>
              </Table.Header>
              <Table.Body>
                {bookings.map((item) => (
                  <Table.Row
                    key={item._id}
                    className="border-b border-white/2 hover:bg-white/1 transition-colors"
                  >
                    {/* Tenant Information */}
                    <Table.Cell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-slate-400">
                          <User className="size-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            {item.userName}
                          </span>
                          <span className="text-xs text-slate-500 block font-mono mt-0.5">
                            {item.userEmail}
                          </span>
                          <span className="text-[11px] text-slate-400 block mt-0.5 italic">
                            Note: {item.additionalNotes}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Property Information */}
                    <Table.Cell className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg text-slate-400">
                          <Building2 className="size-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            {item.title}
                          </span>
                          <span className="text-xs text-slate-500 block font-mono mt-0.5">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </Table.Cell>

                    {/* Move-in Date */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm text-slate-300 font-mono flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-slate-500" />
                        {item.moveInDate}
                      </span>
                    </Table.Cell>

                    {/* Booking Amount */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm font-bold font-mono text-emerald-400 flex items-center">
                        <DollarSign className="size-3.5 shrink-0" />
                        {item.price?.toLocaleString()}
                      </span>
                    </Table.Cell>

                    {/* Payment Status */}
                    <Table.Cell className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold font-mono border uppercase tracking-wider ${
                          item.paymentStatus === "paid"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                        }`}
                      >
                        {item.paymentStatus}
                      </span>
                    </Table.Cell>

                    {/* Booking Status Badge Column */}
                    <Table.Cell className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                          item.bookingStatus === "Approved"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                            : item.bookingStatus === "Rejected"
                              ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                              : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        }`}
                      >
                        <Clock className="size-3.5" /> {item.bookingStatus}
                      </span>
                    </Table.Cell>

                    {/* Action Triggers */}
                    <Table.Cell className="py-4 px-6 text-right">
                      {item.bookingStatus === "Pending" ? (
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            onPress={() =>
                              handleStatusUpdate(item._id, "Approved")
                            }
                            className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
                          >
                            <Check className="size-3.5" /> Approve
                          </Button>
                          <Button
                            size="sm"
                            onPress={() =>
                              handleStatusUpdate(item._id, "Rejected")
                            }
                            className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
                          >
                            <X className="size-3.5" /> Reject
                          </Button>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono italic">
                          Action Completed
                        </span>
                      )}
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

export default OwnerBookingTable;
