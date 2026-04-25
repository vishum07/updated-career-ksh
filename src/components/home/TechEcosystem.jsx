import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Wallet,
  Factory,
  ShoppingBag,
  Pill,
  Laptop,
  Truck,
  Ship,
  Heart,
  ShoppingCart,
  Users,
  Plane,
} from 'lucide-react'
import { ecosystem, industries } from '../../data/companyData'
import { motion } from 'framer-motion'

const iconMap = {
  'E-commerce': ShoppingCart,
  'eLearning solutions': Users,
  'FinTech': Wallet,
  'Hospital Management Solutions': Heart,
  'HRMS solutions': Users,
  'Import-export': Ship,
  'Manufacturing solutions': Factory,
  'Pharmaceutical solutions': Pill,
  'Tourism': Plane,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#3b82f6" />
          </pattern>
          <pattern id="grid-large" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#6366f1" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-large)" opacity="0.3" />
        <g stroke="#3b82f6" strokeWidth="0.5" opacity="0.2">
          <line x1="0" y1="20%" x2="100%" y2="20%">
            <animate attributeName="stroke-dasharray" values="0,1000;500,0" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="50%" x2="100%" y2="50%">
            <animate attributeName="stroke-dasharray" values="0,1000;300,0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="0" y1="80%" x2="100%" y2="80%">
            <animate attributeName="stroke-dasharray" values="0,1000;400,0" dur="3.5s" repeatCount="indefinite" />
          </line>
          <line x1="20%" y1="0" x2="20%" y2="100%">
            <animate attributeName="stroke-dasharray" values="0,1000;600,0" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="50%" y1="0" x2="50%" y2="100%">
            <animate attributeName="stroke-dasharray" values="0,1000;400,0" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="0" x2="80%" y2="100%">
            <animate attributeName="stroke-dasharray" values="0,1000;500,0" dur="4.5s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>
    </div>
  )
}

function IndustryCard({ industry, index }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const Icon = iconMap[industry] || Laptop

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.4) 0%, transparent 60%)`,
        }}
      />
      <div className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-black/80 via-black/90 to-black/80 border border-white/10 backdrop-blur-sm overflow-hidden">
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
        </div>
        <div className="relative mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
          </div>
        </div>
        <h3 className="relative text-base font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
          {industry}
        </h3>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  )
}

export default function TechEcosystem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-24 md:py-28 px-6 bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      {/* Network background */}
      <NetworkBackground />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {ecosystem.center}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Kshetrapati Industries brings together advanced technologies to build
            powerful, scalable, and future-ready solutions that drive business
            transformation.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {industries.map((industry, index) => (
            <Link 
              key={`${industry.slug}-${index}`}
              to={`/services/it/${industry.slug}`}
              className="block group/card relative"
            >
              <IndustryCard industry={industry.name} index={index} />
            </Link>
          ))}
        </motion.div>


      </div>
    </section>
  )
}