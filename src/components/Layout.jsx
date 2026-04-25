import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import CompanySection from './CompanySection'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()
  console.log('🔍 [DEBUG] Layout rendering, pathname:', pathname);
  const isHome = pathname === '/'

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const sections = document.querySelectorAll('main section, main article, main .rounded-2xl, main .rounded-3xl')
    const seen = new Set()
    const targets = []

    sections.forEach(section => {
      const textNodes = section.querySelectorAll(
        'h1, h2, h3, h4, p, li, blockquote, label, a, button, span',
      )
      textNodes.forEach((node, index) => {
        if (seen.has(node)) return
        seen.add(node)
        node.style.setProperty('--reveal-delay', `${Math.min(index * 45, 420)}ms`)
        node.style.setProperty('--reveal-shift', index % 2 === 0 ? '20px' : '14px')
        targets.push(node)
      })
    })

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('reveal-text-show')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    targets.forEach(node => {
      if (node.classList.contains('reveal-text-show')) return
      node.classList.add('reveal-text-init')
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <>
      <Header />
      <main className={isHome ? 'min-h-screen' : 'min-h-screen pt-16'}>
        <Outlet />
      </main>
      <CompanySection />
      <Footer />
    </>
  )
}

