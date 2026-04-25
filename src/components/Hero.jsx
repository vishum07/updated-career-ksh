import { Link } from 'react-router-dom'
import HeroBackground from './HeroBackground'
import HeroScrollingText from './home/HeroScrollingText'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="light-pass-loop mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          data-text="Kshetrapati Industries"
          style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Kshetrapati Industries
        </h1>

        <HeroScrollingText />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#capabilities"
            className="
              pointer-events-auto inline-flex items-center justify-center
              px-8 py-3 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-semibold
              hover:scale-105 transition-transform
              shadow-[0_10px_40px_rgba(56,189,248,0.35)]
            "
          >
            Discover Our Capabilities
          </a>
          <Link
            to="/contact?to=contact@kshetrapati.com"
            className="
              pointer-events-auto inline-flex items-center justify-center
              px-8 py-3 rounded-full
              border border-white/30 text-white font-semibold
              hover:bg-white/10 transition-colors
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
