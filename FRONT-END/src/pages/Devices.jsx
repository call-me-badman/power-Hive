import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Zap, Monitor, Power, Search } from "lucide-react";
import { devicesData } from "../data/devicesData";
import "../../apps/p_hive/styles/home.css";

const Devices = () => {
    const location = useLocation();
    const selectedDevice = location.state?.device;
    const [searchTerm, setSearchTerm] = useState("");

    const devicesToDisplay = selectedDevice
        ? [selectedDevice, ...devicesData.filter((d) => d.name !== selectedDevice.name)]
        : devicesData;

    const filteredDevices = devicesToDisplay.filter(device =>
        device.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "normal":
                return "#10b981"; // Emerald Green
            case "running":
                return "#3b82f6"; // Blue
            case "high load":
                return "#ef4444"; // Red
            default:
                return "#f59e0b"; // Amber (Warning)
        }
    };

    return (
        <div className="main" style={{ backgroundColor: "var(--bg-main, #f8fafc)", minHeight: "100vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
                <div>
                    <h2 style={{ fontSize: "2.2rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "12px", margin: "0 0 10px 0" }}>
                        <Monitor size={36} color="var(--accent-light, #3b82f6)" />
                        Connected Devices
                    </h2>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0, maxWidth: "600px" }}>
                        Manage and monitor your connected appliances in real-time.
                    </p>
                </div>

                <div style={{ position: "relative", minWidth: "300px" }}>
                    <Search size={20} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
                    <input
                        type="text"
                        placeholder="Filter by device name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "12px 14px 12px 45px",
                            borderRadius: "12px",
                            border: "1px solid #e2e8f0",
                            outline: "none",
                            fontSize: "1rem",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
                        }}
                    />
                </div>
            </div>

            {/* --- DEVICE CARDS GRID --- */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                {filteredDevices.length > 0 ? (
                    filteredDevices.map((device, index) => {
                        const resistance = device.current > 0 ? (device.voltage / device.current).toFixed(2) : "∞";
                        const isSelected = selectedDevice?.name === device.name;
                        const statusColor = getStatusColor(device.status);
                        const DeviceIcon = device.icon || Zap;
                        const powerKW = (device.power / 1000).toFixed(2);

                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "20px",
                                    padding: "28px",
                                    boxShadow: isSelected ? "0 12px 35px rgba(59, 130, 246, 0.12)" : "0 4px 15px rgba(0, 0, 0, 0.04)",
                                    border: isSelected ? "2px solid #3b82f6" : "1px solid #e2e8f0",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                        <div style={{ padding: "12px", backgroundColor: "#f1f5f9", borderRadius: "12px" }}>
                                            <DeviceIcon size={26} color="#64748b" />
                                        </div>
                                        <h3 style={{ margin: 0, fontSize: "1.4rem", color: "#0f172a", fontWeight: "700" }}>{device.name}</h3>
                                    </div>
                                </div>

                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "16px",
                                    backgroundColor: "#f8fafc",
                                    padding: "20px",
                                    borderRadius: "16px",
                                    border: "1px solid #e2e8f0"
                                }}>
                                    {[
                                        { label: "Status", value: device.status, color: statusColor },
                                        { label: "Switched", value: device.switchedOn ? "ON" : "OFF", icon: <Power size={14} color={device.switchedOn ? "#10b981" : "#94a3b8"} /> },
                                        { label: "Voltage", value: `${device.voltage}V` },
                                        { label: "Current", value: `${device.current}A` },
                                        { label: "Power", value: `${powerKW} kW`, color: "#3b82f6" },
                                        { label: "Resistance", value: `${resistance}Ω` },
                                    ].map((field, i) => (
                                        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>{field.label}</span>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                {field.icon}
                                                <span style={{ fontSize: "1rem", color: field.color || "#0f172a", fontWeight: "700" }}>{field.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "80px", backgroundColor: "#fff", borderRadius: "20px", border: "1px dashed #cbd5e1" }}>
                        <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>No devices match "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Devices;
