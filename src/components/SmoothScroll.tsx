import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'
import { setLenis } from '../lib/scroll'

/**
 * Smooth scroll layer. This single lerp is most of the "flow" — the rest of the
 * motion system is tuned to it. Disabled entirely under prefers-reduced-motion.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    setLenis(lenis)

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [reduced])

  return <>{children}</>
}
