import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabase'
import { careersContent } from '../data/companyData'

export default function CareersPage() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    let cancelled = false

    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('createdAt', { ascending: false })

      if (!cancelled && !error) {
        setJobs(data || [])
      }
    }

    fetchJobs()

    const channel = supabase
      .channel('careers-jobs')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'jobs' },
        () => {
          if (!cancelled) fetchJobs()
        }
      )
      .subscribe()

    return () => {
      cancelled = true
      supabase.removeChannel(channel)
    }
  }, [])

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
          {jobs.length === 0 ? (
            <p className="text-center text-sm text-gray-400">No open roles at the moment.</p>
          ) : (
            jobs.map((job, index) => {
              const title = job.jobProfile ?? ''
              const key = job.id ?? job._id ?? `${title}-${index}`
              const rolesText =
                typeof job.rolesResponsibilities === 'string'
                  ? job.rolesResponsibilities
                  : ''
              const hasRoles = rolesText.split(',').some(r => r.trim())

              return (
                <article
                  key={key}
                  className="
                rounded-2xl p-6 md:p-8
                bg-white/5 border border-white/10
                flex flex-col md:flex-row md:items-center md:justify-between gap-6
              "
                >
                  <div>
                    <h2 className="job-title text-xl font-bold mb-3">
                      {job.jobProfile}
                    </h2>
                    <div className="space-y-1 text-sm text-gray-400">
                      <p>
                        <span className="text-gray-500">Education:</span>{' '}
                        {job.education}
                      </p>
                      <p>
                        <span className="text-gray-500">Experience:</span>{' '}
                        {job.experience}
                      </p>
                      <p>
                        <span className="text-gray-500">Skills:</span> {job.skills}
                      </p>
                      <p>
                        <span className="text-gray-500">Location:</span> {job.location}
                      </p>
                      <p>
                        <span className="text-gray-500">No. of positions:</span>{' '}
                        {job.noOfPosition}
                      </p>
                    </div>
                    {hasRoles && (
                    <div className="mt-3">
                      <p className="font-semibold text-gray-300">
                      Roles & Responsibilities:
                      </p>

                      <div
                        className="mt-2 text-sm text-gray-400 leading-7 whitespace-pre-line"
                      >
                        {rolesText}
                      </div>
                    </div>
                  )}
    
                  </div>
                  <Link
                    to={`/careers/apply?role=${encodeURIComponent(title)}`}
                    className="
                  inline-flex justify-center shrink-0 px-6 py-3 rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
                  hover:scale-105 transition-transform text-center
                "
                  >
                    Apply Now
                  </Link>
                </article>
              )
            })
          )}
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
