import { useNavigate } from "react-router-dom";

function ReadingsTable() {
  const navigate = useNavigate();

  const handleRowClick = (device) => {
    navigate("/devices", { state: { device } });
  };
  return (
    <div className="table-container">
      <h4>Latest Electrical Readings</h4>

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
          <tr onClick={() => handleRowClick({ name: "Main Line", voltage: 230, current: 12.4, power: 2852, status: "Normal", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Main Line</td>
            <td>230</td>
            <td>12.4</td>
            <td>2852</td>
            <td className="normal">Normal</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Motor 1", voltage: 220, current: 8.2, power: 1804, status: "Running", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Motor 1</td>
            <td>220</td>
            <td>8.2</td>
            <td>1804</td>
            <td className="running">Running</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Heater", voltage: 230, current: 10, power: 2300, status: "High Load", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Heater</td>
            <td>230</td>
            <td>10</td>
            <td>2300</td>
            <td className="warning">High Load</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Generator", voltage: 240, current: 15, power: 3600, status: "Active", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Generator</td>
            <td>240</td>
            <td>15</td>
            <td>3600</td>
            <td className="active-status">Active</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Fridge", voltage: 288, current: 10.5, power: 1563, status: "Running", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Fridge</td>
            <td>288</td>
            <td>10.5</td>
            <td>1563</td>
            <td className="running">Running</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Television", voltage: 305, current: 8.5, power: 2000, status: "Normal", switchedOn: false })} style={{ cursor: "pointer" }}>
            <td>Television</td>
            <td>305</td>
            <td>8.5</td>
            <td>2000</td>
            <td className="normal">Normal</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Kettle", voltage: 30, current: 8, power: 600, status: "Normal", switchedOn: false })} style={{ cursor: "pointer" }}>
            <td>Kettle</td>
            <td>30</td>
            <td>8</td>
            <td>600</td>
            <td className="running">Normal</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Fan", voltage: 230, current: 1, power: 80, status: "Active", switchedOn: true })} style={{ cursor: "pointer" }}>
            <td>Fan</td>
            <td>230</td>
            <td>1</td>
            <td>80</td>
            <td className="active-status">Active</td>
          </tr>
          <tr onClick={() => handleRowClick({ name: "Iron box", voltage: 230, current: 3.35, power: 770, status: "High load", switchedOn: false })} style={{ cursor: "pointer" }}>
            <td>Iron box</td>
            <td>230</td>
            <td>3.35</td>
            <td>770</td>
            <td className="warning">High load</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ReadingsTable;