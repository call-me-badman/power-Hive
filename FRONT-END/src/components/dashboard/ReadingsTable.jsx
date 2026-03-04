import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { devicesData } from "../../data/devicesData";

function ReadingsTable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "normal":
        return { bg: "#dcfce7", text: "#10b981" };
      case "running":
        return { bg: "#dbeafe", text: "#3b82f6" };
      case "high load":
        return { bg: "#fee2e2", text: "#ef4444" };
      default:
        return { bg: "#f1f5f9", text: "#64748b" };
    }
  };

  const filteredDevices = devicesData.filter(device =>
    device.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (device) => {
    navigate("/devices", { state: { device } });
  };

  return (
    <div className="table-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", flexWrap: "wrap", gap: "10px" }}>
        <h4 style={{ margin: 0 }}>Latest Electrical Readings</h4>

        {/* Search Bar */}
        <div style={{ position: "relative", width: "100%", maxWidth: "250px" }}>
          <Search size={16} style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
          <input
            type="text"
            placeholder="Search devices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px 8px 35px",
              borderRadius: "8px",
              border: "1px solid #cfd6e6",
              outline: "none",
              fontSize: "0.9rem",
              backgroundColor: "#fff"
            }}
          />
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Device</th>
              <th>Voltage (V)</th>
              <th>Current (A)</th>
              <th>Power (W)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, index) => {
                const badgeStyles = getStatusStyles(device.status);
                return (
                  <tr key={index} onClick={() => handleRowClick(device)} style={{ cursor: "pointer" }}>
                    <td>{device.name}</td>
                    <td>{device.voltage}</td>
                    <td>{device.current}</td>
                    <td>{device.power}</td>
                    <td>
                      <span style={{
                        padding: "4px 10px",
                        borderRadius: "99px",
                        backgroundColor: badgeStyles.bg,
                        color: badgeStyles.text,
                        fontSize: "0.8rem",
                        fontWeight: "700"
                      }}>
                        {device.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: "40px", color: "#94a3b8" }}>No devices found matching "{searchTerm}"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ReadingsTable;