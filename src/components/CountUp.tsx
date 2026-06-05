import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { DUR, VIEWPORT } from '../lib/motion'

// expo-out — same family as the house easing, for a count that decelerates.
const expoOut = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))

type Props = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

/** Counts up once when scrolled into view. Static under reduced motion. */
export default function CountUp({ value, prefix = '', suffix = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, VIEWPORT)
  const reduced = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    let raf = 0
    let start: number | undefined
    const duration = DUR.slow * 1000
    const tick = (ts: number) => {
      if (start === undefined) start = ts
      const p = Math.min(1, (ts - start) / duration)
      setN(value * expoOut(p))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, reduced])

  // Static, fully-resolved value under reduced motion (no animation).
  const shown = reduced ? value : n

  return (
    <span ref={ref}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  )
}
