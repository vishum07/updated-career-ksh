import { Link } from 'react-router-dom'
import { careersContent } from '../data/companyData'

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0f172a] text-white">
      <section className="py-20 px-6 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {careersContent.hero}
          </span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Build products that matter—with a team that invests in your growth.
        </p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center text-cyan-400">
          Open roles
        </h2>
        <div className="space-y-6">
          {careersContent.jobs.map(job => (
            <article
              key={job.title}
              className="
                rounded-2xl p-6 md:p-8
                bg-white/5 border border-white/10
                flex flex-col md:flex-row md:items-center md:justify-between gap-6
              "
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>
                    <span className="text-gray-500">Experience:</span> {job.experience}
                  </p>
                  <p>
                    <span className="text-gray-500">Skills:</span> {job.skills}
                  </p>
                  <p>
                    <span className="text-gray-500">Location:</span> {job.location}
                  </p>
                </div>
                {job.roles && (
                  <div className="mt-3">
                    <p className="font-semibold text-gray-300">Roles & Responsibilities:</p>
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm text-gray-400">
                      {job.roles.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Link
                to={`/careers/apply?role=${encodeURIComponent(job.title)}`}
                className="
                  inline-flex justify-center shrink-0 px-6 py-3 rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
                  hover:scale-105 transition-transform text-center
                "
              >
                Apply Now
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8 text-center text-cyan-400">Benefits</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {careersContent.benefits.map(b => (
            <div
              key={b}
              className="rounded-xl p-6 text-center bg-white/5 border border-white/10"
            >
              {b}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/10">
        <h2 className="text-2xl font-bold mb-8 text-center text-cyan-400">
          Hiring process
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {careersContent.hiringProcess.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-600">→</span>}
              <span className="px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-sm">
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/10 pb-24">
        <h2 className="text-2xl font-bold mb-8 text-center text-cyan-400">Culture</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {careersContent.culture.map(c => (
            <span
              key={c}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/10"
            >
              {c}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
