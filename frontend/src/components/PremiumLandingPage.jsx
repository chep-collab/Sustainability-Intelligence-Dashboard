import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/design-system.css';

const PremiumLandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setScrollY(window.scrollY);
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kenya-specific statistics
  const kenyaStats = [
    { value: '70%', label: 'Green Economy Target by 2030', icon: '🇰🇪' },
    { value: '500+', label: 'Eco-Conference Facilities', icon: '🏢' },
    { value: '2.5M', label: 'Annual Conference Visitors', icon: '👥' },
    { value: '15%', label: 'Yearly Growth in Green Tourism', icon: '📈' }
  ];

  const metrics = [
    { icon: '⚡', value: '50%', label: 'Energy Reduction', detail: 'Average client improvement' },
    { icon: '💧', value: '30%', label: 'Water Savings', detail: 'Through smart monitoring' },
    { icon: '♻️', value: '75%', label: 'Waste Diverted', detail: 'From landfill to recycling' },
    { icon: '🌍', value: '25%', label: 'Carbon Offset', detail: 'Tons CO₂ reduced annually' }
  ];

  const features = [
    {
      icon: '📊',
      title: 'Real-Time Intelligence',
      description: 'Monitor all sustainability metrics with live dashboards updating every 10 seconds. Get instant insights into your environmental performance.',
      color: '#0d4f2a'
    },
    {
      icon: '🔌',
      title: 'IoT Integration',
      description: 'Connect sensors via MQTT for automatic data collection. No manual entry required - just seamless, continuous monitoring.',
      color: '#0d8b7f'
    },
    {
      icon: '🎯',
      title: 'Target Tracking',
      description: 'Set ambitious ESG goals and track progress with advanced analytics. Benchmark against industry standards and regulations.',
      color: '#4CAF50'
    },
    {
      icon: '📈',
      title: 'Predictive Analytics',
      description: 'AI-powered insights that forecast trends and recommend optimizations. Stay ahead of sustainability challenges.',
      color: '#22c55e'
    },
    {
      icon: '📄',
      title: 'Investor Reports',
      description: 'Generate professional ESG reports with one click. Perfect for board meetings, investor updates, and regulatory compliance.',
      color: '#f59e0b'
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-level security with encrypted data storage, audit trails, and role-based access control for your organization.',
      color: '#374151'
    }
  ];

  const testimonials = [
    {
      name: 'John Omondi',
      role: 'Chief Sustainability Officer',
      company: 'GreenTech Industries',
      quote: 'SID transformed how we track and report our ESG metrics. What used to take weeks now happens in real-time.',
      avatar: '�‍💼'
    },
    {
      name: 'Vicky Kimani',
      role: 'Operations Director',
      company: 'EcoManufacturing Corp',
      quote: 'The IoT integration eliminated manual data entry completely. Our team can focus on improvements instead of paperwork.',
      avatar: '�‍�'
    },
    {
      name: 'Sarah Mueni',
      role: 'Impact Investor',
      company: 'Climate Capital Partners',
      quote: 'The professional reports and dashboards make due diligence effortless. SID is the gold standard for sustainability monitoring.',
      avatar: '👩‍💼'
    }
  ];

  return (
    <div className="premium-landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
                🌍 Sustainability Intelligence Dashboard
              </h1>
              <h2 className="hero-subtitle">
                Empowering Kenya's Eco-Conference Facilities with Real-Time Environmental Intelligence
              </h2>
              <p className="hero-description">
                Transform your conference facility's sustainability performance with cutting-edge IoT sensors, 
                real-time monitoring, and transparent reporting aligned with Kenya's Green Economy Strategy 
                and UN Sustainable Development Goals.
              </p>
              <div className="hero-actions">
                <Link to="/dashboard" className="btn-premium btn-premium-primary btn-premium-large">
                  🚀 View Live Dashboard
                </Link>
                <Link to="/features" className="btn-premium btn-premium-secondary btn-premium-large">
                  � Explore Features
                </Link>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="dashboard-preview">
                <div className="preview-header">
                  <div className="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="preview-title">SID - Live Monitoring</div>
                </div>
                <div className="preview-content">
                  <div className="preview-metrics">
                    <div className="preview-metric">
                      <div className="metric-icon">⚡</div>
                      <div className="metric-value">65%</div>
                      <div className="metric-label">Renewable</div>
                    </div>
                    <div className="preview-metric">
                      <div className="metric-icon">💧</div>
                      <div className="metric-value">22m³</div>
                      <div className="metric-label">Water</div>
                    </div>
                    <div className="preview-metric">
                      <div className="metric-icon">♻️</div>
                      <div className="metric-value">78%</div>
                      <div className="metric-label">Recycled</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Kenya Stats Bar */}
      <div className="kenya-stats-bar">
        <div className="container">
          <div className="stats-grid">
            {kenyaStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-content">
            <div className="impact-text">
              <h2 className="impact-title">
                From Data to Climate Action
              </h2>
              <p className="impact-description">
                Every metric tells a story of environmental impact. SID translates complex sustainability data 
                into clear, actionable insights that drive real change.
              </p>
              <div className="impact-highlights">
                <div className="impact-highlight">
                  <div className="highlight-number">2.5M</div>
                  <div className="highlight-label">Trees Equivalent Saved</div>
                </div>
                <div className="impact-highlight">
                  <div className="highlight-number">50K</div>
                  <div className="highlight-label">Homes Powered Annually</div>
                </div>
                <div className="impact-highlight">
                  <div className="highlight-number">100K</div>
                  <div className="highlight-label">Tons CO₂ Reduced</div>
                </div>
              </div>
            </div>
            <div className="impact-visual">
              <div className="impact-globe">🌍</div>
              <div className="impact-rings">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by Sustainability Leaders</h2>
            <p className="section-subtitle">
              Hear from organizations transforming their environmental impact with SID
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Lead the Sustainability Revolution?
            </h2>
            <p className="cta-description">
              Join hundreds of organizations using SID to measure, improve, and showcase their environmental impact.
            </p>
            <div className="cta-actions">
              <Link to="/dashboard" className="btn-premium btn-premium-primary btn-premium-large">
                🎯 Start Free Trial
              </Link>
              <a href="mailto:enterprise@sid-climate.com?subject=Enterprise%20Partnership" className="btn-premium btn-premium-secondary btn-premium-large">
                💬 Contact Sales
              </a>
            </div>
            <div className="cta-trust">
              <p>✨ No credit card required • Full feature access • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-landing {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Kenya Stats Bar */
        .kenya-stats-bar {
          background: var(--primary-green);
          padding: var(--space-8) 0;
          position: relative;
          overflow: hidden;
        }

        .kenya-stats-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          pointer-events: none;
        }

        .kenya-stats-bar .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
          position: relative;
          z-index: 1;
        }

        .kenya-stats-bar .stat-item {
          text-align: center;
          color: var(--white);
        }

        .kenya-stats-bar .stat-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .kenya-stats-bar .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: var(--space-2);
          line-height: 1;
        }

        .kenya-stats-bar .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          font-weight: 500;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-hero);
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(13, 79, 42, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(13, 139, 127, 0.3) 0%, transparent 50%);
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px, 30px 30px;
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: var(--white);
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: var(--space-6);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--space-6);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero-title-highlight {
          background: linear-gradient(135deg, #4CAF50, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
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
          margin-bottom: var(--space-12);
          flex-wrap: wrap;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-6);
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-stat {
          text-align: center;
          padding: var(--space-4);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: var(--space-2);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: var(--space-1);
        }

        .stat-label {
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .stat-detail {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Features Section */
        .features-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }

        .feature-card {
          background: var(--white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
          transition: all var(--transition-base);
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
      border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--white);
          margin: 0 auto var(--space-6);
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .feature-description {
          color: var(--gray-600);
          line-height: 1.6;
        }

        /* Impact Section */
        .impact-section {
          padding: var(--space-24) 0;
          background: var(--gradient-primary);
          color: var(--white);
        }

        .impact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .impact-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
        }

        .impact-description {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
        }

        .impact-highlights {
          display: flex;
          gap: var(--space-8);
        }

        .impact-highlight {
          text-align: center;
        }

        .highlight-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-2);
        }

        .highlight-label {
          font-weight: 500;
          opacity: 0.8;
        }

        .impact-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .impact-globe {
          font-size: 8rem;
          position: relative;
          z-index: 2;
          animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .impact-rings {
          position: absolute;
          width: 300px;
          height: 300px;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        .ring:nth-child(1) {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .ring:nth-child(2) {
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          animation-delay: 1s;
        }

        .ring:nth-child(3) {
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          animation-delay: 2s;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: var(--space-24) 0;
          background: var(--gray-50);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }

        .testimonial-card {
          background: var(--white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--gray-200);
        }

        .testimonial-avatar {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .testimonial-quote {
          font-size: 1.125rem;
          line-height: 1.6;
          color: var(--gray-700);
          margin-bottom: var(--space-6);
          font-style: italic;
        }

        .author-name {
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-1);
        }

        .author-role {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin-bottom: var(--space-1);
        }

        .author-company {
          color: var(--primary-green);
          font-size: 0.875rem;
          font-weight: 500;
        }

        /* CTA Section */
        .cta-section {
          padding: var(--space-24) 0;
          background: var(--gradient-primary);
          color: var(--white);
          text-align: center;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
        }

        .cta-description {
          font-size: 1.25rem;
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
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
        }

        .cta-trust {
          opacity: 0.8;
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-4);
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .impact-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
            text-align: center;
          }

          .impact-highlights {
            flex-direction: column;
            gap: var(--space-4);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .section-title,
          .impact-title,
          .cta-title {
            font-size: 2rem;
          }

          .impact-globe {
            font-size: 6rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumLandingPage;
