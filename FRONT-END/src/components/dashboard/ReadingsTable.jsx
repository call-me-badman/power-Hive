function ReadingsTable() {
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
          <tr>
            <td>Main Line</td>
            <td>230</td>
            <td>12.4</td>
            <td>2852</td>
            <td className="normal">Normal</td>
          </tr>
          <tr>
            <td>Motor 1</td>
            <td>220</td>
            <td>8.2</td>
            <td>1804</td>
            <td className="running">Running</td>
          </tr>
          <tr>
            <td>Heater</td>
            <td>230</td>
            <td>10</td>
            <td>2300</td>
            <td className="warning">High Load</td>
          </tr>
          <tr>
            <td>Generator</td>
            <td>240</td>
            <td>15</td>
            <td>3600</td>
            <td className="active-status">Active</td>
          </tr>
          <tr>
            <td>Fridge</td>
            <td>288</td>
            <td>10.5</td>
            <td>1563</td>
            <td className="running">Running</td>
          </tr>
          <tr>
            <td>Television</td>
            <td>305</td>
            <td>8.5</td>
            <td>2000</td>
            <td className="normal">Normal</td>
          </tr>
          <tr>
            <td>Kettle</td>
            <td>30</td>
            <td>8</td>
            <td>600</td>
            <td className="running">Normal</td>
          </tr>
          <tr>
            <td>Fan</td>
            <td>230</td>
            <td>1</td>
            <td>80</td>
            <td className="active-status">Active</td>
          </tr>
          <tr>
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