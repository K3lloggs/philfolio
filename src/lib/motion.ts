// One transition language for the whole site. Defined once, imported everywhere —
// consistency is what makes the motion read as "designed," not assembled.
import type { Variants, Transition } from 'framer-motion'

/** House easing: expo-out. No spring, no overshoot, no bounce. */
export const EASE = [0.16, 1, 0.3, 1] as const

/** Duration band: 0.6s–1.1s. Deliberate, never sluggish. */
export const DUR = {
  fast: 0.6,
  base: 0.8,
  slow: 1.1,
} as const

/** Stagger children by 60–90ms. */
export const STAGGER = 0.075

/** whileInView config: reveal once, a touch before fully on screen. */
export const VIEWPORT = { once: true, margin: '-12%' } as const

const baseT: Transition = { duration: DUR.base, ease: EASE }

/** The workhorse: fade-rise. `custom` = delay (seconds) for stagger. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...baseT, delay },
  }),
}

/** Container that staggers its <Reveal> children. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER } },
}

/** Hero name mask: child translates y 110% -> 0 inside an overflow-hidden wrapper. */
export const maskChild: Variants = {
  hidden: { y: '110%' },
  show: (delay: number = 0) => ({
    y: '0%',
    transition: { duration: DUR.slow, ease: EASE, delay },
  }),
}

/** Hero labels / clock: fade-rise after the name lands. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...baseT, delay },
  }),
}
