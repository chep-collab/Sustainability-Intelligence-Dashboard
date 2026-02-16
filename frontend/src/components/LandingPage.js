import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const LandingPage = ({ onLaunch }) => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const res = await fetch(`${API_URL}/api/indicators`);
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length) setLatest(data[0]);
      } catch (err) {
        // ignore
      }
    };
    fetchLatest();
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">SID</h1>
          <p className="hero-tagline">Sustainability Intelligence Dashboard</p>
          <div className="taglines-grid">
            <div className="tagline-item">
              <span className="tagline-highlight">Real-time</span>
              <p>Live sustainability metrics</p>
            </div>
            <div className="tagline-item">
              <span className="tagline-highlight">Transparent</span>
              <p>Full visibility into impact</p>
            </div>
            <div className="tagline-item">
              <span className="tagline-highlight">Actionable</span>
              <p>Data-driven decisions</p>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={onLaunch}>
              Launch Dashboard
            </button>
            <a href="mailto:demo@yourorg.org?subject=SID%20Demo" className="btn btn-secondary">
              Request Live Demo
            </a>
          </div>
        </div>
      </header>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How SID Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>MEASURE</h3>
              <p>Track energy, water, waste, and GHG emissions in real time with automated IoT integration or manual entry.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>IMPROVE</h3>
              <p>Identify trends, set targets, and make data-driven decisions to reduce environmental impact across your operations.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>SHOWCASE</h3>
              <p>Generate reports and share your sustainability progress with stakeholders, donors, and regulators instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Metrics */}
      {latest && (
        <section className="live-metrics">
          <div className="container">
            <h2>Live Metrics Sample</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">🔋 Renewable Energy</div>
                <div className="metric-value">{latest.renewableEnergyPercent}%</div>
                <div className="metric-target">Target: 70%</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">💧 Water Usage</div>
                <div className="metric-value">{latest.waterUsage}</div>
                <div className="metric-target">Target: 25 m³</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">♻️ Waste Diverted</div>
                <div className="metric-value">{latest.wasteDiverted}%</div>
                <div className="metric-target">Target: 75%</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">🌍 GHG Emissions</div>
                <div className="metric-value">{latest.ghgEmissions}</div>
                <div className="metric-target">Target: 10 tCO2e</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose SID?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📊</div>
              <h3>Real-Time Dashboards</h3>
              <p>Monitor all sustainability metrics in one unified view with live updates every 10 seconds.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔌</div>
              <h3>IoT Integration</h3>
              <p>Connect sensors via MQTT for automatic, continuous data collection without manual entry.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <h3>Target Tracking</h3>
              <p>Set goals and visualize progress toward ESG targets with trend analysis and benchmarking.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📄</div>
              <h3>Automated Reports</h3>
              <p>Generate one-page summaries and investor-ready ESG reports with a single click.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <h3>Impact Equivalence</h3>
              <p>Communicate impact in meaningful terms: trees saved, homes powered, CO₂ offset.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <h3>Enterprise-Grade Security</h3>
              <p>Built on MongoDB & Node.js with CORS protection, data encryption, and audit logs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <h2>Trusted by Sustainability Leaders</h2>
          <div className="trusted-grid">
            <div className="trust-card">
              <h4>Partner A</h4>
              <p className="industry">Environmental NGO</p>
            </div>
            <div className="trust-card">
              <h4>Partner B</h4>
              <p className="industry">Carbon Offset Vendor</p>
            </div>
            <div className="trust-card">
              <h4>Donor C</h4>
              <p className="industry">Impact Investor</p>
            </div>
            <div className="trust-card">
              <h4>NGO D</h4>
              <p className="industry">Sustainability Institute</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Measure, Improve, and Showcase Your Impact?</h2>
          <p>Join organizations transforming sustainability data into competitive advantage.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={onLaunch}>
              Get Started Now
            </button>
            <a href="mailto:demo@yourorg.org?subject=SID%20Enterprise%20Demo" className="btn btn-secondary btn-large">
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 SID Sustainability Intelligence Dashboard. Built for Impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
