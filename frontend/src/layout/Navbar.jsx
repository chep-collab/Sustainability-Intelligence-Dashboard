import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-green-700">
          🌍 SID Sustainability Intelligence
        </h1>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link
            to="/dashboard"
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
