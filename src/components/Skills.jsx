import { useState } from 'react'
import { skillsStack } from '../data/portfolioData'

export default function Skills() {
  const [paused, setPaused] = useState(false)

  // duplicate skills so the marquee loops seamlessly
  const duplicated = [...(skillsStack || []), ...(skillsStack || [])]

  // handlers to pause when hovering any chip or the row
  const handleEnter = () => setPaused(true)
  const handleLeave = () => setPaused(false)

  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Tech Stack</h2>
        <p className="text-gray-400 mt-2">
          Technologies I work with to bring ideas to life
        </p>
      </div>

      <div className="max-w-full mx-auto px-6 space-y-6">
        {/* Row 1 - moves left */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {/* left & right fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 pointer-events-none" />

          <div
            className="marquee-left"
            style={{
              // pause immediately when hovering
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            <div className="marquee-inner">
              {duplicated.map((s, i) => (
                <button
                  key={`l-${i}-${s}`}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="chip"
                  aria-label={s}
                  type="button"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - moves right */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className="absolute left-0 top-0 h-full w-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 pointer-events-none" />

          <div
            className="marquee-right"
            style={{
              animationPlayState: paused ? 'paused' : 'running',
            }}
          >
            <div className="marquee-inner">
              {duplicated.map((s, i) => (
                <button
                  key={`r-${i}-${s}`}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className="chip"
                  aria-label={s}
                  type="button"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .marquee-left,
        .marquee-right {
          width: 100%;
        }

        .marquee-inner {
          display: flex;
          gap: 1rem;
          align-items: center;
          /* make content width equal to both copies so 50% shift equals one copy */
          width: max-content;
        }

        /* chip / pill styles */
        .chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.1rem;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          transition: transform 150ms ease, color 150ms ease, box-shadow 150ms ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.5);
        }

        .chip:hover {
          transform: translateY(-4px) scale(1.03);
          color: #d6b3ff;
          box-shadow: 0 12px 30px rgba(0,0,0,0.6);
        }

        /* animations:
           - left row: translateX from 0 -> -50% (one full duplicated copy)
           - right row: translateX from -50% -> 0 (opposite direction)
        */
        .marquee-left .marquee-inner {
          animation: scroll-left 37s linear infinite;
        }

        .marquee-right .marquee-inner {
          animation: scroll-right 37s linear infinite;
        }

        /* immediate pause when pointer is over .marquee-inner (handled inline via style),
           but we keep CSS fallback too:
        */
        .marquee-left .marquee-inner:hover,
        .marquee-right .marquee-inner:hover {
          animation-play-state: paused !important;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* gentle fade edges to match screenshot look */
        .relative > .absolute.left-0 {
          left: 0;
          top: 0;
          height: 100%;
          width: 5.5rem;
          background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0));
          pointer-events: none;
        }
        .relative > .absolute.right-0 {
          right: 0;
          top: 0;
          height: 100%;
          width: 5.5rem;
          background: linear-gradient(to left, rgba(0,0,0,0.9), rgba(0,0,0,0));
          pointer-events: none;
        }

        /* responsive tweaks */
        @media (max-width: 640px) {
          .chip {
            padding: 0.4rem 0.8rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  )
}
