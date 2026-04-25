import { Link } from 'react-router-dom'

export default function HomeCTA() {
  return (
    <section className="py-24 px-6 bg-[#101828] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to transform your business?
          </span>
        </h2>
        <p className="text-gray-300 mb-8">
          Connect with Kshetrapati Industries experts to unlock the next level of intelligence,
          automation, and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact?to=contact@kshetrapati.com"
            className="
              inline-flex items-center justify-center px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-semibold
              hover:scale-105 transition-transform
              shadow-[0_10px_40px_rgba(56,189,248,0.35)]
            "
          >
            Contact Us
          </Link>
          <Link
            to="/contact?to=vishwajitv.mangsule@gmail.com"
            className="
              inline-flex items-center justify-center px-8 py-4 rounded-full
              border border-white/30 font-semibold
              hover:bg-white/10 transition-colors
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
