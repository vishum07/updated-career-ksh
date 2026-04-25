import { products } from '../../data/companyData'

export default function Products() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Kshetrapati Industries delivers powerful AI-driven solutions designed to
            streamline operations, enhance efficiency, and accelerate business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map(p => (
            <div
              key={p.title}
              className="
                rounded-2xl p-8
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/10
                hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02]
              "
            >
              <p className="text-cyan-400 text-sm font-medium mb-2">{p.subtitle}</p>
              <h3 className="text-xl font-bold text-cyan-100 mb-6">{p.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {p.points.map(pt => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-blue-400">✓</span>
                    {pt}
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
