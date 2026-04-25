import { testimonials } from '../../data/companyData'

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-[#101828] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Meet the leadership team driving operations, delivery, and innovation at
            Kshetrapati Industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <article
              key={t.name}
              className="
                relative rounded-2xl p-8
                bg-white/5 border border-cyan-500/30
                text-white
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(56,189,248,0.25)]
              "
            >
              <p className="text-2xl font-semibold text-cyan-100 mb-3">{t.name}</p>
              <p className="text-base text-gray-300">{t.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
