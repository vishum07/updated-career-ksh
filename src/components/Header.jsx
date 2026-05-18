import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, resourcesMegaMenu } from '../data/companyData'
import Logo from './Logo'

function hashId(to) {
  return to.replace('/#', '')
}

function isHashRoute(to) {
  return typeof to === 'string' && to.startsWith('/#')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileItNestedOpen, setMobileItNestedOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [itNestedOpen, setItNestedOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const servicesWrapRef = useRef(null)
  const resourcesWrapRef = useRef(null)
  const location = useLocation()

  const closeServicesDropdown = () => {
    setServicesOpen(false)
    setItNestedOpen(false)
  }

  const closeResourcesDropdown = () => {
    setResourcesOpen(false)
  }

  const closeMobile = () => {
    setMobileMenuOpen(false)
    setMobileServicesOpen(false)
    setMobileItNestedOpen(false)
    closeServicesDropdown()
    closeResourcesDropdown()
  }

  useEffect(() => {
    if (!servicesOpen) return
    const onDoc = e => {
      if (servicesWrapRef.current && !servicesWrapRef.current.contains(e.target)) {
        closeServicesDropdown()
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [servicesOpen])

  useEffect(() => {
    if (!resourcesOpen) return
    const onDoc = e => {
      if (resourcesWrapRef.current && !resourcesWrapRef.current.contains(e.target)) {
        closeResourcesDropdown()
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [resourcesOpen])

  const handleNavClick = (e, to) => {
    if (to === '/' && location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      closeMobile()
      return
    }
    if (isHashRoute(to) && location.pathname === '/') {
      e.preventDefault()
      const id = hashId(to)
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `/#${id}`)
      closeMobile()
      return
    }
    closeMobile()
  }

  const linkClass =
    'text-sm font-medium text-slate-200 hover:text-orange-300 transition-colors'

  const dropdownItemClass =
    'block px-4 py-2.5 text-sm text-slate-200 hover:bg-orange-500/10 hover:text-orange-300 transition-colors'

  const renderServiceChild = (child, mode) => {
    const isMobile = mode === 'mobile'
    if (child.children?.length) {
      const open = isMobile ? mobileItNestedOpen : itNestedOpen
      const setOpen = isMobile ? setMobileItNestedOpen : setItNestedOpen

      return (
        <div key={child.name}>
          <button
            type="button"
            className={
              isMobile
                ? 'flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base text-slate-300 transition-colors hover:bg-white/5 hover:text-orange-300'
                : `${dropdownItemClass} flex w-full items-center justify-between gap-2 text-left`
            }
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            {child.name}
            <svg
              className={`h-4 w-4 shrink-0 opacity-80 ${open ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {open && (
            <div
              className={
                isMobile
                  ? 'ml-2 flex flex-col gap-0 border-l border-orange-500/20 py-1 pl-3'
                  : 'border-t border-white/5 bg-slate-950/70'
              }
            >
              <Link
                to={child.to}
                className={
                  isMobile
                    ? 'rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:text-orange-300'
                    : 'block px-6 py-2 text-xs font-medium text-slate-400 hover:bg-orange-500/10 hover:text-orange-300'
                }
                onClick={e => {
                  handleNavClick(e, child.to)
                  if (!isMobile) closeServicesDropdown()
                }}
              >
                Overview
              </Link>
              {child.children.map(sub => (
                <Link
                  key={sub.to + sub.name}
                  to={sub.to}
                  className={
                    isMobile
                      ? 'rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:text-orange-300'
                      : `${dropdownItemClass} pl-6`
                  }
                  onClick={e => {
                    handleNavClick(e, sub.to)
                    if (!isMobile) closeServicesDropdown()
                  }}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={child.to + child.name}
        to={child.to}
        className={isMobile ? dropdownItemClass.replace('block ', 'block rounded-lg ') : dropdownItemClass}
        onClick={e => {
          handleNavClick(e, child.to)
          if (!isMobile) closeServicesDropdown()
        }}
      >
        {child.name}
      </Link>
    )
  }

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full z-50
          border-b border-orange-500/15
          bg-gradient-to-b from-slate-900/98 via-slate-900/95 to-slate-950/98
          backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.35)]
        "
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
          <Link
            to="/"
            onClick={e => handleNavClick(e, '/')}
            className="flex min-w-0 items-center gap-3 rounded-lg py-1 outline-offset-4 transition-opacity hover:opacity-95"
            aria-label="Kshetrapati Industries — Home"
          >
            <Logo />
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-base font-bold tracking-tight text-cyan-200 sm:text-lg">
                Kshetrapati Industries
              </span>
              <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-300/80 sm:block">
                Pvt. Ltd.
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map(link => {
              if (link.name === 'Resources') {
                return (
                  <div
                    key={link.name}
                    ref={resourcesWrapRef}
                    className="relative"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <button
                      type="button"
                      className={`${linkClass} inline-flex items-center gap-1`}
                      aria-expanded={resourcesOpen}
                      aria-haspopup="true"
                      onFocus={() => setResourcesOpen(true)}
                      onClick={() => setResourcesOpen(o => !o)}
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 opacity-80 ${resourcesOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {resourcesOpen && (
                      <>
                        {/* hover-bridge so cursor can move into panel without closing */}
                        <div className="absolute left-0 right-0 top-full h-4" />
                        <div
                          className="
                            absolute left-1/2 top-full z-50 translate-y-4 w-[min(780px,calc(100vw-2.5rem))]
-translate-x-[56%] overflow-hidden rounded-2xl max-w-[90vw]
                            border border-orange-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-lg
                          "
                          role="menu"
                        >
                        <div className="grid grid-cols-3 gap-6 px-6 py-5">
                          {resourcesMegaMenu.map(col => (
                            <div key={col.title} className="min-w-0">
                              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                {col.title}
                              </div>
                              <div className="space-y-1">
                                {col.items.map(item => (
                                  <Link
                                    key={item.to + item.name}
                                    to={item.to}
                                    role="menuitem"
                                    onClick={e => {
                                      handleNavClick(e, item.to)
                                      closeResourcesDropdown()
                                    }}
                                    className="
                                      block rounded-lg px-3 py-2 text-sm text-slate-200
                                      hover:bg-orange-500/10 hover:text-orange-300 transition-colors
                                    "
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-black/20 px-6 py-3.5">
                          <div className="text-xs text-slate-400">
                            Explore resources and solution pages by category.
                          </div>
                          <Link
                            to="/resources"
                            onClick={e => {
                              handleNavClick(e, '/resources')
                              closeResourcesDropdown()
                            }}
                            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                          >
                            View all resources →
                          </Link>
                        </div>
                      </div>
                      </>
                    )}
                  </div>
                )
              }

              if (link.children) {
                return (
                  <div key={link.name} ref={servicesWrapRef} className="relative">
                    <button
                      type="button"
                      className={`${linkClass} inline-flex items-center gap-1`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen(o => !o)}
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 opacity-80 ${servicesOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div
                        className="
                          absolute left-0 top-full z-50 mt-2 min-w-[15rem] overflow-hidden rounded-xl
                          border border-orange-500/20 bg-slate-900/98 py-1 shadow-xl backdrop-blur-md
                          divide-y divide-white/5
                        "
                        role="menu"
                      >
                        {link.children.map(child => renderServiceChild(child, 'desktop'))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.to + link.name}
                  to={link.to}
                  onClick={e => handleNavClick(e, link.to)}
                  className={linkClass}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5
              rounded-lg border border-orange-500/20 bg-slate-800/50 md:hidden
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60
            "
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
            type="button"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-200 transition-transform ${mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-200 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-200 transition-transform ${mobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/98 pt-20 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-6 pb-8">
            {navLinks.map(link =>
              link.children ? (
                <div key={link.name} className="flex flex-col gap-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(o => !o)}
                    className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-slate-900/80 px-4 py-4 text-left text-lg font-semibold text-white transition-colors hover:border-orange-500/30 hover:text-orange-300"
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.name}
                    <svg
                      className={`h-5 w-5 shrink-0 opacity-80 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-2 flex flex-col gap-1 border-l border-orange-500/20 pl-3">
                      {link.children.map(child => renderServiceChild(child, 'mobile'))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to + link.name}
                  to={link.to}
                  onClick={e => handleNavClick(e, link.to)}
                  className="rounded-xl border border-white/5 bg-slate-900/80 px-4 py-4 text-lg font-semibold text-white transition-colors hover:border-orange-500/30 hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </>
  )
}
