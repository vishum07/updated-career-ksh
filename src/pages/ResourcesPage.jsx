/**
 * Resources Page Component
 * Displays service categories and IT vertical links.
 * No changes to UI, animations, or behavior.
 */

// Core imports
import { Link } from 'react-router-dom';
import HeroBackground from '../components/HeroBackground';

/**
 * IT Verticals data array - unchanged
 */
const itVerticals = [
  { name: 'E-commerce', to: '/services/it/ecommerce' },
  { name: 'eLearning solutions', to: '/services/it/elearning' },
  { name: 'FinTech', to: '/services/it/fintech' },
  { name: 'Hospital Management Solutions', to: '/services/it/hospital-management' },
  { name: 'HRMS solutions', to: '/services/it/hrms' },
  { name: 'Import-export', to: '/services/it/import-export' },
  { name: 'Manufacturing solutions', to: '/services/it/manufacturing' },
  { name: 'Pharmaceutical solutions', to: '/services/it/pharmaceutical' },
  { name: 'Tourism', to: '/services/it/tourism' },
];

/**
 * Main ResourcesPage component
 */
export default function ResourcesPage() {
  console.log('🔍 [DEBUG] ResourcesPage rendering');
  // Main render - unchanged layout and classes
  return (
    // Main container with gradient background and overlay - unchanged
    <article className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <HeroBackground />
      {/* Gradient overlay for visual effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content wrapper - centered max-width */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero section with title and description */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-gray-400 text-lg md:text-xl">
            Browse solution pages and vertical resources.
          </p>
        </div>

        {/* Service category cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* IT Solutions Card */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold text-cyan-100 mb-2">
              Information Technology solutions
            </h2>
            <p className="text-gray-400 mb-5">
              Industry platforms across commerce, learning, fintech, healthcare, trade, manufacturing, pharma, and tourism.
            </p>
            <div className="mt-6">
              <Link
                to="/services/it"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black hover:scale-[1.02] transition-transform"
              >
                Open →
              </Link>
            </div>
          </section>

          {/* Mechanical Solutions Card */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold text-cyan-100 mb-2">Mechanical solutions</h2>
            <p className="text-gray-400 mb-5">
              Metal equipment design, simulation & analysis, manufacturing support, maintenance, and industrial services.
            </p>
            <div className="mt-6">
              <Link
                to="/services/mechanical"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black hover:scale-[1.02] transition-transform"
              >
                Open →
              </Link>
            </div>
          </section>

          {/* Civil Solutions Card */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-bold text-cyan-100 mb-2">Civil solutions</h2>
            <p className="text-gray-400 mb-5">
              Structural design, 3D visualization, BIM coordination, and planning for real estate and infrastructure.
            </p>
            <div className="mt-6">
              <Link
                to="/services/civil"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black hover:scale-[1.02] transition-transform"
              >
                Open →
              </Link>
            </div>
          </section>
        </div>

        {/* IT Verticals grid */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 mb-14">
          <h2 className="text-2xl font-bold text-cyan-100 mb-4">Information Technology vertical resources</h2>
          <p className="text-gray-400 mb-6">
            Choose a vertical to view detailed capability breakdowns.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {itVerticals.map((vertical) => (
              <Link
                key={vertical.to}
                to={vertical.to}
                className="rounded-xl border border-white/10 bg-black/20 p-4 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-colors"
              >
                <div className="font-semibold">{vertical.name}</div>
                <div className="mt-2 text-sm text-gray-400">View →</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-4">
          <Link
            to="/services"
            className="inline-flex justify-center px-8 py-4 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors"
          >
            View all services
          </Link>
          <Link
            to="/contact"
            className="inline-flex justify-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-transform"
          >
            Contact us
          </Link>
        </div>
      </div>
    </article>
  );
}

