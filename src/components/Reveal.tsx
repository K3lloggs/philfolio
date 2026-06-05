import { motion, type HTMLMotionProps } from 'framer-motion'
import { reveal, VIEWPORT } from '../lib/motion'

type RevealProps = Omit<HTMLMotionProps<'div'>, 'variants' | 'custom'> & {
  /** stagger delay in seconds */
  delay?: number
}

/**
 * The workhorse. Fade-rise on the house easing, fires once on scroll-in.
 * Under reduced motion (MotionConfig) the y transform is dropped to a clean fade.
 */
export default function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={reveal}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
