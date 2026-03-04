import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import ReadingsTable from "../components/dashboard/ReadingsTable";
import Alerts from "../components/dashboard/Alerts";
import OverviewCharts from "../components/dashboard/OverviewCharts";

function Dashboard() {
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

export default Dashboard;
