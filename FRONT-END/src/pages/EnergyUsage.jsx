import React from 'react';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const dailyData = [
    { time: '00:00', usage: 1.2 },
    { time: '04:00', usage: 0.8 },
    { time: '08:00', usage: 2.5 },
    { time: '12:00', usage: 3.8 },
    { time: '16:00', usage: 3.2 },
    { time: '20:00', usage: 4.5 },
    { time: '23:59', usage: 1.5 },
];

const weeklyData = [
    { day: 'Mon', consumption: 45 },
    { day: 'Tue', consumption: 52 },
    { day: 'Wed', consumption: 48 },
    { day: 'Thu', consumption: 61 },
    { day: 'Fri', consumption: 55 },
    { day: 'Sat', consumption: 40 },
    { day: 'Sun', consumption: 35 },
];

function EnergyUsage() {
    return (
        <div className="main energy-usage">
            <div className="topbar">
                <h3>Energy Usage Analytics </h3>
            </div>

            <div className="stats" style={{ marginBottom: '20px' }}>
                <div className="stat-card">
                    <h4>Avg. Daily Usage</h4>
                    <p>48.2 kWh</p>
                </div>
                <div className="stat-card">
                    <h4>Peak Load Time</h4>
                    <p>20:15 PM</p>
                </div>
                <div className="stat-card">
                    <h4>System Efficiency</h4>
                    <p>94.2%</p>
                </div>
            </div>

            <div className="charts-grid">
                <div className="chart-container shadow">
                    <h4>Daily Consumption Trend (kWh)</h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={dailyData}>
                                <defs>
                                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cfd6e6' }}
                                />
                                <Area type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorUsage)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container shadow">
                    <h4>Weekly Energy Consumption (kWh)</h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={weeklyData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: '#f1f5f9' }}
                                    contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cfd6e6' }}
                                />
                                <Bar dataKey="consumption" fill="#f97316" radius={[4, 4, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <style>{`
        .charts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
        }
        .chart-container {
          background: #e8ebf3;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #cfd6e6;
        }
        .chart-container h4 {
          margin-bottom: 20px;
          color: #1e293b;
          font-weight: 600;
        }
        .shadow {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
        </div>
    );
}
export default EnergyUsage;