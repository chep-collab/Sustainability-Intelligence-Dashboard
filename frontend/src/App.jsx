import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/design-system.css';

import PremiumNavbar from "./components/layout/PremiumNavbar";
import PremiumFooter from "./components/layout/PremiumFooter";

import PremiumLandingPage from "./components/PremiumLandingPage";
import FeaturesPage from "./pages/Features";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// YOUR EXISTING COMPONENTS
import Dashboard from "./components/Dashboard";
import SensorPanel from "./components/SensorPanel";

export default function App() {
  return (
    <Router>
      <div className="app">
        <PremiumNavbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PremiumLandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

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
