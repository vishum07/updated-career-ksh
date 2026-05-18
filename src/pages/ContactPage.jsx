import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import {
  company,
  contactPageContent,
  serviceInterestOptions,
} from '../data/companyData'

export default function ContactPage() {
  const location = useLocation()
  const recipientParam = new URLSearchParams(location.search).get('to')
  const recipientEmail =
    recipientParam && recipientParam.includes('@') ? recipientParam : company.email

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: serviceInterestOptions[0],
    message: '',
  })
  const [submitState, setSubmitState] = useState({
    loading: false,
    type: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      serviceInterest: serviceInterestOptions[0],
      message: '',
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitState({ loading: true, type: '', message: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            company_name: form.company || 'N/A',
            phone_number: form.phone || 'N/A',
            service_interest: form.serviceInterest,
            message: form.message,
            to_email: recipientEmail,
            subject: `Contact: ${form.serviceInterest} - ${form.company || 'No company'}`,
          },
          { publicKey }
        )
      } else {
        const fallbackPayload = {
          name: form.name,
          email: form.email,
          company: form.company || 'N/A',
          phone: form.phone || 'N/A',
          serviceInterest: form.serviceInterest,
          message: form.message,
          _subject: `Contact: ${form.serviceInterest} - ${form.company || 'No company'}`,
        }

        const fallbackResponse = await fetch(
          `https://formsubmit.co/ajax/${recipientEmail}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(fallbackPayload),
          }
        )

        if (!fallbackResponse.ok) {
          throw new Error('Fallback email request failed')
        }
      }

      resetForm()
      setSubmitState({
        loading: false,
        type: 'success',
        message: 'Message sent successfully',
      })
    } catch {
      setSubmitState({
        loading: false,
        type: 'error',
        message: 'Could not send message right now. Please try again or email us directly.',
      })
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-[#101828] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {contactPageContent.headline}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center md:text-left">
          <a
            href={`mailto:${company.email}`}
            className="flex flex-col md:flex-row items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <Mail className="text-cyan-400 shrink-0" size={22} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
              <p className="text-sm break-all">{company.email}</p>
            </div>
          </a>
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="flex flex-col md:flex-row items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <Phone className="text-cyan-400 shrink-0" size={22} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
              <p className="text-sm">{company.phone}</p>
            </div>
          </a>
          <div className="flex flex-col md:flex-row items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <MapPin className="text-cyan-400 shrink-0" size={22} />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
              <p className="text-sm">{company.location}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-sm space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
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
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
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
            <div>
              <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                Company
              </label>
              <input
                id="company"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="serviceInterest" className="block text-sm text-gray-400 mb-2">
              Service Interest
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={form.serviceInterest}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
            >
              {serviceInterestOptions.map(opt => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none resize-y min-h-[120px]"
            />
          </div>
          <button
            type="submit"
            disabled={submitState.loading}
            className="
              w-full md:w-auto px-10 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
              hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed
            "
          >
            {submitState.loading ? 'Sending...' : 'Send message'}
          </button>
          {submitState.message && (
            <p
              className={`text-sm \${submitState.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}
            >
              {submitState.message}
            </p>
          )}
        </form>

        <div className="mt-12 space-y-4 text-gray-400 text-sm leading-relaxed">
          <p>
            Submissions from this page are currently routed to:{' '}
            <span className="text-cyan-300 break-all">{recipientEmail}</span>
          </p>
          <p>{contactPageContent.responseTime}</p>
          <p>{contactPageContent.office}</p>
          <p>{contactPageContent.accessibility}</p>
        </div>
      </div>
    </section>
  )
}
