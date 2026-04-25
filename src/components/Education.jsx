import { educationData, certificationsData } from '../data/portfolioData'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
  const sectionRef = useRef(null)
  const timelineRef = useRef([])
  const certRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate education timeline
      timelineRef.current.forEach((item, index) => {
        if (!item) return

        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })

      // Animate certifications
      certRefs.current.forEach((cert, index) => {
        if (!cert) return

        gsap.from(cert, {
          scrollTrigger: {
            trigger: cert,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
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
      id="education"
      className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== Section Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="
            bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_30px_rgba(139,92,246,0.45)]
          ">
              Education & Certifications
            </span>
          </h2>
          <div className="
          w-28 h-1 mx-auto rounded-full
          bg-gradient-to-r from-violet-400 to-blue-400
          shadow-[0_0_20px_rgba(99,102,241,0.6)]
        " />
        </div>

        {/* ===== Education Timeline ===== */}
        <div className="mb-24">
          <h3 className="
          text-3xl font-bold mb-12 text-gray-100
          flex items-center gap-3
          drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]
        ">
            <img src="/graduation.png" alt="Education" className="w-8 h-8" />
            Education
          </h3>

          <div className="relative">

            {/* Timeline vertical line */}
            <div className="
            absolute left-8 top-0 bottom-0 w-0.5 hidden md:block
            bg-gradient-to-b from-violet-400 via-indigo-400 to-blue-400
            shadow-[0_0_25px_rgba(99,102,241,0.6)]
          " />

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={edu.id}
                  ref={(el) => (timelineRef.current[index] = el)}
                  className="relative pl-0 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="
                  absolute left-[1.6rem] top-6 w-6 h-6 hidden md:block
                  rounded-full
                  bg-gradient-to-br from-violet-400 to-blue-400
                  border-4 border-black
                  shadow-[0_0_25px_rgba(139,92,246,0.8)]
                " />

                  {/* Card */}
                  <div className="group relative md:max-w-none max-w-xl mx-auto">

                    <div className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-violet-500 to-blue-500
                    opacity-0 group-hover:opacity-15
                    blur-xl transition-opacity
                  " />

                    <div className="
                    relative bg-neutral-900/80 backdrop-blur-xl
                    rounded-2xl p-6
                    border border-white/10
                    shadow-[0_0_30px_rgba(99,102,241,0.12)]
                    hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]
                    transition-all
                  ">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{edu.icon}</div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h4 className="text-xl font-bold text-gray-100">
                              {edu.institution}
                            </h4>
                            <span className="
                            px-3 py-1 text-sm rounded-full font-medium w-fit
                            bg-violet-400/10 text-violet-300
                            border border-violet-400/20
                          ">
                              {edu.duration}
                            </span>
                          </div>

                          <p className="text-gray-300 font-medium mb-2">
                            {edu.degree}
                          </p>

                          {edu.cgpa && (
                            <p className="text-blue-400 font-semibold mb-3">
                              CGPA: {edu.cgpa}
                            </p>
                          )}

                          {edu.percentage && (
                            <p className="text-blue-400 font-semibold mb-3">
                              {edu.percentage}
                            </p>
                          )}

                          {edu.achievements.length > 0 && (
                            <div className="space-y-1">
                              {edu.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 text-sm text-gray-400"
                                >
                                  <span className="text-violet-400">✦</span>
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Certifications ===== */}
        <div>
          <h3 className="
          text-3xl font-bold mb-12 text-gray-100
          flex items-center gap-3
          drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]
        ">
            <span className="text-4xl">📜</span>
            Certifications
          </h3>

          <div className="
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory scroll-smooth
            hide-scrollbar
          ">
            {certificationsData.map((cert, index) => (
              <div
                key={cert.id}
                ref={(el) => (certRefs.current[index] = el)}
                className="
                group relative
                min-w-[260px] md:min-w-[300px] lg:min-w-[320px]
                snap-center
              "
              >
                <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-br from-violet-500 to-blue-500
                opacity-0 group-hover:opacity-20
                blur-xl transition-opacity
              " />

                <div className="
                relative bg-neutral-900/80 backdrop-blur-xl
                rounded-2xl p-6 h-full
                border border-white/10
                shadow-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]
                transition-all
                text-center flex flex-col
              ">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      absolute top-4 right-4
                      text-gray-400 hover:text-blue-400
                      transition-colors
                    "
                    aria-label="View certificate"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5"
                      />
                    </svg>
                  </a>

                  <div className="mb-4 w-20 h-20 flex items-center justify-center">
                    <img
                      src={cert.icon}
                      alt="icon"
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-gray-100 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2 flex-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )

}