import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import './Dashboard-premium.css';
import '../styles/design-system.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Dashboard = forwardRef(({ lastUpdatedFromForm }, ref) => {
  const [indicators, setIndicators] = useState([]);
  const [sensors, setSensors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [usingMockData, setUsingMockData] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');

      // Fetch last 10 indicators
      const resIndicators = await fetch(`${API_URL}/api/indicators`);
      if (!resIndicators.ok) throw new Error('Failed to fetch indicators');
      const indicatorsData = await resIndicators.json();
      setIndicators(indicatorsData.slice(0, 10));

      // Fetch live sensor readings
      const resSensors = await fetch(`${API_URL}/api/sensors`);
      if (!resSensors.ok) throw new Error('Failed to fetch sensors');
      const sensorsData = await resSensors.json();
      setSensors(sensorsData.readings || {});
    } catch (err) {
      console.error(err);
      // Use mock data when backend is unavailable
      setIndicators([
        {
          _id: '1',
          renewableEnergyPercent: 65,
          waterUsage: 22,
          wasteDiverted: 78,
          ghgEmissions: 8.5,
          createdAt: new Date().toISOString()
        },
        {
          _id: '2',
          renewableEnergyPercent: 62,
          waterUsage: 24,
          wasteDiverted: 75,
          ghgEmissions: 9.2,
          createdAt: new Date(Date.now() - 3600000).toISOString()
        },
        {
          _id: '3',
          renewableEnergyPercent: 58,
          waterUsage: 26,
          wasteDiverted: 72,
          ghgEmissions: 10.1,
          createdAt: new Date(Date.now() - 7200000).toISOString()
        }
      ]);
      setSensors({
        energy: 65,
        water: 22,
        waste: 78,
        ghg: 8.5
      });
      setUsingMockData(true);
      setError(''); // Clear error since we're using mock data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // auto-refresh every 10s
    return () => clearInterval(interval);
  }, []);

  // Allow parent to refresh dashboard after form submission
  useImperativeHandle(ref, () => ({
    refresh: fetchData
  }));

  if (loading) return (
    <div className="dashboard-loading-premium">
      <div className="loading-content">
        <div className="spinner-large"></div>
        <h3>Loading Sustainability Intelligence</h3>
        <p>Fetching real-time environmental data...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="error-container-premium">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h3>Connection Error</h3>
        <p>{error}</p>
        <button className="btn-premium btn-premium-primary" onClick={fetchData}>
          🔄 Retry Connection
        </button>
      </div>
    </div>
  );

  if (!indicators.length) return (
    <div className="empty-state-premium">
      <div className="empty-content">
        <div className="empty-icon">📊</div>
        <h3>No Data Yet</h3>
        <p>Start logging sustainability metrics to build your dashboard</p>
        <button className="btn-premium btn-premium-primary">
          + Add First Entry
        </button>
      </div>
    </div>
  );

  const latest = indicators[0] || {};

  // Enhanced KPI cards data
  const kpis = [
    { 
      title: '🔋 Renewable Energy', 
      icon: '⚡', 
      value: sensors.energy ?? latest.renewableEnergyPercent, 
      target: 70, 
      unit: '%', 
      trend: '+12%', 
      status: 'excellent',
      description: 'Solar power generation vs total energy usage'
    },
    { 
      title: '💧 Water Usage', 
      icon: '💧', 
      value: sensors.water ?? latest.waterUsage, 
      target: 25, 
      unit: 'm³', 
      trend: '-8%', 
      status: 'good',
      description: 'Daily water consumption with recycling efforts'
    },
    { 
      title: '♻️ Waste Diverted', 
      icon: '♻️', 
      value: sensors.waste ?? latest.wasteDiverted, 
      target: 75, 
      unit: '%', 
      trend: '+15%', 
      status: 'excellent',
      description: 'Percentage of waste recycled or composted'
    },
    { 
      title: '🌍 GHG Emissions', 
      icon: '🌍', 
      value: sensors.ghg ?? latest.ghgEmissions, 
      target: 10, 
      unit: 'tCO₂e', 
      trend: '-18%', 
      status: 'good',
      description: 'Carbon footprint from operations'
    }
  ];

  // Social Indicators KPIs
  const socialKpis = [
    {
      title: '👩‍💼 Gender Parity',
      icon: '👩‍💼',
      value: latest.genderParity ?? 42,
      target: 50,
      unit: '%',
      trend: '+5%',
      status: 'good',
      description: 'Women in workforce and leadership'
    },
    {
      title: '🎓 Youth Engagement',
      icon: '🎓',
      value: latest.youthTraining ?? 156,
      target: 200,
      unit: 'sessions',
      trend: '+23%',
      status: 'excellent',
      description: 'Training sessions for local youth'
    },
    {
      title: '🤝 Local Sourcing',
      icon: '🤝',
      value: latest.localSourcing ?? 850000,
      target: 1000000,
      unit: 'KES',
      trend: '+12%',
      status: 'good',
      description: 'Annual spend with local suppliers'
    },
    {
      title: '♿ Accessibility',
      icon: '♿',
      value: latest.accessibility ?? 85,
      target: 100,
      unit: '%',
      trend: '+8%',
      status: 'excellent',
      description: 'Facility accessibility compliance'
    }
  ];

  // Governance Indicators KPIs
  const governanceKpis = [
    {
      title: '✅ Compliance Score',
      icon: '✅',
      value: latest.complianceScore ?? 92,
      target: 100,
      unit: '%',
      trend: '+3%',
      status: 'excellent',
      description: 'Eco Tourism Kenya & ISO standards'
    },
    {
      title: '📊 Transparency Index',
      icon: '📊',
      value: latest.transparencyIndex ?? 4,
      target: 4,
      unit: 'reports',
      trend: 'stable',
      status: 'excellent',
      description: 'Annual sustainability reports published'
    },
    {
      title: '🤝 Stakeholder Events',
      icon: '🤝',
      value: latest.stakeholderEvents ?? 12,
      target: 12,
      unit: 'events',
      trend: '+20%',
      status: 'excellent',
      description: 'Community and partner engagement events'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'excellent': return '#22c55e';
      case 'good': return '#4CAF50';
      case 'warning': return '#f59e0b';
      case 'critical': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="dashboard-premium">
      {/* Dashboard Header */}
      <div className="dashboard-header-premium">
        <div className="header-content">
          <div className="header-text">
            <h1>🌍 Sustainability Intelligence Dashboard</h1>
            <p>Real-time environmental metrics with live updates every 10 seconds</p>
          </div>
          <div className="header-controls">
            <div className="time-range-selector">
              {['1h', '24h', '7d', '30d'].map((range) => (
                <button
                  key={range}
                  className={`range-btn ${selectedTimeRange === range ? 'active' : ''}`}
                  onClick={() => setSelectedTimeRange(range)}
                >
                  {range}
                </button>
              ))}
            </div>
            <button className="btn-premium btn-premium-secondary" onClick={fetchData}>
              🔄 Refresh
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="kpi-section-premium">
        <div className="section-header">
          <h2>Current Performance Metrics</h2>
          <div className="header-indicators">
            {usingMockData && (
              <div className="mock-data-indicator">
                <span className="indicator-icon">📊</span>
                <span>Sample Data</span>
              </div>
            )}
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>LIVE</span>
            </div>
          </div>
        </div>
        
        <div className="kpi-grid-premium">
          {kpis.map((kpi, idx) => {
            const percentage = Math.min((kpi.value / kpi.target) * 100, 100);
            const statusColor = getStatusColor(kpi.status);
            
            return (
              <div key={idx} className="kpi-card-premium">
                <div className="kpi-header">
                  <div className="kpi-icon">{kpi.icon}</div>
                  <div className="kpi-trend" style={{ color: statusColor }}>
                    {kpi.trend}
                  </div>
                </div>
                
                <div className="kpi-content">
                  <h3>{kpi.title}</h3>
                  <div className="kpi-value">
                    {typeof kpi.value === 'number' ? kpi.value.toFixed(1) : '—'} 
                    <span className="unit">{kpi.unit}</span>
                  </div>
                  
                  <div className="progress-container">
                    <div className="progress-info">
                      <span>Progress to Target</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>
                    <div className="progress-bar-premium">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: statusColor 
                        }}
                      ></div>
                    </div>
                    <div className="target-info">
                      Target: {kpi.target}{kpi.unit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Indicators Section */}
      <div className="kpi-section-premium">
        <div className="section-header">
          <h2>👥 Social Impact Metrics</h2>
          <div className="header-indicators">
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>LIVE</span>
            </div>
          </div>
        </div>
        
        <div className="kpi-grid-premium">
          {socialKpis.map((kpi, idx) => {
            const percentage = Math.min((kpi.value / kpi.target) * 100, 100);
            const statusColor = getStatusColor(kpi.status);
            
            return (
              <div key={idx} className="kpi-card-premium">
                <div className="kpi-header">
                  <div className="kpi-icon">{kpi.icon}</div>
                  <div className="kpi-trend" style={{ color: statusColor }}>
                    {kpi.trend}
                  </div>
                </div>
                
                <div className="kpi-content">
                  <h3>{kpi.title}</h3>
                  <div className="kpi-value">
                    {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : '—'} 
                    <span className="unit">{kpi.unit}</span>
                  </div>
                  
                  <div className="progress-container">
                    <div className="progress-info">
                      <span>Progress to Target</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>
                    <div className="progress-bar-premium">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: statusColor 
                        }}
                      ></div>
                    </div>
                    <div className="target-info">
                      Target: {kpi.target}{kpi.unit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Governance Indicators Section */}
      <div className="kpi-section-premium">
        <div className="section-header">
          <h2>🏛️ Governance & Compliance</h2>
          <div className="header-indicators">
            <div className="live-indicator">
              <div className="live-dot"></div>
              <span>LIVE</span>
            </div>
          </div>
        </div>
        
        <div className="kpi-grid-premium">
          {governanceKpis.map((kpi, idx) => {
            const percentage = Math.min((kpi.value / kpi.target) * 100, 100);
            const statusColor = getStatusColor(kpi.status);
            
            return (
              <div key={idx} className="kpi-card-premium">
                <div className="kpi-header">
                  <div className="kpi-icon">{kpi.icon}</div>
                  <div className="kpi-trend" style={{ color: statusColor }}>
                    {kpi.trend}
                  </div>
                </div>
                
                <div className="kpi-content">
                  <h3>{kpi.title}</h3>
                  <div className="kpi-value">
                    {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : '—'} 
                    <span className="unit">{kpi.unit}</span>
                  </div>
                  
                  <div className="progress-container">
                    <div className="progress-info">
                      <span>Progress to Target</span>
                      <span>{Math.round(percentage)}%</span>
                    </div>
                    <div className="progress-bar-premium">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: statusColor 
                        }}
                      ></div>
                    </div>
                    <div className="target-info">
                      Target: {kpi.target}{kpi.unit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact Equivalence */}
      <div className="impact-section-premium">
        <div className="section-header">
          <h2>🌱 Environmental Impact Equivalence</h2>
          <p>Translate your sustainability metrics into meaningful impact</p>
        </div>
        
        <div className="impact-grid-premium">
          <div className="impact-card-premium trees">
            <div className="impact-icon">🌳</div>
            <div className="impact-value">
              {Math.round((sensors.energy ?? latest.renewableEnergyPercent) * 50)}
            </div>
            <div className="impact-label">Trees Saved Annually</div>
            <div className="impact-description">
              Equivalent to trees that would absorb this amount of CO₂
            </div>
          </div>
          
          <div className="impact-card-premium homes">
            <div className="impact-icon">🏠</div>
            <div className="impact-value">
              {Math.round((sensors.energy ?? latest.renewableEnergyPercent) * 10)}
            </div>
            <div className="impact-label">Homes Powered</div>
            <div className="impact-description">
              Number of households powered by your renewable energy
            </div>
          </div>
          
          <div className="impact-card-premium carbon">
            <div className="impact-icon">�</div>
            <div className="impact-value">
              {(latest.ghgEmissions || 0).toFixed(1)}
            </div>
            <div className="impact-label">Tons CO₂ Reduced</div>
            <div className="impact-description">
              Carbon emissions offset through your sustainability efforts
            </div>
          </div>
        </div>
      </div>

      {/* Recent Entries Table */}
      <div className="table-section-premium">
        <div className="section-header">
          <h2>📋 Historical Data</h2>
          <p>Detailed log of all sustainability measurements</p>
        </div>
        
        <div className="table-container-premium">
          <table className="data-table-premium">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>🔋 Energy %</th>
                <th>💧 Water m³</th>
                <th>♻️ Waste %</th>
                <th>🌍 GHG tCO2e</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {indicators.map((i, index) => (
                <tr key={i._id} className={index === 0 ? 'latest-row' : ''}>
                  <td className="timestamp">
                    {new Date(i.createdAt).toLocaleString()}
                    {index === 0 && <span className="latest-badge">LATEST</span>}
                  </td>
                  <td><span className="metric-badge energy">{i.renewableEnergyPercent}%</span></td>
                  <td><span className="metric-badge water">{i.waterUsage}</span></td>
                  <td><span className="metric-badge waste">{i.wasteDiverted}%</span></td>
                  <td><span className="metric-badge emissions">{i.ghgEmissions}</span></td>
                  <td>
                    <span className="status-indicator good">●</span>
                    <span className="status-text">Good</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;
