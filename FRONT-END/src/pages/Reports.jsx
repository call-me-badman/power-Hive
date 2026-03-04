import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    RadialBarChart, RadialBar, Legend, ComposedChart, Line
} from 'recharts';
import { FileText, Download, TrendingUp, DollarSign, Leaf, Zap } from 'lucide-react';

const monthlyAnalysisData = [
    { month: 'Jan', usage: 1200, cost: 180 },
    { month: 'Feb', usage: 1350, cost: 202 },
    { month: 'Mar', usage: 1100, cost: 165 },
    { month: 'Apr', usage: 1450, cost: 217 },
    { month: 'May', usage: 1600, cost: 240 },
    { month: 'Jun', usage: 1550, cost: 232 },
];

const timeOfDayData = [
    { name: 'Peak (18-22)', value: 45, fill: '#ef4444' },
    { name: 'Standard (08-18)', value: 30, fill: '#3b82f6' },
    { name: 'Off-Peak (22-08)', value: 25, fill: '#10b981' },
];

const recentReports = [
    { id: 'REP-2025-06', name: 'Monthly Energy Audit - June 2025', date: '2025-07-01', size: '2.4 MB' },
    { id: 'REP-2025-05', name: 'Monthly Energy Audit - May 2025', date: '2025-06-01', size: '2.1 MB' },
    { id: 'REP-2025-04', name: 'Monthly Energy Audit - April 2025', date: '2025-05-01', size: '2.3 MB' },
];

const Reports = () => {
    return (
        <div className="main" style={{ backgroundColor: "var(--bg-main, #f8fafc)", minHeight: "100vh" }}>
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "2.2rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", margin: "0 0 10px 0" }}>
                    <FileText size={36} color="var(--accent-light, #3b82f6)" />
                    System Reports & Analytics
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0, maxWidth: "600px" }}>
                    In-depth analysis of your energy consumption pattern and cost efficiency.
                </p>
            </div>

            {/* --- Stats Grid --- */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                {[
                    { title: "Avg. Monthly Usage", value: "1,375 kWh", icon: <Zap size={24} />, color: "#3b82f6", trend: "+4%" },
                    { title: "Peak Demand", value: "14.2 kW", icon: <TrendingUp size={24} />, color: "#f59e0b", trend: "-5%" },
                    { title: "Total Forecast Cost", value: "$2,840.00", icon: <DollarSign size={24} />, color: "#10b981", trend: "+2%" },
                    { title: "Sustainability Score", value: "84/100", icon: <Leaf size={24} />, color: "#8b5cf6", trend: "+12%" },
                ].map((stat, i) => (
                    <div key={i} style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                            <div style={{ padding: "10px", backgroundColor: `${stat.color}10`, borderRadius: "12px", color: stat.color }}>{stat.icon}</div>
                            <span style={{ fontSize: "0.85rem", color: stat.trend.startsWith('+') ? "#ef4444" : "#10b981", fontWeight: "600" }}>{stat.trend}</span>
                        </div>
                        <h4 style={{ margin: "0 0 4px 0", color: "#64748b", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.title}</h4>
                        <p style={{ margin: 0, fontSize: "1.8rem", fontWeight: "700", color: "#0f172a" }}>{stat.value}</p>
                    </div>
                ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                {/* --- Composed Chart: Usage vs Cost --- */}
                <div style={{ backgroundColor: "#fff", padding: "28px", borderRadius: "20px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                        <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#0f172a" }}>Usage vs. Cost Efficiency</h3>
                        <div style={{ display: 'flex', gap: '15px', fontSize: '12px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: 10, height: 10, background: '#3b82f6', borderRadius: '2px' }} /> Usage (kWh)</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><div style={{ width: 10, height: 2, background: '#ef4444' }} /> Cost ($)</span>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: 320 }}>
                        <ResponsiveContainer>
                            <ComposedChart data={monthlyAnalysisData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="usage" name="Usage (kWh)" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                                <Line type="monotone" dataKey="cost" name="Cost ($)" stroke="#ef4444" strokeWidth={3} dot={{ r: 4, fill: '#ef4444' }} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* --- Radial Bar Chart: Usage by Time of Day --- */}
                <div style={{ backgroundColor: "#fff", padding: "28px", borderRadius: "20px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ margin: "0 0 24px 0", fontSize: "1.25rem", color: "#0f172a" }}>Time-of-Use Patterns (%)</h3>
                    <div style={{ width: '100%', height: 320 }}>
                        <ResponsiveContainer>
                            <RadialBarChart
                                cx="50%"
                                cy="50%"
                                innerRadius="30%"
                                outerRadius="100%"
                                data={timeOfDayData}
                                startAngle={180}
                                endAngle={0}
                            >
                                <RadialBar
                                    minAngle={15}
                                    label={{ fill: '#fff', position: 'insideStart', fontSize: 10 }}
                                    background
                                    clockWise={true}
                                    dataKey='value'
                                />
                                <Legend
                                    iconSize={10}
                                    width={120}
                                    height={140}
                                    layout='vertical'
                                    verticalAlign='middle'
                                    align="right"
                                />
                                <Tooltip />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* --- Recent Reports Table --- */}
            <div style={{ backgroundColor: "#fff", padding: "28px", borderRadius: "20px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#0f172a" }}>Available Reports</h3>
                    <button style={{ backgroundColor: "#3b82f6", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Download size={18} /> Generate New Report
                    </button>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                                <th style={{ textAlign: "left", padding: "16px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase" }}>Report Name</th>
                                <th style={{ textAlign: "left", padding: "16px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase" }}>Generated Date</th>
                                <th style={{ textAlign: "left", padding: "16px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase" }}>File Size</th>
                                <th style={{ textAlign: "right", padding: "16px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentReports.map(report => (
                                <tr key={report.id} style={{ borderBottom: "1px solid #f8fafc" }}>
                                    <td style={{ padding: "16px", fontWeight: "600", color: "#0f172a" }}>{report.name}</td>
                                    <td style={{ padding: "16px", color: "#64748b" }}>{report.date}</td>
                                    <td style={{ padding: "16px", color: "#64748b" }}>{report.size}</td>
                                    <td style={{ padding: "16px", textAlign: "right" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                                            <button style={{ background: "none", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "8px", color: "#3b82f6", cursor: "pointer" }}>PDF</button>
                                            <button style={{ background: "none", border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "8px", color: "#3b82f6", cursor: "pointer" }}>CSV</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
