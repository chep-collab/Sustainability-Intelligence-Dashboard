import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const PrivacyPage = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="hero-content">
            <h1>🔒 Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our dashboard, or contact us for support.
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Sustainability data and metrics</li>
                <li>Usage analytics and performance data</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and maintain our sustainability dashboard service</li>
                <li>Improve our platform and user experience</li>
                <li>Communicate with you about service updates</li>
                <li>Analyze usage patterns to optimize performance</li>
                <li>Ensure security and prevent unauthorized access</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul>
                <li>SSL encryption for data transmission</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Limited employee access to sensitive data</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Third-Party Services</h2>
              <p>
                SID may integrate with third-party services for enhanced functionality:
              </p>
              <ul>
                <li>Cloud hosting providers</li>
                <li>Analytics services</li>
                <li>Payment processors (for premium features)</li>
                <li>Environmental data providers</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in portable format</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> info@geo-apnet.co.ke</p>
                <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
                <p><strong>Address:</strong> Nairobi, Kenya</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Questions About Your Privacy?</h2>
            <p>
              We're committed to transparency and protecting your data. 
              Reach out if you need clarification.
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
        .privacy-page {
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

        .privacy-content {
          padding: 60px 0;
        }

        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .privacy-section {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .privacy-section h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }

        .privacy-section p {
          line-height: 1.6;
          margin-bottom: 1rem;
          color: var(--text-muted);
        }

        .privacy-section ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }

        .privacy-section li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-muted);
        }

        .privacy-section li:before {
          content: '✓';
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

          .privacy-section {
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

export default PrivacyPage;
