import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const AboutPage = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former UN Climate Advisor with 15+ years in environmental policy and technology.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google Cloud engineer specializing in IoT and sustainability data platforms.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Impact',
      bio: 'Led sustainability initiatives at Fortune 500 companies for over a decade.',
      avatar: '👩‍🔬'
    },
    {
      name: 'James Park',
      role: 'VP of Engineering',
      bio: 'Built scalable data systems for renewable energy monitoring and carbon accounting.',
      avatar: '👨‍🔧'
    }
  ];

  const milestones = [
    { year: '2023', event: 'SID founded with mission to democratize sustainability intelligence' },
    { year: '2024', event: 'Raised $2.5M seed round from climate-focused VCs' },
    { year: '2024', event: 'Launched platform with 50+ enterprise customers' },
    { year: '2025', event: 'Expanded to 15 countries, tracking 1M+ tons of CO₂ reductions' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>🌍 About SID</h1>
            <p className="hero-subtitle">
              Empowering organizations worldwide to measure, improve, and showcase their environmental impact 
              through cutting-edge sustainability intelligence.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Organizations</div>
              </div>
              <div className="stat">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Tons CO₂ Reduced</div>
              </div>
              <div className="stat">
                <div className="stat-number">15</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                To make sustainability intelligence accessible and actionable for every organization, 
                enabling data-driven decisions that protect our planet and drive positive environmental change.
              </p>
              <p>
                We believe that by providing real-time insights and beautiful visualizations, 
                we can help organizations transform their environmental impact from a cost center 
                into a competitive advantage.
              </p>
            </div>
            <div className="mission-visual">
              <div className="globe-container">
                <div className="globe">🌍</div>
                <div className="orbit-ring"></div>
                <div className="orbit-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Climate experts and technology innovators united by a common purpose</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <div className="member-role">{member.role}</div>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Us in Building a Sustainable Future</h2>
            <p>
              Whether you're looking to measure your impact, join our team, or partner with us, 
              we'd love to hear from you.
            </p>
            <div className="cta-actions">
              <Link to="/dashboard" className="btn-premium btn-premium-primary btn-premium-large">
                🚀 Start Measuring Impact
              </Link>
              <a href="mailto:careers@sid-climate.com?subject=Career%20Inquiry" className="btn-premium btn-premium-secondary btn-premium-large">
                💼 Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Hero Section */
        .about-hero {
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

        /* Mission Section */
        .mission-section {
          padding: var(--space-24) 0;
          background: linear-gradient(135deg, #0d4f2a 0%, #1a5c3a 50%, #0d8b7f 100%);
          position: relative;
          overflow: hidden;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-16);
          align-items: center;
        }

        .mission-text h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: var(--space-6);
        }

        .mission-text p {
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--space-4);
        }

        .mission-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-container {
          position: relative;
          width: 300px;
          height: 300px;
        }

        .globe {
          font-size: 8rem;
          position: relative;
          z-index: 2;
          animation: rotate 30s linear infinite;
        }

        .orbit-ring {
          position: absolute;
          border: 2px solid var(--primary-green);
          border-radius: 50%;
          opacity: 0.3;
        }

        .orbit-ring:nth-child(1) {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          animation: pulse 3s ease-in-out infinite;
        }

        .orbit-ring:nth-child(2) {
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          animation: pulse 3s ease-in-out infinite 1.5s;
        }

        /* Team Section */
        .team-section {
          padding: var(--space-24) 0;
          background: var(--gray-50);
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }

        .team-card {
          background: var(--white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: all var(--transition-base);
          border: 1px solid var(--gray-200);
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .member-avatar {
          font-size: 4rem;
          margin-bottom: var(--space-4);
        }

        .team-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .member-role {
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-4);
        }

        .member-bio {
          color: var(--gray-600);
          line-height: 1.6;
          font-size: 0.875rem;
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

          .mission-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .globe-container {
            width: 200px;
            height: 200px;
          }

          .globe {
            font-size: 5rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Animations */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
