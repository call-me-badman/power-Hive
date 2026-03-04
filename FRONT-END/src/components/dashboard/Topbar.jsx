function Topbar() {
  const userName = localStorage.getItem("powerHiveUser") || "Guest";

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="topbar">
      <h3>{getGreeting()} ⚡ {userName}, Welcome to the Power Hive dashboard</h3>
    </div>
  );
}

export default Topbar;
