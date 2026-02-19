import { Link } from 'react-router-dom';
import '../../styles/design-system.css';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Features', href: '/features' },
      { name: 'API Documentation', href: '#docs', external: true }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: 'mailto:info@geo-apnet.co.ke', external: true }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '�', href: 'https://twitter.com' },
    { name: 'Facebook', icon: '�', href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: '�', href: 'https://linkedin.com' },
    { name: 'Instagram', icon: '�', href: 'https://instagram.com' }
  ];

  return (
    <>
      <footer className="premium-footer">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-content">
              {/* Brand Section */}
              <div className="footer-brand">
                <div className="brand-logo">
                  <div className="logo-icon">🌍</div>
                  <div className="logo-text">
                    <span className="brand-name">SID</span>
                    <span className="brand-tagline">Sustainability Intelligence</span>
                  </div>
                </div>
                
                <p className="brand-description">
                  Empowering organizations to measure, improve, and showcase their environmental impact 
                  through real-time data intelligence and actionable insights.
                </p>
                
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="social-link"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              <div className="footer-links-grid">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category} className="link-section">
                    <h3 className="link-category-title">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <ul className="link-list">
                      {links.map((link) => (
                        <li key={link.name}>
                          {link.external ? (
                            <a 
                              href={link.href} 
                              className="footer-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link to={link.href} className="footer-link">
                              {link.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats Bar */}
        <div className="impact-stats-bar">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">2.5M+</div>
                <div className="stat-label">Trees Saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Organizations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100K</div>
                <div className="stat-label">Tons CO₂ Reduced</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K</div>
                <div className="stat-label">Homes Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {currentYear} SID Sustainability Intelligence. 
                  Built with 🌱 for a sustainable future.
                </p>
              </div>
              
              <div className="footer-bottom-links">
                <div className="certification-badges">
                  <span className="badge">🏆 B Corp Certified</span>
                  <span className="badge">🔒 SOC 2 Type II</span>
                  <span className="badge">🌍 ISO 14001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .premium-footer {
          background: var(--gray-900);
          color: var(--white);
          margin-top: auto;
        }

        /* Main Footer Content */
        .footer-main {
          padding: var(--space-16) 0;
          border-bottom: 1px solid var(--gray-800);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-12);
          align-items: start;
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }

        .logo-icon {
          font-size: 2.5rem;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: var(--radius-lg);
          color: var(--white);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
        }

        .brand-tagline {
          font-size: 0.75rem;
          color: var(--gray-400);
          font-weight: 500;
          letter-spacing: 0.05em;
          margin-top: var(--space-1);
        }

        .brand-description {
          color: var(--gray-400);
          line-height: 1.6;
          margin-bottom: var(--space-6);
          font-size: 0.875rem;
        }

        .social-links {
          display: flex;
          gap: var(--space-3);
        }

        .social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-800);
          border-radius: var(--radius-lg);
          color: var(--gray-400);
          text-decoration: none;
          transition: all var(--transition-base);
        }

        .social-link:hover {
          background: var(--primary-green);
          color: var(--white);
          transform: translateY(-2px);
        }

        .social-icon {
          font-size: 1.25rem;
        }

        /* Links Grid */
        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }

        .link-section h3 {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: var(--space-4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: var(--space-3);
        }

        .footer-link {
          color: var(--gray-400);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color var(--transition-fast);
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--accent-green);
          transform: translateX(2px);
        }

        /* Impact Stats Bar */
        .impact-stats-bar {
          padding: var(--space-8) 0;
          background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
          text-align: center;
        }

        .stat-item {
          padding: var(--space-4);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: var(--space-2);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        /* Bottom Footer */
        .footer-bottom {
          padding: var(--space-6) 0;
          background: var(--gray-950);
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .copyright p {
          color: var(--gray-500);
          font-size: 0.875rem;
          margin: 0;
        }

        .certification-badges {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .badge {
          display: inline-block;
          padding: var(--space-2) var(--space-3);
          background: var(--gray-800);
          color: var(--gray-400);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid var(--gray-700);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }

          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-4);
          }

          .stat-number {
            font-size: 2rem;
          }

          .brand-logo {
            margin-bottom: var(--space-4);
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default PremiumFooter;
