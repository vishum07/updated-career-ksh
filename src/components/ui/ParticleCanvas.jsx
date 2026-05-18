import { useRef, useEffect } from 'react'

export default function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const DOT_COUNT = 120
        const MAX_DISTANCE = 105
        const ATTRACTION_FORCE = 0.01
        const MAX_SPEED = 0.7

        const mouse = {
            x: null,
            y: null,
            radius: 100
        }

        const resize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        const mouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const mouseOut = () => {
            mouse.x = null
            mouse.y = null
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseout', mouseOut)

        class Particle {
            constructor() {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.vx = (Math.random() - 0.5) * 0.9
                this.vy = (Math.random() - 0.5) * 0.9
                this.radius = 2.2
                this.baseOpacity = Math.random() * 0.22 + 0.18
                this.opacity = this.baseOpacity


            }

            move() {
                this.x += this.vx
                this.y += this.vy

                if (this.x < 0 || this.x > width) this.vx *= -1
                if (this.y < 0 || this.y > height) this.vy *= -1
            }

            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
                const t = this.opacity
                const r = Math.round(200 + t * 35)
                const g = Math.round(208 + t * 28)
                const b = Math.round(218 + t * 22)
                ctx.fillStyle = `rgba(${r},${g},${b},${this.opacity})`
                ctx.fill()
            }

            attractTo(target) {
                const dx = target.x - this.x
                const dy = target.y - this.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist === 0) return

                this.vx += (dx / dist) * ATTRACTION_FORCE
                this.vy += (dy / dist) * ATTRACTION_FORCE

                this.vx = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, this.vx))
                this.vy = Math.max(-MAX_SPEED, Math.min(MAX_SPEED, this.vy))
            }
        }

        const particles = Array.from({ length: DOT_COUNT }, () => new Particle())

        const distance = (a, b) => {
            const dx = a.x - b.x
            const dy = a.y - b.y
            return Math.sqrt(dx * dx + dy * dy)
        }

        let animationId

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            particles.forEach(p => {
                p.move()
                p.draw()
            })

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const d = distance(particles[i], particles[j])
                    if (d < MAX_DISTANCE) {
                        const lineAlpha = (1 - d / MAX_DISTANCE) * 0.48
                        ctx.strokeStyle = `rgba(186,198,214,${lineAlpha})`
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }

                if (mouse.x !== null) {
                    const d = distance(particles[i], mouse)

                    if (d < mouse.radius) {
                        const opacity = 1 - d / mouse.radius

                        // line to mouse
                        ctx.strokeStyle = `rgba(165,180,210,${opacity * 0.75})`
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(mouse.x, mouse.y)
                        ctx.stroke()

                        // 🔥 attract particle
                        particles[i].attractTo(mouse)

                        // 🔥 boost dot opacity near mouse
                        particles[i].opacity = Math.min(1, particles[i].opacity + 0.03)
                    } else {
                        // fade back when away from mouse
                        particles[i].opacity = Math.max(
                            particles[i].baseOpacity,
                            particles[i].opacity - 0.015
                        )
                    }
                }

            }

            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', mouseMove)
            window.removeEventListener('mouseout', mouseOut)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
        />
    )
}
