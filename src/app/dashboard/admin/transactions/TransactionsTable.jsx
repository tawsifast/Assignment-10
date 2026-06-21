"use client";

import { Table } from "@heroui/react";
import { DollarSign, Mail, Calendar, Hash } from "lucide-react";

export default function TransactionsTable({ transactions = [] }) {
  return (
    <div className="bg-[#09090f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      {transactions.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sm text-slate-500 font-mono">
            No transactions found.
          </p>
        </div>
      ) : (
        <Table aria-label="Transactions Table">
          <Table.ScrollContainer>
            <Table.Content aria-label="Transactions List" className="min-w-[750px]">
              <Table.Header>
                <Table.Column isRowHeader className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">
                  Customer Email
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Amount
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Stripe Session
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">
                  Status
                </Table.Column>
                <Table.Column className="bg-white/2 text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">
                  Date
                </Table.Column>
              </Table.Header>
              <Table.Body>
                {transactions.map((tx) => {
                  // Standardize ID string safely for React array key mapping
                  const rowId = tx._id?.$oid || tx._id || Math.random().toString();

                  return (
                    <Table.Row key={rowId} className="border-b border-white/2 hover:bg-white/1 transition-colors">
                      {/* Customer Email Cell */}
                      <Table.Cell className="py-4 px-6 text-slate-300 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="size-3.5 text-slate-500" /> 
                          <span>{tx.userEmail}</span>
                        </div>
                      </Table.Cell>

                      {/* Amount Cell */}
                      <Table.Cell className="py-4 px-4 text-emerald-400 font-bold font-mono text-sm">
                        <div className="flex items-center">
                          <DollarSign className="size-3.5" /> 
                          <span>{tx.amount}</span>
                        </div>
                      </Table.Cell>

                      {/* Stripe Session Cell */}
                      <Table.Cell className="py-4 px-4 text-slate-500 font-mono text-xs">
                        <div className="flex items-center gap-1.5">
                          <Hash className="size-3.5" /> 
                          <span>{tx.stripeSessionId ? `${tx.stripeSessionId.slice(0, 14)}...` : "N/A"}</span>
                        </div>
                      </Table.Cell>

                      {/* Status Cell */}
                      <Table.Cell className="py-4 px-4">
                        <div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {tx.paymentStatus || "unknown"}
                          </span>
                        </div>
                      </Table.Cell>

                      {/* Date Cell */}
                      <Table.Cell className="py-4 px-6 text-slate-400 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-3.5" /> 
                          <span>
                            {tx.transactionDate ? new Date(tx.transactionDate).toLocaleDateString() : "N/A"}
                          </span>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
}