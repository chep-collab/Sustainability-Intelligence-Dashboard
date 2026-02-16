import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const SensorPanel = () => {
  const [status, setStatus] = useState({
    mqttConnected: false,
    activeSensors: 0,
    lastUpdate: null
  });
  const [loading, setLoading] = useState(true);
  const [mockMessage, setMockMessage] = useState(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/sensors/status`);
      if (!res.ok) throw new Error('Failed to fetch sensor status');
      const json = await res.json();
      setStatus(json);
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  const publishMockData = async () => {
    try {
      const res = await fetch(`${API_URL}/api/sensors/mock`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to publish mock data');
      const json = await res.json();
      setMockMessage(json.message);
      fetchStatus();
      setTimeout(() => setMockMessage(null), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>IoT Sensor Panel</h2>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className={`card p-3 text-center ${status.mqttConnected ? 'border-success' : 'border-danger'}`}>
            <h5>MQTT Connection</h5>
            <p>{status.mqttConnected ? 'Connected ✅' : 'Disconnected ❌'}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5>Active Sensors</h5>
            <p>{status.activeSensors}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5>Last Update</h5>
            <p>{status.lastUpdate ? new Date(status.lastUpdate).toLocaleTimeString() : '-'}</p>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className={`card p-3 text-center ${status.mqttConnected ? 'border-success' : 'border-danger'}`}>
            <h5>MQTT</h5>
            <p>{status.mqttConnected ? 'Connected ✅' : 'Disconnected ❌'}</p>
            <p>Energy: {status.readings?.energy ?? '-'}%</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Water (m³)</h5>
            <p>{status.readings?.water ?? '-'}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>Waste %</h5>
            <p>{status.readings?.waste ?? '-'}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 text-center">
            <h5>GHG (tCO2e)</h5>
            <p>{status.readings?.ghg ?? '-'}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={publishMockData}>Publish Mock Data</button>
        <button className="btn btn-secondary" onClick={fetchStatus}>Refresh Sensor List</button>
      </div>
      {mockMessage && <div className="alert alert-success mt-2">{mockMessage}</div>}

      <section className="mt-4">
        <h4>Setup Guide (Demo Mode)</h4>
        <ul>
          <li>Connect IoT sensors to your MQTT broker</li>
          <li>Subscribe to topics: <code>sensors/energy, sensors/water, sensors/waste, sensors/ghg</code></li>
          <li>Message format: Numeric value per topic</li>
          <li>Example Mosquitto CLI publish: <code>mosquitto_pub -t sensors/energy -m 65</code></li>
        </ul>
      </section>
    </div>
  );
};

export default SensorPanel;
