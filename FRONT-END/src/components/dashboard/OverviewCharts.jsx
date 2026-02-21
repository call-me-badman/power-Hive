import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend,
    AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';

const applianceData = [
    { name: 'HVAC', value: 45 },
    { name: 'Kitchen', value: 25 },
    { name: 'Lighting', value: 15 },
    { name: 'Other', value: 15 },
];

const COLORS = ['#5562c1', '#f97316', '#10b981', '#64748b'];

const trendData = [
    { time: '06:00', load: 0.8 },
    { time: '09:00', load: 2.4 },
    { time: '12:00', load: 3.1 },
    { time: '15:00', load: 2.7 },
    { time: '18:00', load: 4.2 },
    { time: '21:00', load: 3.8 },
    { time: '00:00', load: 1.2 },
];

function OverviewCharts() {
    return (
        <div className="charts-section">
            <div className="chart-card">
                <h4>Consumption Breakdown (%)</h4>
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={applianceData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {applianceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="chart-card">
                <h4>Load Profile (kW)</h4>
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <AreaChart data={trendData}>
                            <defs>
                                <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#5562c1" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#5562c1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                            <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="load"
                                stroke="#5562c1"
                                fillOpacity={1}
                                fill="url(#colorLoad)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <style>{`
        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .chart-card {
          background: #e8ebf3;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #cfd6e6;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .chart-card h4 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #1e293b;
          font-weight: 600;
          align-self: flex-start;
        }
      `}</style>
        </div>
    );
}

export default OverviewCharts;
