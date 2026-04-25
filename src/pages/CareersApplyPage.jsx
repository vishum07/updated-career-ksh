import { useMemo, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CAREERS_RECIPIENT = 'contact@kshetrapati.com'
const STORAGE_KEY = 'ksh_applied_emails'

export default function CareersApplyPage() {
  const location = useLocation()
  const [appliedEmails, setAppliedEmails] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  const role = useMemo(() => {
    const params = new URLSearchParams(location.search)
    return params.get('role') || 'General Application'
  }, [location.search])

  const [form, setForm] = useState({
    name: '',
    organization: '',
    mobile: '',
    email: '',
  })
  const [resume, setResume] = useState(null)
  const [submitState, setSubmitState] = useState({
    loading: false,
    type: '',
    message: '',
  })

  // Check if email already applied
  const isAlreadyApplied = appliedEmails.includes(form.email.toLowerCase().trim())

  useEffect(() => {
    // Check on email change
    if (form.email) {
      const normalizedEmail = form.email.toLowerCase().trim()
      if (appliedEmails.includes(normalizedEmail)) {
        setSubmitState({
          loading: false,
          type: 'error',
          message: 'You have already applied. Each email can only be used once.',
        })
      }
    }
  }, [form.email, appliedEmails])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear previous message when user starts typing
    if (submitState.message) {
      setSubmitState({ loading: false, type: '', message: '' })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const normalizedEmail = form.email.toLowerCase().trim()

    // Check if already applied
    if (appliedEmails.includes(normalizedEmail)) {
      setSubmitState({
        loading: false,
        type: 'error',
        message: 'You have already applied. Each email can only be used once.',
      })
      return
    }

    if (!resume) {
      setSubmitState({
        loading: false,
        type: 'error',
        message: 'Please upload your CV/Resume before submitting.',
      })
      return
    }

    setSubmitState({ loading: true, type: '', message: '' })

    const payload = new FormData()
    payload.append('name', form.name)
    payload.append('email', form.email)
    payload.append('mobile', form.mobile)
    payload.append('college_or_company', form.organization)
    payload.append('role', role)
    payload.append('resume', resume)
    payload.append('_subject', `Career Application: ${role}`)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CAREERS_RECIPIENT}`, {
        method: 'POST',
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Application submit failed')
      }

      // Save email to localStorage after successful submission
      const newAppliedEmails = [...appliedEmails, normalizedEmail]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newAppliedEmails))
      setAppliedEmails(newAppliedEmails)

      setForm({
        name: '',
        organization: '',
        mobile: '',
        email: '',
      })
      setResume(null)
      setSubmitState({
        loading: false,
        type: 'success',
        message: 'Application submitted successfully.',
      })
    } catch {
      setSubmitState({
        loading: false,
        type: 'error',
        message: 'Could not submit right now. Please try again.',
      })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-[#101828] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Link to="/careers" className="text-cyan-300 hover:text-cyan-200 text-sm">
            ← Back to Careers
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Apply Now
            </span>
          </h1>
          <p className="text-gray-400">
            Role: <span className="text-white">{role}</span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-sm space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm text-gray-400 mb-2">
              College Name / Ex-Company Name
            </label>
            <input
              id="organization"
              name="organization"
              required
              value={form.organization}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="mobile" className="block text-sm text-gray-400 mb-2">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={handleChange}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm text-gray-400 mb-2">
              Upload CV/Resume
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={e => setResume(e.target.files?.[0] || null)}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-500 file:px-3 file:py-1.5 file:text-black file:font-semibold"
            />
          </div>

          <button
            type="submit"
            disabled={submitState.loading || isAlreadyApplied}
            className="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitState.loading ? 'Submitting...' : isAlreadyApplied ? 'Already Applied' : 'Submit Application'}
          </button>

          {submitState.message && (
            <p
              className={`text-sm ${submitState.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
            >
              {submitState.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
