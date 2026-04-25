import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LINES = [
  'Applied Intelligence. Reimagined.',
  'Driving Enterprise Growth with AI, ML & Data.',
  'Powering the Future of Intelligence.',
]

export default function HeroScrollingText() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const rootRef = useRef(null)
  const isInView = useInView(rootRef, { once: false, amount: 0.35 })

  useEffect(() => {
    if (!isInView || isPaused) return
    const id = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % LINES.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [isInView, isPaused])

  return (
    <div
      ref={rootRef}
      className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-12 w-full overflow-hidden md:h-14">
        {LINES.map((line, index) => (
          <motion.p
            key={line}
            animate={{
              y: activeIndex === index ? 0 : 16,
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 0.985,
              filter: activeIndex === index ? 'blur(0px)' : 'blur(6px)',
            }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="
              absolute inset-0
              flex items-center justify-center text-center
              text-base font-semibold leading-relaxed md:text-xl
              bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent
              drop-shadow-[0_0_10px_rgba(56,189,248,0.35)]
            "
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  )
}
