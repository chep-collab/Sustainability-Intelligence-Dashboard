import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/design-system.css';

import PremiumNavbar from "./components/layout/PremiumNavbar";
import PremiumFooter from "./components/layout/PremiumFooter";

import PremiumLandingPage from "./components/PremiumLandingPage";
import AboutPage from "./pages/About";
import TeamPage from "./pages/Team";
import ImplementationPage from "./pages/Implementation";
import Dashboard from "./components/Dashboard";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";

// YOUR EXISTING COMPONENTS
import SensorPanel from "./components/SensorPanel";

export default function App() {
  return (
    <Router>
      <div className="app">
        <PremiumNavbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PremiumLandingPage />} />
            <Route path="/home" element={<PremiumLandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<PremiumLandingPage />} />

            {/* product */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<SensorPanel />} />
          </Routes>
        </main>

        <PremiumFooter />
      </div>
    </Router>
  );
}

// Add CSS for main content margin
const styles = `
  .main-content {
    margin-top: 80px; /* Account for fixed navbar height */
    min-height: calc(100vh - 80px); /* Full viewport minus navbar */
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
