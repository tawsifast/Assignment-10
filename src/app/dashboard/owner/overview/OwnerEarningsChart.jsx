"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function OwnerEarningsChart({ chartData }) {
  return (
    <div className="border border-white/5 bg-[#0c0c14]/60 backdrop-blur-xl p-6 rounded-2xl shadow-2xl space-y-4">
      <div>
        <h3 className="text-lg font-bold text-slate-200">Monthly Earnings Trend</h3>
        <p className="text-xs text-slate-500">Visual representation of your premium assets revenue flow over the last 12 months.</p>
      </div>

      <div className="w-full h-80 pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0c0c14',
                borderColor: 'rgba(168, 85, 247, 0.2)',
                borderRadius: '12px',
                color: '#f8fafc'
              }}
              formatter={(value) => [`$${value}`, 'Earnings']}
            />
            <Line
              type="monotone"
              dataKey="earnings"
              stroke="url(#earningsGlow)"
              strokeWidth={3}
              dot={{ r: 4, stroke: '#06b6d4', strokeWidth: 2, fill: '#0c0c14' }}
              activeDot={{ r: 6, stroke: '#a855f7', strokeWidth: 2, fill: '#fff' }}
            />
            {/* Cyber Glow Gradients */}
            <defs>
              <linearGradient id="earningsGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}