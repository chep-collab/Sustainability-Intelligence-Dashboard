import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>📋 Terms of Service</h1>
            <p className="hero-subtitle">
              These terms govern your use of Sustainability Intelligence Dashboard (SID) platform.
            </p>
          </div>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="terms-section">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing and using Sustainability Intelligence Dashboard (SID), you accept and agree 
                to be bound by terms and provision of this agreement.
              </p>
            </div>

            <div className="terms-section">
              <h2>Description of Service</h2>
              <p>
                SID is a digital platform designed to help organizations track, analyze, and report 
                their environmental, social, and governance (ESG) performance indicators.
              </p>
              <ul>
                <li>Real-time sustainability data visualization</li>
                <li>Environmental KPI tracking and reporting</li>
                <li>Social and governance metrics monitoring</li>
                <li>Customizable dashboard and analytics</li>
                <li>Export and reporting capabilities</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> info@geo-apnet.co.ke</p>
                <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
                <p><strong>Address:</strong> Nairobi, Kenya</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>Terms Updates</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting. Your continued use of SID constitutes acceptance of any 
                modified terms.
              </p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About Our Terms?</h2>
            <p>
              We're here to help clarify any aspects of our service agreement.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button-primary">
                Contact Us
              </Link>
              <Link to="/" className="cta-button-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .terms-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafb 0%, #e8f5e8 100%);
        }

        .page-hero {
          background: var(--gradient-hero);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .terms-content {
          padding: 60px 0;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .terms-section h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }

        .terms-section p {
          line-height: 1.6;
          margin-bottom: 1rem;
          color: var(--text-muted);
        }

        .terms-section ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .terms-section li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-muted);
        }

        .terms-section li:before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: bold;
        }

        .contact-info {
          background: var(--light-green);
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .contact-info p {
          margin: 0.5rem 0;
        }

        .cta-section {
          background: var(--gradient-hero);
          color: white;
          padding: 60px 0;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .cta-button-primary, .cta-button-secondary {
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .cta-button-primary {
          background: var(--accent-green);
          color: white;
        }

        .cta-button-primary:hover {
          background: var(--primary-green);
          transform: translateY(-2px);
        }

        .cta-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button-secondary:hover {
          background: white;
          color: var(--primary-green);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .content-wrapper {
            padding: 0 1rem;
          }

          .terms-section {
            padding: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsPage;
