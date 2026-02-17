import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const ImplementationPage = () => {
  const timelinePhases = [
    {
      phase: 'Phase 1',
      title: 'Indicator Design & Baseline Data',
      duration: '1 month',
      deliverables: ['Indicator matrix', 'Baseline assessment report', 'Data collection protocols'],
      status: 'completed',
      color: '#22c55e'
    },
    {
      phase: 'Phase 2',
      title: 'Dashboard Development',
      duration: '2 months',
      deliverables: ['Prototype dashboard', 'UI/UX design', 'Backend architecture', 'API integration'],
      status: 'in-progress',
      color: '#f59e0b'
    },
    {
      phase: 'Phase 3',
      title: 'Data Integration & Testing',
      duration: '1 month',
      deliverables: ['IoT sensor integration', 'Data validation', 'User testing', 'Performance optimization'],
      status: 'upcoming',
      color: '#6b7280'
    },
    {
      phase: 'Phase 4',
      title: 'Training & Launch',
      duration: '1 month',
      deliverables: ['Staff training program', 'Sustainability reporting team', 'Official dashboard launch', 'Client onboarding'],
      status: 'upcoming',
      color: '#6b7280'
    }
  ];

  const budgetBreakdown = [
    {
      category: 'Indicator Framework & Baseline Assessment',
      amount: 8000,
      percentage: 20.8,
      description: 'Development of sustainability indicators and baseline data collection',
      icon: '📊'
    },
    {
      category: 'Dashboard Design & Software Development',
      amount: 15000,
      percentage: 38.9,
      description: 'UI/UX design, backend development, and cloud infrastructure',
      icon: '💻'
    },
    {
      category: 'IoT/Data Integration',
      amount: 7000,
      percentage: 18.2,
      description: 'Sensor hardware, data setup, and integration systems',
      icon: '🔌'
    },
    {
      category: 'Training & Capacity Building',
      amount: 3000,
      percentage: 7.8,
      description: 'Staff training programs and sustainability reporting team development',
      icon: '🎓'
    },
    {
      category: 'Communication & Visibility',
      amount: 2000,
      percentage: 5.2,
      description: 'Branding, outreach, and stakeholder communication materials',
      icon: '📢'
    },
    {
      category: 'Contingency (10%)',
      amount: 3500,
      percentage: 9.1,
      description: 'Risk management and unexpected expenses',
      icon: '🛡️'
    }
  ];

  const fundingPartners = [
    {
      name: 'UNDP / GEF Small Grants Programme',
      type: 'International Development',
      focus: 'Climate action and sustainable development',
      logo: '🌍',
      website: '#',
      status: 'target'
    },
    {
      name: 'Kenya Climate Innovation Center (KCIC)',
      type: 'National Innovation Hub',
      focus: 'Climate tech startups and innovation',
      logo: '🇰🇪',
      website: '#',
      status: 'target'
    },
    {
      name: 'EU SWITCH Africa Green Programme',
      type: 'European Development Fund',
      focus: 'Green economy and sustainable business',
      logo: '🇪🇺',
      website: '#',
      status: 'target'
    },
    {
      name: 'Sida / DANIDA Green Growth Funds',
      type: 'Scandinavian Development Aid',
      focus: 'Green growth and environmental sustainability',
      logo: '🇸🇪',
      website: '#',
      status: 'target'
    },
    {
      name: 'Safaricom Foundation',
      type: 'Private Sector CSR',
      focus: 'Technology for social impact',
      logo: '📱',
      website: '#',
      status: 'target'
    },
    {
      name: 'NCBA Bank',
      type: 'Private Sector CSR',
      focus: 'Sustainable finance and community development',
      logo: '🏦',
      website: '#',
      status: 'target'
    },
    {
      name: 'Equity Group Foundation',
      type: 'Private Sector Foundation',
      focus: 'Social impact and entrepreneurship',
      logo: '💼',
      website: '#',
      status: 'target'
    },
    {
      name: 'Voluntary Carbon Market (VCM) Programs',
      type: 'Carbon Market Platforms',
      focus: 'MRV digital innovations and carbon credits',
      logo: '🌱',
      website: '#',
      status: 'target'
    }
  ];

  const totalBudget = budgetBreakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="implementation-page">
      {/* Hero Section */}
      <section className="implementation-hero">
        <div className="container">
          <div className="hero-content">
            <h1>🚀 Project Implementation</h1>
            <p className="hero-subtitle">
              Comprehensive roadmap, budget allocation, and funding strategy for the 
              Sustainability Intelligence Dashboard implementation
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">4-5</div>
                <div className="stat-label">Months Duration</div>
              </div>
              <div className="stat">
                <div className="stat-number">${totalBudget.toLocaleString()}</div>
                <div className="stat-label">Total Budget</div>
              </div>
              <div className="stat">
                <div className="stat-number">8+</div>
                <div className="stat-label">Funding Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>📅 Implementation Timeline</h2>
            <p>Structured 4-phase approach to deliver a fully operational sustainability dashboard</p>
          </div>
          
          <div className="timeline-container">
            {timelinePhases.map((phase, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker" style={{ backgroundColor: phase.color }}>
                  <div className="phase-number">{index + 1}</div>
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{phase.title}</h3>
                    <div className="timeline-meta">
                      <span className="phase-duration">{phase.duration}</span>
                      <span className={`phase-status ${phase.status}`}>
                        {phase.status === 'completed' && '✅ Completed'}
                        {phase.status === 'in-progress' && '🔄 In Progress'}
                        {phase.status === 'upcoming' && '⏳ Upcoming'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="timeline-deliverables">
                    <h4>Key Deliverables:</h4>
                    <ul>
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="budget-section">
        <div className="container">
          <div className="section-header">
            <h2>💰 Budget Breakdown</h2>
            <p>Comprehensive cost allocation for the SID implementation project</p>
          </div>
          
          <div className="budget-overview">
            <div className="total-budget-card">
              <h3>Total Project Budget</h3>
              <div className="total-amount">${totalBudget.toLocaleString()}</div>
              <p>USD for complete implementation</p>
            </div>
          </div>
          
          <div className="budget-grid">
            {budgetBreakdown.map((item, index) => (
              <div key={index} className="budget-card">
                <div className="budget-header">
                  <div className="budget-icon">{item.icon}</div>
                  <div className="budget-amount">${item.amount.toLocaleString()}</div>
                </div>
                
                <h4>{item.category}</h4>
                <p className="budget-description">{item.description}</p>
                
                <div className="budget-progress">
                  <div className="progress-info">
                    <span>Budget Allocation</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: item.percentage > 30 ? '#22c55e' : 
                                       item.percentage > 15 ? '#f59e0b' : '#6b7280'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Partners Section */}
      <section className="funding-section">
        <div className="container">
          <div className="section-header">
            <h2>🤝 Potential Funding Partners</h2>
            <p>Strategic partnerships to support SID implementation and scaling</p>
          </div>
          
          <div className="funding-categories">
            <div className="category-section">
              <h3>🌍 International Development Partners</h3>
              <div className="partners-grid">
                {fundingPartners.filter(p => p.type.includes('International') || p.type.includes('European') || p.type.includes('Scandinavian')).map((partner, index) => (
                  <div key={index} className="partner-card">
                    <div className="partner-logo">{partner.logo}</div>
                    <h4>{partner.name}</h4>
                    <div className="partner-type">{partner.type}</div>
                    <p className="partner-focus">{partner.focus}</p>
                    <div className="partner-status">
                      <span className="status-badge target">Target Partner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="category-section">
              <h3>🇰🇪 National & Regional Partners</h3>
              <div className="partners-grid">
                {fundingPartners.filter(p => p.type.includes('National') || p.type.includes('Kenya')).map((partner, index) => (
                  <div key={index} className="partner-card">
                    <div className="partner-logo">{partner.logo}</div>
                    <h4>{partner.name}</h4>
                    <div className="partner-type">{partner.type}</div>
                    <p className="partner-focus">{partner.focus}</p>
                    <div className="partner-status">
                      <span className="status-badge target">Target Partner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="category-section">
              <h3>💼 Private Sector & CSR</h3>
              <div className="partners-grid">
                {fundingPartners.filter(p => p.type.includes('Private')).map((partner, index) => (
                  <div key={index} className="partner-card">
                    <div className="partner-logo">{partner.logo}</div>
                    <h4>{partner.name}</h4>
                    <div className="partner-type">{partner.type}</div>
                    <p className="partner-focus">{partner.focus}</p>
                    <div className="partner-status">
                      <span className="status-badge target">Target Partner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="category-section">
              <h3>🌱 Carbon Market & Innovation</h3>
              <div className="partners-grid">
                {fundingPartners.filter(p => p.type.includes('Carbon') || p.type.includes('Market')).map((partner, index) => (
                  <div key={index} className="partner-card">
                    <div className="partner-logo">{partner.logo}</div>
                    <h4>{partner.name}</h4>
                    <div className="partner-type">{partner.type}</div>
                    <p className="partner-focus">{partner.focus}</p>
                    <div className="partner-status">
                      <span className="status-badge target">Target Partner</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>🚀 Ready to Partner with SID?</h2>
            <p>
              Join us in transforming sustainability monitoring for Kenya's eco-conference facilities. 
              Whether you're a potential funding partner, technology provider, or early adopter, 
              we'd love to collaborate.
            </p>
            <div className="cta-actions">
              <a href="mailto:info@geo-apnet.co.ke?subject=SID%20Partnership%20Inquiry" className="btn-premium btn-premium-primary btn-premium-large">
                🤝 Become a Partner
              </a>
              <Link to="/team" className="btn-premium btn-premium-secondary btn-premium-large">
                👥 Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .implementation-page {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Hero Section */
        .implementation-hero {
          background: var(--gradient-hero);
          color: var(--white);
          padding: var(--space-24) 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-12);
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Timeline Section */
        .timeline-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

        .timeline-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          gap: var(--space-6);
          margin-bottom: var(--space-12);
          position: relative;
        }

        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 20px;
          top: 60px;
          bottom: -48px;
          width: 2px;
          background: var(--gray-200);
        }

        .timeline-marker {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-weight: 700;
          flex-shrink: 0;
        }

        .timeline-content {
          flex: 1;
          background: var(--gray-50);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          border-left: 4px solid #22c55e;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-4);
        }

        .timeline-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .timeline-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--space-2);
        }

        .phase-duration {
          background: var(--primary-green);
          color: var(--white);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .phase-status {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .phase-status.completed {
          color: #22c55e;
        }

        .phase-status.in-progress {
          color: #f59e0b;
        }

        .phase-status.upcoming {
          color: #6b7280;
        }

        .timeline-deliverables h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: var(--space-2);
        }

        .timeline-deliverables ul {
          list-style: none;
          padding: 0;
        }

        .timeline-deliverables li {
          position: relative;
          padding-left: var(--space-4);
          margin-bottom: var(--space-1);
          color: var(--gray-600);
          font-size: 0.875rem;
        }

        .timeline-deliverables li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-green);
          font-weight: 700;
        }

        /* Budget Section */
        .budget-section {
          padding: var(--space-24) 0;
          background: var(--gray-50);
        }

        .budget-overview {
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .total-budget-card {
          background: var(--gradient-primary);
          color: var(--white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          display: inline-block;
          box-shadow: var(--shadow-lg);
        }

        .total-budget-card h3 {
          font-size: 1.25rem;
          margin-bottom: var(--space-4);
        }

        .total-amount {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-2);
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-6);
        }

        .budget-card {
          background: var(--white);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--gray-200);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-4);
        }

        .budget-icon {
          font-size: 2rem;
        }

        .budget-amount {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-green);
        }

        .budget-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .budget-description {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin-bottom: var(--space-4);
          line-height: 1.5;
        }

        .budget-progress {
          margin-top: var(--space-4);
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: var(--space-2);
        }

        .progress-bar {
          height: 6px;
          background: var(--gray-200);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          transition: width var(--transition-base);
        }

        /* Funding Section */
        .funding-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

        .category-section {
          margin-bottom: var(--space-12);
        }

        .category-section h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-6);
          text-align: center;
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .partner-card {
          background: var(--gray-50);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: all var(--transition-base);
          border: 1px solid var(--gray-200);
        }

        .partner-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .partner-logo {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .partner-card h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .partner-type {
          color: var(--primary-green);
          font-weight: 600;
          font-size: 0.75rem;
          margin-bottom: var(--space-3);
        }

        .partner-focus {
          color: var(--gray-600);
      font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: var(--space-4);
        }

        .partner-status {
          margin-top: var(--space-4);
        }

        .status-badge {
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-badge.target {
          background: var(--accent-green);
          color: var(--white);
        }

        /* CTA Section */
        .cta-section {
          padding: var(--space-24) 0;
          background: var(--gradient-primary);
          color: var(--white);
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
        }

        .cta-content p {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-stats {
            gap: var(--space-6);
          }

          .timeline-item {
            flex-direction: column;
            gap: var(--space-4);
          }

          .timeline-item:not(:last-child)::after {
            display: none;
          }

          .timeline-header {
            flex-direction: column;
            gap: var(--space-3);
          }

          .timeline-meta {
            align-items: flex-start;
          }

          .budget-grid {
            grid-template-columns: 1fr;
          }

          .partners-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ImplementationPage;
