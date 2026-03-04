import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import PHiveApp from "../apps/p_hive/App";
import LearningApp from "../apps/learning/App";

import Sidebar from "./components/dashboard/Sidebar";

import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EnergyUsage from "./pages/EnergyUsage";
import Devices from "./pages/Devices";
import Reports from "./pages/Reports";
import SystemLogs from "./pages/SystemLogs";

import "./App.css";

/* SHARED LAYOUT */
function Layout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />
    </div>
  );
}

/*  MAIN APP ROUTER  */
function App() {
  return (
    <Routes>
      {/* Authentication Pages */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}

      {/* Home Page */}
      <Route path="/home/*" element={<PHiveApp />} />

      <Route element={<Layout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Energy Usage */}
        <Route path="/energy-usage" element={<EnergyUsage />} />

        {/* Devices */}
        <Route path="/devices" element={<Devices />} />

        {/* Reports */}
        <Route path="/reports" element={<Reports />} />

        {/* System Logs */}
        <Route path="/system-logs" element={<SystemLogs />} />
      </Route>

      {/* Redirect Root to Home or Dashboard */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Other Apps (without shared sidebar if intended, but user asked for all) */}
      <Route path="/learning/*" element={<LearningApp />} />

      {/* Catch All Unknown Routes */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
