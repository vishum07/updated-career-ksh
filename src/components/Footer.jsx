import { Link, useLocation } from 'react-router-dom'
import { company, footerColumns } from '../data/companyData'
import { itSolutionNavItems } from '../data/itSolutions/index.js'

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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Column 1: IT Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {itSolutionNavItems.map(item => (
                <li key={item.slug}>
                  <FooterLink
                    to={`/services/it/${item.slug}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerColumns.company.map(link => (
                <li key={link.name}>
                  <FooterLink
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerColumns.legal.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact?to=vishwajitv.mangsule@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 text-sm"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <FooterLink to="/#services" className="text-gray-400 hover:text-cyan-400 text-sm">
                  Our Services
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {company.fullName}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">Intelligence engineered for enterprise.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm bg-transparent border-none cursor-pointer p-0"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
