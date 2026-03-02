import { useLocation } from "react-router-dom";
import { Zap, Activity, Battery, Monitor, Cpu, Radio, ShieldCheck } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar } from 'recharts';
import "../../apps/p_hive/styles/home.css";

const Devices = () => {
    const location = useLocation();
    const selectedDevice = location.state?.device;

    const sampleDevices = [
        { name: "Generator", voltage: 240, current: 15, power: 3600, status: "Active", switchedOn: true },
        { name: "Fridge", voltage: 288, current: 10.5, power: 1563, status: "Running", switchedOn: true },
        { name: "Television", voltage: 305, current: 8.5, power: 2000, status: "Normal", switchedOn: false },
    ];

    const devicesToDisplay = selectedDevice
        ? [selectedDevice, ...sampleDevices.filter((d) => d.name !== selectedDevice.name)]
        : sampleDevices;

    const getStatusColor = (status) => {
        switch (status) {
            case "Normal":
            case "Running":
                return "#10b981"; // Emerald Green
            case "High Load":
            case "High load":
                return "#ef4444"; // Red
            case "Active":
                return "#8b5cf6"; // Purple
            default:
                return "#f59e0b"; // Amber (Warning)
        }
    };

    const getStatusBg = (status) => {
        switch (status) {
            case "Normal":
            case "Running":
                return "rgba(16, 185, 129, 0.1)";
            case "High Load":
            case "High load":
                return "rgba(239, 68, 68, 0.1)";
            case "Active":
                return "rgba(139, 92, 246, 0.1)";
            default:
                return "rgba(245, 158, 11, 0.1)";
        }
    };

    // --- Mock Data for Charts ---
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

    return (
        <div className="main" style={{ padding: "30px", backgroundColor: "var(--bg-main, #f8fafc)", minHeight: "100vh" }}>
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "2.2rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", margin: "0 0 10px 0" }}>
                    <Monitor size={36} color="var(--accent-light, #3b82f6)" />
                    Connected Devices
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0, maxWidth: "600px" }}>
                    A humanized view of your connected system's health. See what your devices are doing right now, and how they've been performing over time.
                </p>
            </div>

            {/* --- DEVICE CARDS GRID --- */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                {devicesToDisplay.slice(0, 3).map((device, index) => {
                    const resistance = device.current > 0 ? (device.voltage / device.current).toFixed(2) : "∞";
                    const isSelected = selectedDevice?.name === device.name;
                    const statusColor = getStatusColor(device.status);
                    const statusBg = getStatusBg(device.status);

                    return (
                        <div
                            key={index}
                            style={{
                                backgroundColor: isSelected ? "var(--bg-primary, #ffffff)" : "var(--bg-secondary, #ffffff)",
                                borderRadius: "20px",
                                padding: "28px",
                                boxShadow: isSelected ? "0 12px 35px rgba(59, 130, 246, 0.12)" : "0 4px 15px rgba(0, 0, 0, 0.04)",
                                border: isSelected ? "2px solid var(--accent-light, #3b82f6)" : "1px solid var(--border-color, #e2e8f0)",
                                transition: "all 0.3s ease",
                                cursor: "default",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            {isSelected && (
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    background: "var(--accent-light, #3b82f6)",
                                    color: "white",
                                    padding: "4px 14px",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    borderBottomLeftRadius: "12px",
                                }}>
                                    Viewing Details
                                </div>
                            )}

                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <div style={{ padding: "12px", backgroundColor: "var(--bg-muted, #f1f5f9)", borderRadius: "12px" }}>
                                        <Cpu size={26} color="var(--text-secondary, #64748b)" />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: "1.6rem", color: "var(--text-primary, #0f172a)", fontWeight: "700" }}>{device.name}</h3>
                                        <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem", color: "var(--text-muted, #64748b)" }}>
                                            {device.switchedOn ? "Power flowing" : "Standing by"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p style={{
                                fontSize: "1.05rem",
                                color: "var(--text-secondary, #475569)",
                                lineHeight: "1.6",
                                marginBottom: "24px",
                                backgroundColor: "var(--bg-muted, #f8fafc)",
                                padding: "16px",
                                borderRadius: "12px",
                                border: "1px solid var(--border-color, #e2e8f0)"
                            }}>
                                Right now, this device is drawing <strong style={{ color: "var(--accent-light, #3b82f6)" }}>{device.power} Watts</strong> of power.
                                It's running on a <strong style={{ color: "var(--text-primary)" }}>{device.voltage}V</strong> line and pulling exactly <strong style={{ color: "var(--text-primary)" }}>{device.current} Amps</strong>.
                                The calculated internal resistance is roughly <strong>{resistance}Ω</strong>.
                            </p>

                            <div style={{
                                marginTop: "auto",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "12px 16px",
                                backgroundColor: statusBg,
                                borderRadius: "12px",
                            }}>
                                <span style={{ fontSize: "0.95rem", color: "var(--text-secondary, #475569)", fontWeight: "600" }}>Overall Condition:</span>
                                <span style={{
                                    fontWeight: "700",
                                    color: statusColor,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "1rem"
                                }}>
                                    <span style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: statusColor,
                                        boxShadow: `0 0 8px ${statusColor}`
                                    }}></span>
                                    {device.status}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* --- ANALYTICS GRAPHS --- */}
            <h3 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "10px" }}>
                System-Wide Analytics
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "24px" }}>

                {/* 1. Daily Voltage Trend */}
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Zap size={18} color="#f59e0b" /> Daily Voltage Trend (V)
                    </h4>
                    <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <LineChart data={dailyVoltageData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={['dataMin - 5', 'dataMax + 5']} stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: "#f59e0b", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 2. Weekly Voltage Trend */}
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Zap size={18} color="#f97316" /> Weekly Voltage Trend (V)
                    </h4>
                    <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <AreaChart data={weeklyVoltageData}>
                                <defs>
                                    <linearGradient id="colorVoltageWeekly" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis domain={['dataMin - 10', 'dataMax + 10']} stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorVoltageWeekly)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 3. Daily Current Trend */}
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Activity size={18} color="#3b82f6" /> Daily Current Load (A)
                    </h4>
                    <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <AreaChart data={dailyCurrentData}>
                                <defs>
                                    <linearGradient id="colorCurrentDaily" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrentDaily)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* 4. Weekly Current Trend */}
                <div style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0" }}>
                    <h4 style={{ margin: "0 0 20px 0", color: "#1e293b", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "8px" }}>
                        <Activity size={18} color="#8b5cf6" /> Weekly Current Load (Avg A)
                    </h4>
                    <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <BarChart data={weeklyCurrentData} barSize={30}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{ fill: 'rgba(139, 92, 246, 0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="value" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Devices;
