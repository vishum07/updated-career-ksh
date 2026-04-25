import { industries } from '../../data/companyData'

export default function Industries() {
  const loop = [...industries, ...industries]

  return (
    <section className="py-24 px-0 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Intelligence Across Industries
            </span>
          </h2>
          <p className="text-gray-400 mt-4">
            Kshetrapati Industries empowers organizations in every sector with tailored AI and
            technology solutions.
          </p>
        </div>
      </div>

      <div className="relative industries-marquee-mask">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-black to-transparent" />

        <div className="overflow-hidden py-2">
      <div className="industries-marquee-track flex gap-4 md:gap-6 w-max">
            {loop.map((industry, i) => (
              <div
                key={`${industry.slug}-${i}`}
                className="
                  flex shrink-0 items-center justify-center
                  min-w-[9rem] md:min-w-[11rem]
                  py-5 px-6 rounded-xl
                  bg-white/5 border border-white/10
                  text-sm md:text-base font-medium text-center
                  whitespace-nowrap
                  transition-transform duration-300 hover:scale-[1.02]
                "
              >
                {industry.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}