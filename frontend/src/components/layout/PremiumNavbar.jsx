import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/design-system.css';

const PremiumNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Implementation', href: '/implementation' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <>
      <nav className={`premium-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-brand">
              <div className="logo-container">
                <div className="logo-icon">🌍</div>
                <div className="logo-text">
                  <span className="logo-title">SID</span>
                  <span className="logo-subtitle">Sustainability Intelligence</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav desktop-only">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${item.isButton ? 'nav-button' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button mobile-only"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="container">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`mobile-nav-link ${item.isButton ? 'mobile-nav-button' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        .premium-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--gray-200);
          transition: all var(--transition-base);
        }

        .premium-navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .navbar-brand {
          text-decoration: none;
          color: inherit;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .logo-icon {
          font-size: 2rem;
          width: 48px;
          height: 48px;
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

        .logo-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-green);
          line-height: 1;
        }

        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--gray-500);
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .navbar-nav {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .nav-link {
          text-decoration: none;
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.875rem;
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-green);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-green);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-button {
          background: var(--primary-green);
          color: var(--white) !important;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-base);
          border: 2px solid var(--primary-green);
        }

        .nav-button:hover {
          background: var(--accent-green);
          border-color: var(--accent-green);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
          color: var(--white) !important;
        }

        .nav-button::after {
          display: none;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-2);
        }

        .hamburger {
          width: 24px;
          height: 24px;
          position: relative;
        }

        .hamburger span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gray-700);
          border-radius: 2px;
          transition: all var(--transition-base);
        }

        .hamburger span:nth-child(1) { top: 4px; }
        .hamburger span:nth-child(2) { top: 11px; }
        .hamburger span:nth-child(3) { top: 18px; }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg);
          top: 11px;
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg);
          top: 11px;
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: var(--white);
          border-bottom: 1px solid var(--gray-200);
          max-height: 0;
          overflow: hidden;
          transition: max-height var(--transition-base);
        }

        .mobile-menu.open {
          max-height: 400px;
        }

        .mobile-nav-link {
          display: block;
          padding: var(--space-4) 0;
          text-decoration: none;
          color: var(--gray-700);
          font-weight: 500;
          border-bottom: 1px solid var(--gray-100);
          transition: color var(--transition-fast);
        }

        .mobile-nav-link:hover {
          color: var(--primary-green);
        }

        .mobile-nav-button {
          background: var(--gradient-primary);
          color: var(--white) !important;
          text-align: center;
          margin-top: var(--space-4);
          border-radius: var(--radius-lg);
        }

        .mobile-nav-button:hover {
          color: var(--white) !important;
        }

        .desktop-only {
          display: block;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: block !important;
          }

          .navbar-content {
            height: 64px;
          }

          .logo-icon {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .logo-title {
            font-size: 1.25rem;
          }

          .logo-subtitle {
            font-size: 0.625rem;
          }

          .mobile-menu {
            top: 64px;
          }
        }
      `}</style>
    </>
  );
};

export default PremiumNavbar;
