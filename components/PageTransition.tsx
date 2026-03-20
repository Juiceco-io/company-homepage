'use client'

import { motion, AnimatePresence, type Variants, type Transition } from 'framer-motion'

type CubicBezier = [number, number, number, number]
const EASE_OUT_EXPO: CubicBezier = [0.16, 1, 0.3, 1]
import { usePathname } from 'next/navigation'

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO } as Transition,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25, ease: 'easeIn' } as Transition,
  },
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ display: 'contents' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
