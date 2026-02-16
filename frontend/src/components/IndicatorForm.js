import React, { useState } from 'react';
import './IndicatorForm.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const IndicatorForm = ({ onAdded }) => {
  const [form, setForm] = useState({
    renewableEnergyPercent: '',
    waterUsage: '',
    wasteDiverted: '',
    ghgEmissions: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const { renewableEnergyPercent, waterUsage, wasteDiverted, ghgEmissions } = form;
    if ([renewableEnergyPercent, waterUsage, wasteDiverted, ghgEmissions].some(v => v === '')) return 'All fields are required';
    if (renewableEnergyPercent < 0 || renewableEnergyPercent > 100) return 'Energy % must be 0-100';
    if (waterUsage < 0 || waterUsage > 1000) return 'Water usage must be 0-1000';
    if (wasteDiverted < 0 || wasteDiverted > 100) return 'Waste % must be 0-100';
    if (ghgEmissions < 0 || ghgEmissions > 100) return 'GHG must be 0-100';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) { setMessage({ type: 'error', text: error }); return; }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/indicators`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          renewableEnergyPercent: Number(form.renewableEnergyPercent),
          waterUsage: Number(form.waterUsage),
          wasteDiverted: Number(form.wasteDiverted),
          ghgEmissions: Number(form.ghgEmissions)
        })
      });
      if (!res.ok) throw new Error('Failed to add indicator');
      setMessage({ type: 'success', text: '✓ Indicator added successfully!' });
      setForm({ renewableEnergyPercent: '', waterUsage: '', wasteDiverted: '', ghgEmissions: '' });
      setTimeout(() => setMessage(null), 4000);
      onAdded?.();
    } catch (err) {
      setMessage({ type: 'error', text: `✕ ${err.message}` });
    } finally { setLoading(false); }
  };

  const handleReset = () => {
    setForm({ renewableEnergyPercent: '', waterUsage: '', wasteDiverted: '', ghgEmissions: '' });
    setMessage(null);
  };

  return (
    <div className="indicator-form-container">
      <div className="form-header">
        <h3>📊 Log New Sustainability Data</h3>
        <p>Enter latest metric readings to update the dashboard in real-time</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-md-3 col-sm-6">
            <label className="form-label">🔋 Renewable Energy</label>
            <div className="input-group">
              <input 
                type="number" 
                className="form-control" 
                name="renewableEnergyPercent" 
                placeholder="0-100%" 
                value={form.renewableEnergyPercent} 
                onChange={handleChange} 
                min="0" 
                max="100" 
                required 
              />
              <span className="input-group-text">%</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <label className="form-label">💧 Water Usage</label>
            <div className="input-group">
              <input 
                type="number" 
                className="form-control" 
                name="waterUsage" 
                placeholder="0-1000 m³" 
                value={form.waterUsage} 
                onChange={handleChange} 
                min="0" 
                max="1000" 
                required 
              />
              <span className="input-group-text">m³</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <label className="form-label">♻️ Waste Diverted</label>
            <div className="input-group">
              <input 
                type="number" 
                className="form-control" 
                name="wasteDiverted" 
                placeholder="0-100%" 
                value={form.wasteDiverted} 
                onChange={handleChange} 
                min="0" 
                max="100" 
                required 
              />
              <span className="input-group-text">%</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <label className="form-label">🌱 GHG Emissions</label>
            <div className="input-group">
              <input 
                type="number" 
                className="form-control" 
                name="ghgEmissions" 
                placeholder="0-100 tCO2e" 
                value={form.ghgEmissions} 
                onChange={handleChange} 
                min="0" 
                max="100" 
                required 
              />
              <span className="input-group-text">tCO2e</span>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="btn btn-success btn-lg" 
            disabled={loading}
          >
            {loading ? '⏳ Saving...' : '✓ Add Indicator'}
          </button>
          <button 
            type="button" 
            className="btn btn-outline-secondary btn-lg" 
            onClick={handleReset}
            disabled={loading}
          >
            🔄 Clear Form
          </button>
        </div>
      </form>

      {message && (
        <div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'} alert-dismissible fade show`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage(null)}></button>
        </div>
      )}
    </div>
  );
};

export default IndicatorForm;
