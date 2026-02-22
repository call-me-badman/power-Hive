import { Routes, Route, Navigate } from "react-router-dom";
import PHiveApp from "../../apps/p_hive/App";
import LearningApp from "../../apps/learning/App";

function Router() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/p_hive" />} />

      {/* Apps */}
      <Route path="/p_hive/*" element={<PHiveApp />} />
      <Route path="/learning/*" element={<LearningApp />} />
      {/* <Route path="/learning/learning1.jsx" element={<learning1App />} /> */}
    </Routes>
  );
}

export default Router;