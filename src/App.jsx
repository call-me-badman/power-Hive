import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import PHiveApp from "../apps/p_hive/App";
import LearningApp from "../apps/learning/App";

import Sidebar from "./components/dashboard/Sidebar";
import Topbar from "./components/dashboard/Topbar";
import StatCard from "./components/dashboard/StatCard";
import ReadingsTable from "./components/dashboard/ReadingsTable";
import Alerts from "./components/dashboard/Alerts";
import OverviewCharts from "./components/dashboard/OverviewCharts";


import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import EnergyUsage from "./pages/EnergyUsage";

import "./App.css";

/* DASHBOARD CONTENT */
function DashboardContent() {
  return (
    <div className="main">
      <Topbar />
      <div className="stats">
        <StatCard title="Voltage" value="230 V" />
        <StatCard title="Current" value="12.4 A" />
        <StatCard title="Power" value="2.85 kW" />
        <StatCard title="Energy Today" value="18.2 kWh" />
        <StatCard title="Power Factor" value="0.92" />
      </div>
      <div className="content">
        <ReadingsTable />
        <Alerts />
      </div>
      <OverviewCharts />
    </div>
  );
}

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
        <Route path="/dashboard" element={<DashboardContent />} />

        {/* Energy Usage */}
        <Route path="/energy-usage" element={<EnergyUsage />} />
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
