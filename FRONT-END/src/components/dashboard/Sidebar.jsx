import { Link, useLocation } from "react-router-dom";
import { Home, LayoutDashboard, Zap, MonitorSmartphone, FileText, Activity } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/home", icon: <Home size={20} /> },
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Energy Usage", path: "/energy-usage", icon: <Zap size={20} /> },
    { name: "Devices", path: "/devices", icon: <MonitorSmartphone size={20} /> },
    { name: "Reports", path: "/reports", icon: <FileText size={20} /> },
    { name: "System Logs", path: "/system-logs", icon: <Activity size={20} /> },
  ];

  return (
    <div className="sidebar">
      <Link to="/home" className="logo-link">
        <h2>⚡ Power Hive</h2>
      </Link>

      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={(location.pathname.startsWith(item.path) || (item.path === "/home" && location.pathname === "/")) ? "active" : ""}
          >
            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {item.icon}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;