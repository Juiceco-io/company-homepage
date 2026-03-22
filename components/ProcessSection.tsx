'use client'

import { useRef } from 'react'
import { motion, useInView, type Transition } from 'framer-motion'

type CubicBezier = [number, number, number, number]
const EASE_OUT_EXPO: CubicBezier = [0.16, 1, 0.3, 1]

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dig into your business, your users, and the problem worth solving. No fluff.",
  },
  {
    number: "02",
    title: "Design",
    description: "We map out the solution — architecture, UX, and a clear plan before writing code.",
  },
  {
    number: "03",
    title: "Build",
    description: "We ship in tight iterations. You see real progress every week, not a big reveal.",
  },
  {
    number: "04",
    title: "Ship",
    description: "We launch, monitor, and make sure it sticks. Done means done.",
  },
]

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const fromLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: fromLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromLeft ? -50 : 50 }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: index * 0.1 } as Transition}
    >
      {/* Connector line (desktop) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-orange-500/50 to-transparent z-10" />
      )}
      <div className="flex flex-col gap-4">
        <div className="w-16 h-16 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center
                        hover:bg-orange-500/20 hover:border-orange-500/60 transition-all duration-300
                        hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
          <span className="text-orange-500 font-bold text-xl">{step.number}</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="work" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' } as Transition}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            How We Work
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A tight, proven process. No surprises, no dead ends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
