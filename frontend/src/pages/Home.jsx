import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-green-700 text-white text-center py-32">
        <h1 className="text-5xl font-bold mb-6">
          Smart Sustainability Monitoring
        </h1>
        <p className="text-xl mb-8">
          Real-time ESG intelligence for climate-responsible facilities.
        </p>

        <Link
          to="/dashboard"
          className="bg-white text-green-700 px-8 py-3 rounded font-semibold"
        >
          Launch Dashboard
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          "Live KPI Tracking",
          "IoT Integration",
          "Automated Reports",
        ].map((f, i) => (
          <div key={i} className="shadow p-8 rounded-xl">
            <h3 className="font-bold text-lg">{f}</h3>
            <p className="mt-3 text-gray-600">
              Built for managers, donors and investors.
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
