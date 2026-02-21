import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Dashboard", path: "/dashboard" },
    // { name: "Login", path: "/login" },
    // { name: "Sign up", path: "/signup" },
    { name: "Energy Usage", path: "/energy-usage" },
    { name: "Devices", path: "/devices" },
    { name: "Reports", path: "/reports" },
    { name: "System Logs", path: "/system-logs" },
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
            <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;