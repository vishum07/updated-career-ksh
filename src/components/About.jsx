import { personalInfo } from '../data/portfolioData'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DottedSurface } from './ui/dotted-surface'
import { PixelCanvas } from "./ui/pixel-canvas"
import { FiMail } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FiDownload } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats on scroll
      statsRef.current.forEach((stat, index) => {
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

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Students Impacted', value: '2000+', icon: '🎯' },
    { label: 'CGPA', value: '8.73', icon: '🎓' },
  ]

  return (
    <>
      <section
        ref={sectionRef}
        id="about"
        className="
          relative min-h-screen overflow-hidden
          bg-gradient-to-b from-[#121212] to-[#000000]
          py-20 px-6
        "
      >
        {/* About-only background */}
        <DottedSurface />

        {/* Foreground content */}
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          {/* EVERYTHING ELSE stays the same */}

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

            {/* Left: Profile Card */}
            <div className="relative group opacity-75 hover:opacity-100 transition-opacity duration-300">


              <div
                className="
                  relative
                  overflow-hidden
                  text-white
                  max-w-2xl
                  rounded-3xl
                  bg-black
                  backdrop-blur-2xl
                  border border-white/20
                  shadow-[0_8px_30px_rgba(0,0,0)]
                  p-8
                  z-30
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:scale-[1.01]
                  hover:shadow-[0_20px_60px_rgba(14,165,233,0.35)]
                "
              >
                <a
                  href={personalInfo.resume}
                  download
                  className="
                    absolute
                    top-4
                    right-4
                    z-30
                    p-2
                    rounded-full
                    bg-black/60
                    text-white
                    backdrop-blur
                    hover:bg-cyan-500/20
                    hover:text-cyan-400
                    transition
                    group-hover:scale-110
                  "
                  aria-label="Download resume"
                >
                  <FiDownload className="w-5 h-5" />

                  <span
                    className="
                    pointer-events-none
                    absolute
                    -bottom-9
                    right-1/2
                    translate-x-1/2
                    whitespace-nowrap
                    rounded-md
                    bg-black/80
                    px-2
                    py-1
                    text-xs
                    text-white
                    opacity-0
                    scale-95
                    transition
                    duration-200
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                  >
                    Resume
                  </span>
                </a>

                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PixelCanvas gap={8} colors={["#38bdf8", "#0ea5e9", "#0284c7"]} />
                </div>


                {/* Card content */}
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-lg">
                    <img
                      src="/profile.jpeg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2">
                    {personalInfo.name}
                  </h3>

                  <p className="text-cyan-400 text-center font-medium mb-4">
                    {personalInfo.title}
                  </p>

                  <p className="text-gray-300 text-center mb-6">
                    📍 {personalInfo.location}
                  </p>

                  <div className="flex justify-center gap-6 text-xl">
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition">
                      <FiMail className="w-6 h-6" />
                    </a>

                    <a href={personalInfo.linkedin} target="_blank" className="hover:text-cyan-400 transition">
                      <FaLinkedin className="w-6 h-6" />
                    </a>

                    <a href={personalInfo.github} target="_blank" className="hover:text-cyan-400 transition">
                      <FaGithub className="w-6 h-6" />
                    </a>

                    <a href={personalInfo.leetcode} target="_blank">
                      <img
                        src="/leetcode.png"
                        alt="Leetcode"
                        className="w-6 h-6 transition group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Description */}
            <div
              className="
                  text-white
                  max-w-2xl
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/20
                  shadow-[0_8px_30px_rgba(0,0,0,0.6)]
                  p-8
                  transition-all
                  duration-300
                  hover:bg-white/15
                  opacity-85
                "
            >
              <h3 className="text-3xl font-bold mb-6 ">
                Full Stack Developer & Problem Solver
              </h3>
              <div className="space-y-4 leading-relaxed">
                <p>
                  Hey there! I'm a passionate <span className="font-bold text-cyan-600">Full Stack Developer</span> currently
                  pursuing my B.Tech in Electronics and Telecommunication at VIT Pune
                  with a CGPA of <span className="font-semibold text-cyan-600">8.73</span>.
                </p>
                <p>
                  I specialize in building <span className="font-bold">scalable web applications</span> using
                  modern technologies like React, Node.js, and MongoDB. My projects
                  range from AI-powered database query tools to cross-platform mobile
                  applications.
                </p>
                <p>
                  Beyond coding, I'm actively involved in <span className="font-bold text-cyan-600">student development</span> as
                  a Sponsorship Head at Abhivriddhi.
                </p>
                <p>
                  I'm always excited to learn new technologies and take on challenging
                  projects that make a real-world impact!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}