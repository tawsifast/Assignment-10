"use client";

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { 
    ResponsiveContainer, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip 
} from 'recharts';

const OwnerEarningsChart = ({ data }) => {
    return (
        <div className="bg-[#09090f] border border-white/5 rounded-xl p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-slate-400" />
                <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Monthly Earnings (Last 12 Months)
                </h2>
            </div>

            <div className="w-full h-80 pt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
                    >
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            stroke="#ffffff05" 
                            vertical={false} 
                        />
                        <XAxis 
                            dataKey="month" 
                            stroke="#64748b" 
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                            dy={10}
                        />
                        <YAxis 
                            stroke="#64748b" 
                            fontSize={11}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(val) => `$${val}`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#09090f',
                                borderColor: 'rgba(255,255,255,0.08)',
                                borderRadius: '8px',
                                color: '#f1f5f9',
                                fontFamily: 'monospace',
                                fontSize: '12px'
                            }}
                            formatter={(value) => [`$${value}`, 'Earnings']}
                            labelStyle={{ color: '#94a3b8' }}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="earnings" 
                            stroke="#34d399" 
                            strokeWidth={2.5}
                            activeDot={{ r: 6, stroke: '#030307', strokeWidth: 2 }}
                            dot={{ r: 3, fill: '#34d399', strokeWidth: 0 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OwnerEarningsChart;