import { Link } from 'react-router-dom'
import FluidGradientBackground from '../components/FluidGradientBackground'

const offerings = [
  {
    title: 'Agentic AI Development',
    image: '/point%201.jpg',
    tagline:
      'Create next-generation AI agents that think, act, and evolve—automating complex workflows and driving smarter, faster business outcomes.',
    points: [
      'Tailored AI Agent Development',
      'End-to-End Task Automation',
      'Real-Time Intelligence & Learning',
      'Enterprise System Integration',
    ],
  },
  {
    title: 'Web & Application Development',
    image: '/point%202.jpg',
    tagline: 'Modern web and mobile products',
    points: [
      'Scalable web & mobile apps',
      'API & microservices (dummy)',
      'Cloud-native architecture (dummy)',
      'UI/UX engineering (dummy)',
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    image: '/point%203.png',
    tagline: 'Pipelines, platforms, and insights',
    points: [
      'ETL / ELT pipelines (dummy)',
      'Warehousing and governance (dummy)',
      'Dashboards and reporting (dummy)',
      'Performance optimization (dummy)',
    ],
  },
  {
    title: 'Cloud, DevOps & Security',
    image: '/point%204.jpg',
    tagline: 'Reliable delivery and compliance',
    points: [
      'CI/CD and infrastructure as code (dummy)',
      'Observability and uptime practices (dummy)',
      'Security hardening (dummy)',
      'Compliance readiness (dummy)',
    ],
  },
  {
    title: 'Industry Solutions',
    image: '/point%205.jpg',
    tagline: 'Vertical platforms for real-world impact',
    points: [
      'E-commerce, eLearning, FinTech',
      'Hospital management, HRMS',
      'Import-export, manufacturing',
      'Pharma and tourism',
    ],
  },
]

const metrics = [
  { label: 'Success rate', value: '95%' },
  { label: 'Models deployed', value: '50+' },
  { label: 'Data processed', value: '10TB+' },
  { label: 'Support', value: '24/7' },
]

export default function ServicesPage() {
  console.log('🔍 [DEBUG] ServicesPage rendering');
  return (
    <article className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
      <FluidGradientBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-gray-400 text-lg md:text-xl">
            From intuitive interfaces to high-performance websites, we craft digital experiences that
            engage users, elevate your brand, and drive measurable results.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-3">Our Offerings</h2>
          <p className="mx-auto max-w-3xl text-gray-400 text-base md:text-lg">
            Comprehensive web and technology solutions crafted to enhance your digital presence and
            accelerate business growth.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {offerings.map((o, i) => (
            <section
              key={o.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
                <span className="text-cyan-400 font-mono text-lg">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold text-cyan-100 mb-2">{o.title}</h2>
                  <p className="text-gray-500 mb-5">{o.tagline}</p>
                  <ul className="space-y-2 text-gray-300">
                    {o.points.map(p => (
                      <li key={p} className="flex gap-2">
                        <span className="text-blue-400">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-72 lg:w-80 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={o.image}
                    alt={o.title}
                    loading="lazy"
                    decoding="async"
                    className="h-44 w-full rounded-xl border border-white/10 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map(m => (
            <div
              key={m.label}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{m.value}</div>
              <div className="text-gray-500 text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-cyan-100">Build Something Extraordinary</h3>
          <p className="mx-auto max-w-3xl text-gray-300">
            Ready to unlock the power of AI? We help you turn ideas into intelligent solutions that
            drive real business outcomes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-4">
          <Link
            to="/resources"
            className="inline-flex justify-center px-8 py-4 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition-colors"
          >
            View all resources
          </Link>
          <Link
            to="/contact?to=vishwajitv.mangsule@gmail.com"
            className="inline-flex justify-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </div>
      </div>
    </article>
  )
}

