import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Maximize2, Volume2, VolumeX } from 'lucide-react'

function SolutionCards({ solutions, startIndex = 0 }) {
  return (
    <div className="space-y-10">
      {solutions.map((s, idx) => (
        <div
          key={`${s.title}-${startIndex + idx}`}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <div className="flex gap-3">
            <span className="shrink-0 font-mono text-lg text-cyan-400">{startIndex + idx + 1}.</span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-400/90">{s.tagline}</p>
              {s.description ? (
                <p className="mt-3 leading-relaxed text-gray-400">{s.description}</p>
              ) : null}
              <p className="mt-5 font-medium text-white">{s.listLabel || 'Key Capabilities'}:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6 text-gray-400">
                {s.capabilities.map(x => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function VideoPlayer({ src }) {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  const toggleFullscreen = () => {
    const elem = videoRef.current || containerRef.current
    if (!elem) return

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  const handleFullscreenChange = () => {
    setIsFullscreen(!!document.fullscreenElement)
  }

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement))
    }
    document.addEventListener('fullscreenchange', handleChange)
    document.addEventListener('webkitfullscreenchange', handleChange)
    document.addEventListener('msfullscreenchange', handleChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleChange)
      document.removeEventListener('webkitfullscreenchange', handleChange)
      document.removeEventListener('msfullscreenchange', handleChange)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative group overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900/80 to-black/80 shadow-2xl shadow-cyan-500/10"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        autoPlay
        muted
        loop
        playsInline
        preload="lazy"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient for controls visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Mute/Unmute button */}
        <button
          onClick={toggleMute}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-colors"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>

        {/* Fullscreen button */}
        <button
          onClick={toggleFullscreen}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white hover:bg-black/70 transition-colors"
          aria-label="Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-500/20 group-hover:ring-cyan-500/40 transition-all duration-300" />
    </div>
  )
}

export default function ServiceChapter({
  title,
  subtitle,
  overview = [],
  challenges = [],
  solutionsTitle,
  solutions = [],
  additionalSolutionSections = [],
  useCasesTitle,
  useCasesIntro,
  useCases = [],
  HeadingTag = 'h1',
  topDivider = false,
  videoSrc = null,
}) {
  const H = HeadingTag
  const hasUseCases = Array.isArray(useCases) && useCases.length > 0
  const hasVideo = !!videoSrc

  let runningIndex = solutions.length

  return (
    <article
      className={`px-6 py-14 md:py-20 ${topDivider ? 'border-t border-white/10' : ''}`}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header with optional video */}
        <header className={`mb-12 ${hasVideo ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={hasVideo ? '' : ''}
          >
            <H className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">{title}</H>
            <p className="text-lg text-cyan-300/90 md:text-xl">{subtitle}</p>
          </motion.div>

          {/* Video Container (Right Side) */}
          {hasVideo && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="w-full"
            >
              <VideoPlayer src={videoSrc} />
            </motion.div>
          )}
        </header>

        <h2 className="mb-4 text-2xl font-semibold text-white">Overview</h2>
        {overview.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-gray-400">
            {p}
          </p>
        ))}

        <hr className="my-12 border-white/10" />

        <h2 className="mb-4 text-2xl font-semibold text-white">Key Challenges We Solve</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-400">
          {challenges.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <hr className="my-12 border-white/10" />

        <h2 className="mb-10 text-2xl font-semibold text-white">{solutionsTitle}</h2>
        <SolutionCards solutions={solutions} startIndex={0} />

        {additionalSolutionSections.map(section => {
          const start = section.numberingReset ? 0 : runningIndex
          if (!section.numberingReset) {
            runningIndex += section.solutions.length
          }
          return (
            <div key={section.title}>
              <hr className="my-12 border-white/10" />
              <h2 className="mb-10 text-2xl font-semibold text-white">{section.title}</h2>
              <SolutionCards solutions={section.solutions} startIndex={start} />
            </div>
          )
        })}

        {hasUseCases ? (
          <>
            <hr className="my-12 border-white/10" />

            <h2 className="mb-6 text-2xl font-semibold text-white">{useCasesTitle}</h2>
            {useCasesIntro ? <p className="mb-10 text-gray-500">{useCasesIntro}</p> : null}

            <div className="space-y-12">
              {useCases.map(uc => (
                <div key={uc.title}>
                  <h3 className="mb-2 text-lg font-bold text-white">{uc.title}</h3>
                  <p className="mb-3 leading-relaxed text-gray-400">{uc.description}</p>
                  <ul className="list-disc space-y-1.5 pl-6 text-gray-500">
                    {uc.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </article>
  )
}