import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const FeaturesPage = () => {
  const features = [
    {
      category: 'Real-Time Monitoring',
      icon: '📊',
      color: '#0d4f2a',
      items: [
        {
          title: 'Live Dashboard',
          description: 'Monitor all sustainability metrics in real-time with updates every 10 seconds.',
          benefits: ['Instant visibility', 'Proactive alerts', 'Trend analysis']
        },
        {
          title: 'Custom KPIs',
          description: 'Define and track the metrics that matter most to your organization.',
          benefits: ['Flexible configuration', 'Industry-specific', 'Goal alignment']
        },
        {
          title: 'Mobile Access',
          description: 'Access your sustainability data anywhere with our responsive mobile interface.',
          benefits: ['On-the-go monitoring', 'Push notifications', 'Offline mode']
        }
      ]
    },
    {
      category: 'IoT Integration',
      icon: '🔌',
      color: '#0d8b7f',
      items: [
        {
          title: 'MQTT Connectivity',
          description: 'Seamlessly connect IoT sensors for automated data collection.',
          benefits: ['Real-time data', 'No manual entry', 'Scalable architecture']
        },
        {
          title: 'Sensor Management',
          description: 'Manage and monitor all your IoT devices from a centralized dashboard.',
          benefits: ['Device health', 'Battery monitoring', 'Remote configuration']
        },
        {
          title: 'Data Validation',
          description: 'Automated quality checks ensure data accuracy and reliability.',
          benefits: ['Anomaly detection', 'Data cleansing', 'Quality scores']
        }
      ]
    },
    {
      category: 'Analytics & Insights',
      icon: '📈',
      color: '#4CAF50',
      items: [
        {
          title: 'Predictive Analytics',
          description: 'AI-powered insights forecast trends and recommend optimizations.',
          benefits: ['Early warnings', 'Optimization suggestions', 'Risk assessment']
        },
        {
          title: 'Benchmarking',
          description: 'Compare your performance against industry standards and peers.',
          benefits: ['Industry context', 'Competitive analysis', 'Best practices']
        },
        {
          title: 'Custom Reports',
          description: 'Generate detailed reports tailored to different stakeholders.',
          benefits: ['Executive summaries', 'Technical details', 'Regulatory compliance']
        }
      ]
    },
    {
      category: 'Compliance & Reporting',
      icon: '📄',
      color: '#22c55e',
      items: [
        {
          title: 'ESG Reporting',
          description: 'Generate investor-ready ESG reports with one click.',
          benefits: ['Global standards', 'Investor grade', 'Automated generation']
        },
        {
          title: 'Regulatory Compliance',
          description: 'Stay compliant with environmental regulations across jurisdictions.',
          benefits: ['Multi-region support', 'Audit trails', 'Documentation']
        },
        {
          title: 'Carbon Accounting',
          description: 'Track and report carbon emissions according to international standards.',
          benefits: ['Scope 1-3 tracking', 'Carbon offsetting', 'Verification ready']
        }
      ]
    },
    {
      category: 'Enterprise Features',
      icon: '🏢',
      color: '#f59e0b',
      items: [
        {
          title: 'Role-Based Access',
          description: 'Granular permissions ensure data security and proper access control.',
          benefits: ['User roles', 'Data segregation', 'Audit logs']
        },
        {
          title: 'API Integration',
          description: 'Connect SID with your existing enterprise systems via REST APIs.',
          benefits: ['ERP integration', 'Data synchronization', 'Custom workflows']
        },
        {
          title: 'White-Label Options',
          description: 'Customize the platform to match your brand and requirements.',
          benefits: ['Brand customization', 'Custom domains', 'White-label deployment']
        }
      ]
    },
    {
      category: 'Security & Reliability',
      icon: '🔐',
      color: '#374151',
      items: [
        {
          title: 'Enterprise Security',
          description: 'Bank-level security with encryption, authentication, and monitoring.',
          benefits: ['End-to-end encryption', '2FA/MFA', 'Security audits']
        },
        {
          title: 'Data Backup',
          description: 'Automated backups ensure your data is always safe and recoverable.',
          benefits: ['Daily backups', 'Geographic redundancy', 'Point-in-time recovery']
        },
        {
          title: '99.9% Uptime SLA',
          description: 'Guaranteed availability with comprehensive monitoring and support.',
          benefits: ['High availability', 'Performance monitoring', '24/7 support']
        }
      ]
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', category: 'CRM' },
    { name: 'SAP', icon: '📦', category: 'ERP' },
    { name: 'Microsoft Teams', icon: '👥', category: 'Collaboration' },
    { name: 'Slack', icon: '💬', category: 'Communication' },
    { name: 'AWS IoT', icon: '🔌', category: 'IoT Platform' },
    { name: 'Google Cloud', icon: '☁️', category: 'Cloud' },
    { name: 'Tableau', icon: '📊', category: 'Analytics' },
    { name: 'Power BI', icon: '📈', category: 'Business Intelligence' }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="hero-content">
            <h1>🚀 Platform Features</h1>
            <p>
              Everything you need to measure, improve, and showcase your sustainability impact. 
              Built for scale, security, and success.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn-premium btn-premium-primary btn-premium-large">
                🎯 Try Dashboard
              </Link>
              <a href="mailto:sales@sid-climate.com?subject=Enterprise%20Demo" className="btn-premium btn-premium-secondary btn-premium-large">
                📅 Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-main">
        <div className="container">
          <div className="features-grid">
            {features.map((category, index) => (
              <div key={index} className="feature-category">
                <div className="category-header" style={{ background: category.color }}>
                  <div className="category-icon">{category.icon}</div>
                  <h2>{category.category}</h2>
                </div>
                
                <div className="category-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="feature-item">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <ul className="benefits-list">
                        {item.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>
                            <span className="benefit-icon">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <div className="container">
          <div className="section-header">
            <h2>🔗 Seamless Integrations</h2>
            <p>
              Connect SID with your existing enterprise ecosystem for unified sustainability management
            </p>
          </div>
          
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card">
                <div className="integration-icon">{integration.icon}</div>
                <div className="integration-name">{integration.name}</div>
                <div className="integration-category">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Sustainability Strategy?</h2>
            <p>
              Join hundreds of organizations using SID to achieve their environmental goals and impress stakeholders.
            </p>
            <div className="cta-actions">
              <Link to="/dashboard" className="btn-premium btn-premium-primary btn-premium-large">
                🚀 Start Free Trial
              </Link>
              <a href="mailto:enterprise@sid-climate.com?subject=Enterprise%20Features%20Demo" className="btn-premium btn-premium-secondary btn-premium-large">
                💬 Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .features-page {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Hero Section */
        .features-hero {
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

        .hero-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Features Main */
        .features-main {
          padding: var(--space-24) 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-12);
        }

        .feature-category {
          background: var(--white);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
        }

        .category-header {
          padding: var(--space-6);
          color: var(--white);
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .category-icon {
          font-size: 2rem;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-lg);
        }

        .category-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .category-items {
          padding: var(--space-6);
        }

        .feature-item {
          padding: var(--space-6) 0;
          border-bottom: 1px solid var(--gray-100);
        }

        .feature-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .feature-item h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-3);
        }

        .feature-item p {
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: var(--space-4);
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefits-list li {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          color: var(--gray-700);
          font-size: 0.875rem;
          margin-bottom: var(--space-2);
        }

        .benefit-icon {
          color: var(--success-green);
          font-weight: 700;
        }

        /* Integrations Section */
        .integrations-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

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

        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
        }

        .integration-card {
          background: var(--gray-50);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-xl);
          padding: var(--space-6);
          text-align: center;
          transition: all var(--transition-base);
        }

        .integration-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-green);
        }

        .integration-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .integration-name {
          font-weight: 600;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .integration-category {
          font-size: 0.75rem;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
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

          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .integrations-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);
          }

          .section-header h2,
          .cta-content h2 {
            font-size: 1.75rem;
          }

          .category-header {
            padding: var(--space-4);
          }

          .category-icon {
            width: 48px;
            height: 48px;
            font-size: 1.5rem;
          }

          .category-header h2 {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .integrations-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage;
