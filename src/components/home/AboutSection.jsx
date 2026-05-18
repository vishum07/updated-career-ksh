import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DottedSurface } from '../ui/dotted-surface'
import { aboutContent } from '../../data/companyData'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const sectionRef = useRef(null)
  const statsRef = useRef([])
  const endHighlights = [
    { value: '9+', label: 'Years Average Experience' },
    { value: '25+', label: 'Technical Specialists' },
    { value: '10+', label: 'Industry Domains' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, index) => {
        if (!stat) return
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-0 overflow-hidden bg-gradient-to-b from-[#121212] to-[#000000] py-20 px-6 scroll-mt-16"
    >
      <DottedSurface />

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
            {aboutContent.intro}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aboutContent.stats.map((s, i) => (
            <div
              key={s.label}
              ref={el => {
                statsRef.current[i] = el
              }}
              className="
                text-center p-6 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-sm
              "
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-gray-400 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Who We Are</h3>
            <ul className="space-y-3 text-gray-300">
              {aboutContent.whoWeAre.map(line => (
                <li key={line} className="flex gap-2">
                  <span className="text-cyan-500">•</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">How We Work</h3>
            <ol className="space-y-4 text-gray-300">
              {aboutContent.process.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="text-cyan-500 font-mono text-sm w-6">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Core Strengths</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutContent.strengths.map(st => (
              <div
                key={st}
                className="text-gray-300 border border-white/10 rounded-xl px-4 py-3"
              >
                {st}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16 p-10 rounded-3xl border border-cyan-500/30 bg-cyan-950/20">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">Mission</h3>
          <p className="text-2xl md:text-3xl font-bold text-white">
            {aboutContent.mission}
          </p>
        </div>

        {aboutContent.missionParagraphs?.length ? (
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Mission</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {aboutContent.missionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Our Team</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutContent.team.map(role => (
              <span
                key={role}
                className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-gray-200"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        {aboutContent.teamParagraphs?.length ? (
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Team</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {aboutContent.teamParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ) : null}

        {aboutContent.excellenceParagraphs?.length ? (
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Excellence</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {aboutContent.excellenceParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        ) : null}

        {aboutContent.cta ? (
          <div className="text-center mb-16 p-10 rounded-3xl border border-cyan-500/30 bg-cyan-950/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{aboutContent.cta.title}</h3>
            <p className="text-gray-200/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              {aboutContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact?to=vishwajitv.mangsule@gmail.com"
                className="
                  inline-flex justify-center px-8 py-4 rounded-full
                  bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
                  hover:scale-105 transition-transform
                "
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="
                  inline-flex justify-center px-8 py-4 rounded-full
                  border border-white/30 font-semibold hover:bg-white/10 transition-colors
                "
              >
                Schedule Call
              </Link>
            </div>
            {aboutContent.cta.footerLine ? (
              <p className="mt-8 text-sm text-gray-300">{aboutContent.cta.footerLine}</p>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
          <Link
            to="/contact"
            className="
              inline-flex justify-center px-8 py-4 rounded-full
              bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold
              hover:scale-105 transition-transform
            "
          >
            Schedule Call
          </Link>
          <Link
            to="/contact?to=vishwajitv.mangsule@gmail.com"
            className="
              inline-flex justify-center px-8 py-4 rounded-full
              border border-white/30 font-semibold hover:bg-white/10 transition-colors
            "
          >
            Get Started
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {endHighlights.map(item => (
            <div
              key={item.label}
              className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 px-8 py-7 text-white"
            >
              <p className="text-4xl font-bold leading-none bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="mt-3 text-lg text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
