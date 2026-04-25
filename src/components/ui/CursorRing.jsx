import { useRef, useEffect } from 'react'

export default function CursorRing() {
  const containerRef = useRef(null)

  useEffect(() => {
    let canvas = document.getElementById('cursor-ring-canvas')
    if (canvas) canvas.remove()

    canvas = document.createElement('canvas')
    canvas.id = 'cursor-ring-canvas'
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '1'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    const RING_RADIUS = 50
    const PARTICLE_COUNT = 25
    const SMOOTH = 0.08

    let mouseX = 0
    let mouseY = 0
    let currX = 0
    let currY = 0

    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      angle: (i / PARTICLE_COUNT) * Math.PI * 2,
      vx: 0,
      vy: 0
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const mouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const isEmptyBackground = () => {
      const el = document.elementFromPoint(mouseX, mouseY)
      return el === document.body || el === document.documentElement
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      currX += (mouseX - currX) * SMOOTH
      currY += (mouseY - currY) * SMOOTH

      if (!isEmptyBackground()) {
        requestAnimationFrame(animate)
        return
      }

      particles.forEach((p, i) => {
        p.angle += 0.02
        p.vx = Math.cos(p.angle) * 1.5 * Math.sin(Date.now() * 0.001 + i)
        p.vy = Math.sin(p.angle) * 1.5 * Math.sin(Date.now() * 0.001 + i)

        const px = currX + Math.cos(p.angle) * RING_RADIUS + p.vx
        const py = currY + Math.sin(p.angle) * RING_RADIUS + p.vy

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 2.5)
        gradient.addColorStop(0, 'rgba(255,255,255,0.15)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')

        ctx.shadowBlur = 4
        ctx.shadowColor = 'rgba(255,255,255,0.3)'
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(px, py, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.shadowBlur = 0

      requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', mouseMove)
    resize()
    animate()

    return () => {
      const existing = document.getElementById('cursor-ring-canvas')
      if (existing) existing.remove()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return <div ref={containerRef} />
}

