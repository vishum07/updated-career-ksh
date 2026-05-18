import { Link } from 'react-router-dom'
import { privacySections, company } from '../data/companyData'

export default function PrivacyPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: April 6, 2026
        </p>

        <div className="space-y-12">
          {privacySections.map(section => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-cyan-400 mb-4">{section.title}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.listItems?.length ? (
                <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                  {section.listItems.map(item => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <p className="mt-12 text-gray-400 text-sm">
          Questions? Contact us at{' '}
          <a href={`mailto:${company.email}`} className="text-cyan-400 hover:underline">
            {company.email}
          </a>{' '}
          or visit our{' '}
          <Link to="/contact" className="text-cyan-400 hover:underline">
            Contact
          </Link>{' '}
          page.
        </p>
      </div>
    </article>
  )
}
