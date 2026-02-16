import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const ContactPage = () => {
  const contactInfo = [
    {
      type: 'Sales',
      email: 'sales@sid-climate.com',
      description: 'Interested in SID for your organization? Let\'s discuss your sustainability goals.',
      icon: '💼'
    },
    {
      type: 'Support',
      email: 'support@sid-climate.com',
      description: 'Technical questions or need help with your existing SID account?',
      icon: '🛠️'
    },
    {
      type: 'Partnerships',
      email: 'partnerships@sid-climate.com',
      description: 'Looking to integrate with SID or explore partnership opportunities?',
      icon: '🤝'
    },
    {
      type: 'Press & Media',
      email: 'press@sid-climate.com',
      description: 'Media inquiries, interviews, or press kit requests.',
      icon: '📰'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '1 Climate Way, Suite 100, San Francisco, CA 94105'
    },
    {
      city: 'London',
      country: 'UK',
      address: '88 Sustainability Street, London, EC1A 1BD'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '1 Green Tower, Singapore 238873'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>📞 Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to transform your sustainability strategy? We're here to help you measure, 
              improve, and showcase your environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>How to Reach Us</h2>
            <p>Choose the best way to connect with our team</p>
          </div>
          
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{contact.icon}</div>
                <h3>{contact.type}</h3>
                <p className="contact-description">{contact.description}</p>
                <a 
                  href={`mailto:${contact.email}`}
                  className="contact-email"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="container">
          <div className="actions-grid">
            <div className="action-card primary">
              <div className="action-icon">🚀</div>
              <h3>Start Free Trial</h3>
              <p>Get instant access to SID and start measuring your sustainability impact today.</p>
              <Link to="/dashboard" className="btn-premium btn-premium-primary">
                Launch Dashboard
              </Link>
            </div>
            
            <div className="action-card secondary">
              <div className="action-icon">📅</div>
              <h3>Schedule Demo</h3>
              <p>Book a personalized demo with our sustainability experts.</p>
              <a 
                href="mailto:demo@sid-climate.com?subject=Demo%20Request"
                className="btn-premium btn-premium-secondary"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="offices-section">
        <div className="container">
          <div className="section-header">
            <h2>Global Offices</h2>
            <p>Find us around the world, ready to support your sustainability journey</p>
          </div>
          
          <div className="offices-grid">
            {offices.map((office, index) => (
              <div key={index} className="office-card">
                <div className="office-icon">📍</div>
                <h3>{office.city}</h3>
                <div className="office-country">{office.country}</div>
                <p className="office-address">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about SID</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly can I get started with SID?</h3>
              <p>You can start using SID immediately with our free trial. No credit card required, and you can be tracking your first sustainability metrics within minutes.</p>
            </div>
            
            <div className="faq-item">
              <h3>Does SID integrate with my existing systems?</h3>
              <p>Yes! SID offers REST APIs and pre-built integrations with popular ERP, CRM, and IoT platforms. Our team can help with custom integrations.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is my data secure?</h3>
              <p>Absolutely. SID uses bank-level encryption, SOC 2 Type II compliance, and regular security audits. Your data is always safe and confidential.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I customize SID for my industry?</h3>
              <p>Yes. SID is designed to be flexible and can be customized for manufacturing, real estate, healthcare, education, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Hero Section */
        .contact-hero {
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
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Contact Methods */
        .contact-methods {
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

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-8);
        }

        .contact-card {
          background: var(--gray-50);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: all var(--transition-base);
          border: 1px solid var(--gray-200);
        }

        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .contact-icon {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .contact-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .contact-description {
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: var(--space-4);
          font-size: 0.875rem;
        }

        .contact-email {
          color: var(--primary-green);
          font-weight: 600;
          text-decoration: none;
          font-size: 0.875rem;
        }

        .contact-email:hover {
          text-decoration: underline;
        }

        /* Quick Actions */
        .quick-actions {
          padding: var(--space-24) 0;
          background: var(--gray-50);
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }

        .action-card {
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          text-align: center;
          transition: all var(--transition-base);
        }

        .action-card.primary {
          background: var(--gradient-primary);
          color: var(--white);
        }

        .action-card.secondary {
          background: var(--white);
          color: var(--gray-900);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--gray-200);
        }

        .action-card:hover {
          transform: translateY(-2px);
        }

        .action-icon {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .action-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--space-4);
        }

        .action-card p {
          margin-bottom: var(--space-6);
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Offices Section */
        .offices-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-8);
        }

        .office-card {
          background: var(--gray-50);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          text-align: center;
          border: 1px solid var(--gray-200);
        }

        .office-icon {
          font-size: 2rem;
          margin-bottom: var(--space-3);
        }

        .office-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .office-country {
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-3);
        }

        .office-address {
          color: var(--gray-600);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* FAQ Section */
        .faq-section {
          padding: var(--space-24) 0;
          background: var(--gray-50);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-8);
        }

        .faq-item {
          background: var(--white);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--gray-200);
        }

        .faq-item h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-3);
        }

        .faq-item p {
          color: var(--gray-600);
          line-height: 1.6;
          font-size: 0.875rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-6);
          }

          .actions-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .offices-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .offices-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
