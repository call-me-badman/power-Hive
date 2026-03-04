import React, { useState } from 'react';
import { Activity, Shield, AlertTriangle, Info, Search, Filter } from 'lucide-react';

const mockLogs = [
    { id: 'LOG-001', timestamp: '2025-07-03 14:24:05', source: 'Main Line', severity: 'Critical', message: 'Voltage spike detected (258V). Automatic surge protection activated.' },
    { id: 'LOG-002', timestamp: '2025-07-03 12:15:30', source: 'Fridge', severity: 'Info', message: 'Compressor cycle started safely.' },
    { id: 'LOG-003', timestamp: '2025-07-03 10:45:12', source: 'Heater', severity: 'Warning', message: 'Load nearing maximum threshold (2200W). Consider balancing.' },
    { id: 'LOG-004', timestamp: '2025-07-03 09:30:00', source: 'System', severity: 'Info', message: 'Daily energy usage report successfully generated.' },
    { id: 'LOG-005', timestamp: '2025-07-02 22:10:45', source: 'Television', severity: 'Warning', message: 'Idle power draw detected for >4 hours. Switch off recommended.' },
    { id: 'LOG-006', timestamp: '2025-07-02 18:05:22', source: 'Generator', severity: 'Info', message: 'Switchover test completed successfully.' },
    { id: 'LOG-007', timestamp: '2025-07-02 15:40:10', source: 'Motor 1', severity: 'Critical', message: 'High temperature warning. Operational load reduced.' },
    { id: 'LOG-008', timestamp: '2025-07-02 11:20:00', source: 'System', severity: 'Info', message: 'Firmware update v2.4.1 applied.' },
];

const getSeverityStyles = (severity) => {
    switch (severity.toLowerCase()) {
        case 'critical':
            return { bg: '#fee2e2', text: '#ef4444', icon: <Shield size={14} /> };
        case 'warning':
            return { bg: '#ffedd5', text: '#f97316', icon: <AlertTriangle size={14} /> };
        case 'info':
            return { bg: '#dcfce7', text: '#10b981', icon: <Info size={14} /> };
        default:
            return { bg: '#f1f5f9', text: '#64748b', icon: <Activity size={14} /> };
    }
};

const SystemLogs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSeverity, setFilterSeverity] = useState("All");

    const severities = ["All", "Critical", "Warning", "Info"];

    const filteredLogs = mockLogs.filter(log => {
        const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            log.source.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSeverity = filterSeverity === "All" || log.severity === filterSeverity;
        return matchesSearch && matchesSeverity;
    });

    return (
        <div className="main" style={{ backgroundColor: "var(--bg-main, #f8fafc)", minHeight: "100vh" }}>
            <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "2.2rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", margin: "0 0 10px 0" }}>
                    <Activity size={36} color="var(--accent-light, #3b82f6)" />
                    System Audit Logs
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0, maxWidth: "600px" }}>
                    Real-time trail of system events, security alerts, and device status changes.
                </p>
            </div>

            {/* --- Filters Bar --- */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "center", backgroundColor: "#fff", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
                <div style={{ position: "relative", flex: 1 }}>
                    <Search size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                    <input
                        type="text"
                        placeholder="Search logs by message or device..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: "100%", padding: "10px 10px 10px 40px", borderRadius: "8px", border: "1px solid #e2e8f0", outline: "none", fontSize: "0.95rem" }}
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Filter size={18} color="#64748b" />
                    <select
                        value={filterSeverity}
                        onChange={(e) => setFilterSeverity(e.target.value)}
                        style={{ padding: "10px 16px", borderRadius: "8px", border: "1px solid #e2e8f0", backgroundColor: "#fff", color: "#64748b", fontWeight: "600", outline: "none", cursor: "pointer" }}
                    >
                        {severities.map(s => <option key={s} value={s}>{s} Severity</option>)}
                    </select>
                </div>
            </div>

            {/* --- Logs Table --- */}
            <div style={{ backgroundColor: "#fff", borderRadius: "20px", border: "1px solid #e2e8f0", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead style={{ backgroundColor: "#f8fafc" }}>
                            <tr>
                                <th style={{ textAlign: "left", padding: "18px 24px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Timestamp</th>
                                <th style={{ textAlign: "left", padding: "18px 24px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Source</th>
                                <th style={{ textAlign: "left", padding: "18px 24px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Severity</th>
                                <th style={{ textAlign: "left", padding: "18px 24px", color: "#64748b", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLogs.length > 0 ? (
                                filteredLogs.map((log, index) => {
                                    const styles = getSeverityStyles(log.severity);
                                    return (
                                        <tr key={log.id} style={{ borderBottom: index === filteredLogs.length - 1 ? "none" : "1px solid #f1f5f9", transition: "background 0.2s" }}>
                                            <td style={{ padding: "18px 24px", color: "#64748b", fontSize: "0.9rem", whiteSpace: "nowrap" }}>{log.timestamp}</td>
                                            <td style={{ padding: "18px 24px", fontWeight: "600", color: "#0f172a" }}>{log.source}</td>
                                            <td style={{ padding: "18px 24px" }}>
                                                <div style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                    padding: "4px 10px",
                                                    borderRadius: "99px",
                                                    backgroundColor: styles.bg,
                                                    color: styles.text,
                                                    fontSize: "0.8rem",
                                                    fontWeight: "700"
                                                }}>
                                                    {styles.icon}
                                                    {log.severity}
                                                </div>
                                            </td>
                                            <td style={{ padding: "18px 24px", color: "#334155", lineHeight: "1.5" }}>{log.message}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ padding: "60px", textAlign: "center", color: "#94a3b8" }}>
                                        No logs found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Showing {filteredLogs.length} events</p>
            </div>
        </div>
    );
};

export default SystemLogs;
