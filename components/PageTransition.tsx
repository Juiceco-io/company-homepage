// PageTransition: Framer Motion AnimatePresence caused double-animation bugs in
// Next.js App Router (router and AnimatePresence fight each other on re-navigation).
// Replaced with a simple CSS fadeIn on `main` in globals.css.
// This component is kept as a passthrough to avoid breaking any existing imports.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
