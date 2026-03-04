import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Zap, Activity } from "lucide-react";

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

const dailyVoltageData = [
    { time: '00:00', value: 228 }, { time: '04:00', value: 231 }, { time: '08:00', value: 230 },
    { time: '12:00', value: 220 }, { time: '16:00', value: 225 }, { time: '20:00', value: 232 }, { time: '23:59', value: 230 }
];

const weeklyVoltageData = [
    { day: 'Mon', value: 230 }, { day: 'Tue', value: 228 }, { day: 'Wed', value: 235 },
    { day: 'Thu', value: 225 }, { day: 'Fri', value: 232 }, { day: 'Sat', value: 230 }, { day: 'Sun', value: 234 }
];

const dailyCurrentData = [
    { time: '00:00', value: 2.1 }, { time: '04:00', value: 1.8 }, { time: '08:00', value: 6.5 },
    { time: '12:00', value: 8.2 }, { time: '16:00', value: 5.4 }, { time: '20:00', value: 9.1 }, { time: '23:59', value: 3.5 }
];

const weeklyCurrentData = [
    { day: 'Mon', value: 45 }, { day: 'Tue', value: 52 }, { day: 'Wed', value: 38 },
    { day: 'Thu', value: 60 }, { day: 'Fri', value: 48 }, { day: 'Sat', value: 65 }, { day: 'Sun', value: 70 }
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

                {/* --- Added from Devices Page --- */}
                <div className="chart-container shadow">
                    <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Zap size={18} color="#f59e0b" /> Daily Voltage Trend (V)
                    </h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={dailyVoltageData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={['dataMin - 5', 'dataMax + 5']} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container shadow">
                    <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Zap size={18} color="#f97316" /> Weekly Voltage Trend (V)
                    </h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={weeklyVoltageData}>
                                <defs>
                                    <linearGradient id="colorVoltageWeekly" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={['dataMin - 10', 'dataMax + 10']} stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorVoltageWeekly)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container shadow">
                    <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Activity size={18} color="#3b82f6" /> Daily Current Load (A)
                    </h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={dailyCurrentData}>
                                <defs>
                                    <linearGradient id="colorCurrentDaily" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrentDaily)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-container shadow">
                    <h4 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Activity size={18} color="#8b5cf6" /> Weekly Current Load (Avg A)
                    </h4>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <BarChart data={weeklyCurrentData} barSize={30}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cfd6e6" />
                                <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: 'rgba(139, 92, 246, 0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
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