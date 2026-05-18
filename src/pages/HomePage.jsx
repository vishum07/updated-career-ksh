import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Capabilities from '../components/home/Capabilities'
import TechEcosystem from '../components/home/TechEcosystem'
import Products from '../components/home/Products'
import Industries from '../components/home/Industries'
import Testimonials from '../components/home/Testimonials'
import ServicesSection from '../components/home/ServicesSection'
import HomeCTA from '../components/home/HomeCTA'

export default function HomePage() {
  console.log('🔍 [DEBUG] HomePage rendering');
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const tid = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => clearTimeout(tid)
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <Capabilities />
      <Products />
      <Industries />
      <TechEcosystem />
      <Testimonials />
      <ServicesSection />
      <HomeCTA />
    </>
  )
}
