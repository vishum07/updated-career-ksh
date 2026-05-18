"use client"

import React, { useEffect, forwardRef } from "react"

/* ---------------- Pixel ---------------- */
class Pixel {
  constructor(canvas, ctx, x, y, color, speed, delay) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.color = color
    this.speed = Math.random() * speed
    this.size = 0
    this.sizeStep = Math.random() * 0.4
    this.minSize = 0.5
    this.maxSize = Math.random() * 2
    this.delay = delay
    this.counter = 0
    this.counterStep = Math.random() * 4
    this.isIdle = false
    this.isReverse = false
  }

  draw() {
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
  }

  appear() {
    if (this.counter < this.delay) {
      this.counter += this.counterStep
      return
    }
    this.size += this.sizeStep
    if (this.size > this.maxSize) this.size = this.maxSize
    this.draw()
  }

  disappear() {
    this.size -= 0.1
    if (this.size <= 0) {
      this.size = 0
      this.isIdle = true
    }
    this.draw()
  }
}

/* ---------------- Web Component ---------------- */
class PixelCanvasElement extends HTMLElement {
  constructor() {
    super()
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.attachShadow({ mode: "open" }).appendChild(this.canvas)
    this.pixels = []
  }

  connectedCallback() {
    this.resize()
    window.addEventListener("resize", () => this.resize())
    this.createPixels()
  }

  resize() {
    this.canvas.width = this.offsetWidth
    this.canvas.height = this.offsetHeight
  }

  createPixels() {
    const gap = Number(this.dataset.gap || 8)
    const colors = (this.dataset.colors || "").split(",")

    for (let x = 0; x < this.canvas.width; x += gap) {
      for (let y = 0; y < this.canvas.height; y += gap) {
        this.pixels.push(
          new Pixel(
            this.canvas,
            this.ctx,
            x,
            y,
            colors[Math.floor(Math.random() * colors.length)],
            0.3,
            Math.random() * 100
          )
        )
      }
    }
    this.animate()
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.pixels.forEach((p) => p.appear())
    requestAnimationFrame(() => this.animate())
  }
}

/* ---------------- React Wrapper ---------------- */
export const PixelCanvas = forwardRef(function PixelCanvas(props, ref) {
  useEffect(() => {
    if (!customElements.get("pixel-canvas")) {
      customElements.define("pixel-canvas", PixelCanvasElement)
    }
  }, [])

  return (
    <pixel-canvas
      ref={ref}
      data-gap={props.gap || 8}
      data-colors={(props.colors || []).join(",")}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  )
})
