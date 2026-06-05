import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * Section-to-section continuity: the element drifts a few px slower than the
 * body as it passes through the viewport. Displacement stays small — felt, not
 * seen. Fully neutralized under reduced motion.
 */
export default function Parallax({
  amount = 28,
  className,
  children,
}: {
  amount?: number
  className?: string
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])

  return (
    <motion.div ref={ref} style={{ y: reduced ? 0 : y }} className={className}>
      {children}
    </motion.div>
  )
}
