import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
    AreaChart, Area
} from 'recharts';
import { devicesData } from '../../data/devicesData';

// Prepare data for the horizontal bar chart from devicesData
const deviceLoadData = devicesData.map(d => ({
    name: d.name,
    load: d.power, // Power in Watts
    status: d.status
})).sort((a, b) => b.load - a.load);

const trendData = [
    { time: '00:00', load: 1.2 },
    { time: '04:00', load: 0.9 },
    { time: '08:00', load: 2.1 },
    { time: '12:00', load: 3.4 },
    { time: '16:00', load: 2.8 },
    { time: '20:00', load: 4.1 },
    { time: '23:59', load: 1.5 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#64748b'];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <p style={{ margin: 0, fontWeight: '700', color: '#0f172a' }}>{label}</p>
                <p style={{ margin: 0, color: '#3b82f6' }}>Load: {payload[0].value} {payload[0].unit || 'W'}</p>
            </div>
        );
    }
    return null;
};

function OverviewCharts() {
    return (
        <div className="charts-section">
            {/* Horizontal Bar Chart for Device Loads */}
            <div className="chart-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                    <h4>Live Device Load (W)</h4>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Real-time Distribution</span>
                </div>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart
                            layout="vertical"
                            data={deviceLoadData}
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                width={80}
                            />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="load" radius={[0, 4, 4, 0]} barSize={20}>
                                {deviceLoadData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Clean Area Chart for Load Trend */}
            <div className="chart-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
                    <h4>24h Power Trend (kW)</h4>
                    <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: '600' }}>Normal Pattern</span>
                </div>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <AreaChart data={trendData}>
                            <defs>
                                <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="time"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="load"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorLoad)"
                                unit=" kW"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <style>{`
        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .chart-card {
          background: #fff;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
        }

        .chart-card h4 {
          margin: 0;
          color: #0f172a;
          font-size: 1.1rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
            .charts-section {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
}

export default OverviewCharts;
