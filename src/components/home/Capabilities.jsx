import { capabilities } from '../../data/companyData'

export default function Capabilities() {
  const getCardLayoutClass = (index) => {
    // Layout only: keep 3 cards on top and center 2 cards on second row for 5-card set.
    if (capabilities.length === 5) {
      if (index <= 2) return 'lg:col-span-2'
      if (index === 3) return 'lg:col-span-2 lg:col-start-2'
      if (index === 4) return 'lg:col-span-2 lg:col-start-4'
    }
    return ''
  }

  return (
    <section
      id="capabilities"
      className="relative py-24 px-6 bg-gradient-to-b from-black to-[#0a0a0a] text-white scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Capabilities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Kshetrapati Industries brings specialized expertise across AI, data, cloud,
            automation, and product engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.07] transition-all duration-300 hover:scale-[1.02] ${getCardLayoutClass(index)}`}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{cap.description}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                {cap.items.map(item => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
