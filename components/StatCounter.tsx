'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatCounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export function StatCounter({ target, suffix = '', duration = 1800, className }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
