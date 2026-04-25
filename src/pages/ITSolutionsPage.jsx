import { Link } from 'react-router-dom'
import ServicePageShell from '../components/services/ServicePageShell'
import { itSolutionNavItems } from '../data/itSolutions/index.js'

export default function ITSolutionsPage() {
  console.log('🔍 [DEBUG] ITSolutionsPage rendering');
  return (
    <ServicePageShell>
      <article className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Information Technology Solutions
            </span>
          </h1>
          <p className="mb-10 text-lg text-cyan-300/90 md:text-xl">
            Software, AI, and industry platforms—choose a focus area below.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {itSolutionNavItems.map(({ name, slug }) => (
              <Link
                key={slug}
                to={`/services/it/${slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-500/40 hover:bg-white/[0.07]"
              >
                <span className="font-semibold text-cyan-100">{name}</span>
                <p className="mt-2 text-sm text-gray-500">View capabilities and use cases →</p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Contact us
            </Link>
            <Link
              to={{ pathname: '/', hash: 'services' }}
              className="inline-flex rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Back to home services
            </Link>
          </div>
        </div>
      </article>
    </ServicePageShell>
  )
}
