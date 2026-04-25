import { personalInfo } from '../data/portfolioData'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useRef } from 'react'

export default function Contact() {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty('--x', `${x}px`)
    card.style.setProperty('--y', `${y}px`)
  }

  return (
    <section
      id="contact"
      className="
        min-h-screen
        bg-gradient-to-b from-black to-[#101828]
        px-6 py-24
      "
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-400 text-lg">
          Have a project in mind? Let&apos;s talk about it!
        </p>
      </div>

      {/* Card Wrapper */}
      <div className="flex justify-center">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="
            relative max-w-3xl w-full text-center
            rounded-3xl p-12 md:p-16
            bg-white/5 backdrop-blur-xl
            border border-white/10
            overflow-hidden
          "
        >
          {/* Mouse-follow Glow (desktop only) */}
          <div
            className="
              pointer-events-none absolute inset-0
              hidden md:block
            "
            style={{
              background:
                'radial-gradient(600px circle at var(--x) var(--y), rgba(56,189,248,0.25), transparent 40%)',
            }}
          />

          {/* Static Glow (mobile fallback) */}
          <div
            className="
              pointer-events-none absolute inset-0
              md:hidden
              bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)]
            "
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Mail className="text-black" size={22} />
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let’s build something{' '}
              <span className="text-blue-400">amazing</span> together
            </h3>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="
                inline-flex items-center gap-3
                px-8 py-4 rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                text-black font-semibold
                hover:scale-105 transition-all
                shadow-[0_10px_40px_rgba(56,189,248,0.5)]
              "
            >
              <Mail size={18} />
              Send me an email
            </a>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Follow me on</p>

        <div className="flex justify-center gap-5">
          <SocialIcon href={personalInfo.github} color="hover:text-cyan-400">
            <FaGithub />
          </SocialIcon>

          <SocialIcon href={personalInfo.linkedin} color="hover:text-blue-400">
            <FaLinkedinIn />
          </SocialIcon>

          <SocialIcon href="https://instagram.com" color="hover:text-pink-400">
            <FaInstagram />
          </SocialIcon>
        </div>
      </div>
    </section>
  )
}

/* Social Icon Component */
function SocialIcon({ href, children, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-14 h-14 rounded-2xl
        bg-white/10 backdrop-blur-md
        border border-white/10
        flex items-center justify-center
        text-white text-xl
        ${color}
        hover:scale-110 transition-all
        shadow-lg
      `}
    >
      {children}
    </a>
  )
}
