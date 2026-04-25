import { Link } from 'react-router-dom'
import { servicesPageContent } from '../../data/companyData'

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-0 bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto">
            {servicesPageContent.intro}
          </p>
        </div>

        <div className="mb-20 space-y-8">
{servicesPageContent.categories.map(svc => (
            <Link
              key={svc.path}
              to={svc.path}
              className="
                block scroll-mt-24
                rounded-2xl p-8 md:p-10
                bg-white/5 border border-white/10
                transition-all duration-300 hover:border-cyan-500/30 hover:scale-[1.02]
              "
            >
              <div className="flex items-start gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-cyan-100">{svc.title}</h3>
                  <p className="mb-4 max-w-3xl text-gray-500">{svc.description}</p>
                  <ul className="space-y-2 text-gray-400">
                    {svc.points.map(p => (
                      <li key={p} className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm font-semibold text-cyan-400">View full details →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-4">
          <Link
            to="/contact?to=vishwajitv.mangsule@gmail.com"
            className="
              inline-flex justify-center px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
              hover:scale-105 transition-transform
            "
          >
            Get Started
          </Link>
          <Link
            to="/contact"
            className="
              inline-flex justify-center px-8 py-4 rounded-full
              border border-white/30 font-semibold hover:bg-white/10 transition-colors
            "
          >
            Schedule Call
          </Link>
        </div>
      </div>
    </section>
  )
}
