import { miniGamesData } from '../data/portfolioData'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FunZone() {
  const sectionRef = useRef(null)
  const gameRefs = useRef([])
  const [hoveredGame, setHoveredGame] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gameRefs.current.forEach((game, index) => {
        if (!game) return

        gsap.from(game, {
          scrollTrigger: {
            trigger: game,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          opacity: 0,
          rotation: -10,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleGameClick = (game) => {
    if (game.link) return
    alert(`🎮 ${game.title} - Coming Soon!\n\nThis interactive game will be available in the full version.`)
  }

  return (
    <section
      ref={sectionRef}
      id="fun-zone"
      className="  min-h-screen
      bg-[radial-gradient(circle_at_center,_#3f3f46_0%,_#000000_60%)]
      py-20 px-6
      relative overflow-hidden"
        >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Fun Zone 🎮
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 text-lg">
            Take a break and play some games I've built!
          </p>
        </div>

        {/* Games Grid */}
        <div className="
          flex gap-6 mb-12
          overflow-x-auto pb-4
          snap-x snap-mandatory
          hide-scrollbar
          sm:grid sm:grid-cols-2
          lg:grid-cols-4
          sm:overflow-visible
        ">
          {miniGamesData.map((game, index) => (
            <div
              key={game.id}
              ref={(el) => (gameRefs.current[index] = el)}
              className="
                group relative cursor-pointer
                min-w-[280px] sm:min-w-0
                snap-center
              "
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              onClick={() => handleGameClick(game)}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
                style={{ background: game.color }}
              ></div>

              {/* Game Card */}
              <div
                className="relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-white overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${game.color}22 0%, ${game.color}44 100%)`,
                }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={game.icon}
                      alt={`${game.title} icon`}
                      className="w-16 h-16 object-contain"
                    />

                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2  transition-colors">
                    {game.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white mb-4 group-hover:font-bold transition-colors">
                    {game.description}
                  </p>

                  {/* Play Button */}
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <button
                      className="w-full py-3 rounded-xl font-bold text-white transition-all duration-300 transform group-hover:scale-105"
                      style={{
                        background: game.color,
                        boxShadow: hoveredGame === game.id ? `0 10px 30px ${game.color}66` : 'none',
                      }}
                    >
                      Play Now 🎮
                    </button>
                  </a>
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20"
                  style={{ background: game.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="hidden sm:block text-6xl">🎯</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Games?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building games isn't just fun—it's a great way to practice problem-solving,
                state management, and user interaction patterns. Each of these games demonstrates
                different aspects of web development, from canvas manipulation to complex game logic.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full font-medium">
                  Algorithm Design
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                  State Management
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">
                  Canvas API
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  User Experience
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}