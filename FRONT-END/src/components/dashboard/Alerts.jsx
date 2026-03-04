import React, { useState } from 'react';

function Alerts() {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'High load detected on main circuit', time: '10 mins ago' },
    { id: 2, type: 'critical', message: 'Voltage drop below 210V in Wing A', time: '25 mins ago' },
    { id: 3, type: 'info', message: 'Scheduled maintenance at 02:00 PM', time: '1 hour ago' },
    { id: 4, type: 'warning', message: 'Unusual energy spike in Storage 2', time: '3 hours ago' },
  ]);

  const handleClearAll = () => {
    setAlerts([]);
  };

  return (
    <div className="alerts-container">
      <div className="alerts-header">
        <h4>Recent Alerts 🔔</h4>
        <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="alerts-list">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} className={`alert-item ${alert.type}`}>
              <div className="alert-content">
                <span className="alert-message">{alert.message}</span>
                <span className="alert-time">{alert.time}</span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: '#64748b', fontSize: '14px' }}>
            No new alerts.
          </div>
        )}
      </div>

      <style>{`
        .alerts-container {
          flex: 1;
          background: #e8ebf3;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #cfd6e6;
          max-height: 500px;
          display: flex;
          flex-direction: column;
        }

        .alerts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .alerts-header h4 {
          margin: 0;
          color: #1e293b;
          font-weight: 600;
        }

        .clear-btn {
          background: none;
          border: none;
          color: #5562c1;
          font-size: 13px;
          cursor: pointer;
          font-weight: 500;
        }

        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
        }

        .alert-item {
          padding: 12px;
          border-radius: 8px;
          background: #ffffff;
          border-left: 4px solid #cfd6e6;
          transition: transform 0.2s;
        }

        .alert-item:hover {
          transform: translateX(4px);
        }

        .alert-item.critical {
          border-left-color: #ef4444;
        }

        .alert-item.warning {
          border-left-color: #f97316;
        }

        .alert-item.info {
          border-left-color: #3b82f6;
        }

        .alert-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .alert-message {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }

        .alert-time {
          font-size: 12px;
          color: #64748b;
        }
      `}</style>
    </div>
  );
}

export default Alerts;
