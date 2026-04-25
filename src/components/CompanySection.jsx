import { Link, useLocation } from 'react-router-dom'
import { company } from '../data/companyData'
import { Mail, Phone, MapPin } from 'lucide-react'

function FooterLink({ to, className, children }) {
  const location = useLocation()
  const isHash = to.startsWith('/#')

  const onClick = e => {
    if (!isHash || location.pathname !== '/') return
    e.preventDefault()
    const id = to.replace('/#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `/#${id}`)
  }

  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  )
}

export default function CompanySection() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 border-b border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          {/* Left: Company Intro */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {company.fullName}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {company.description}
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Office 101 & 102, Tower B1, Vishwakarma Business Centre, Wagholi, Pune – 412207
              </p>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm flex-shrink-0">
            <h4 className="text-xl font-bold mb-3 text-white">Ready to Transform?</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Let's build the future together with AI-powered solutions tailored for your business.
            </p>
            <div className="space-y-3">
              <Link
                to="/contact"
                className="w-full block text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-sm"
              >
                Start Your Project
              </Link>
              <FooterLink
                to="/services"
                className="w-full block text-center border border-gray-600 hover:border-cyan-400 bg-transparent text-gray-300 hover:text-cyan-400 font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 text-sm"
              >
                Explore Our Services
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
