'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function DottedSurface({ className = '', ...props }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const SEPARATION = 150
    const AMOUNTX = 40
    const AMOUNTY = 60

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 2000, 10000)

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.set(0, 355, 1220)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    containerRef.current.appendChild(renderer.domElement)

    const positions = []
    const colors = []
    const geometry = new THREE.BufferGeometry()

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2

        positions.push(x, 0, z)

        // WHITE DOTS (normalized)
        colors.push(1, 1, 1)
      }
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    )
    geometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(colors, 3)
    )

    const material = new THREE.PointsMaterial({
      size: 9,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let count = 0
    let animationId

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const arr = geometry.attributes.position.array
      let i = 0

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3
          arr[idx + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50
          i++
        }
      }

      geometry.attributes.position.needsUpdate = true
      renderer.render(scene, camera)
      count += 0.1
    }

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      {...props}
    />
  )
}
