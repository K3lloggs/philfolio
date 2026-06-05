import { motion, type Variants } from 'framer-motion'
import { EASE, DUR, maskChild, fadeUp } from '../lib/motion'
import { profile } from '../lib/content'
import BlurImage from './BlurImage'
import Clock from './Clock'

// Hero portrait settles (scale + fade) behind a shade that wipes open.
const photoScale: Variants = {
  hidden: { scale: 1.06, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: DUR.slow, ease: EASE, delay: 0.2 } },
}
const photoWipe: Variants = {
  hidden: { scaleY: 1 },
  show: { scaleY: 0, transition: { duration: 0.95, ease: EASE, delay: 0.25 } },
}

function MaskWord({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="word">
      <motion.span variants={maskChild} custom={delay}>
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Dark, full-viewport. Three columns: label + CONNOR / portrait / label + CLOSE
 * + meta. Names mask-reveal first; labels, clock, and photo follow. Fires once
 * on mount (initial -> animate). Reduced motion drops the slides to clean fades.
 */
export default function Hero() {
  return (
    <motion.section
      className="hero"
      id="top"
      initial="hidden"
      animate="show"
    >
      <div className="glow" />
      <div className="grain" />
      <div className="inner">
        <div className="side left">
          <motion.div className="label" variants={fadeUp} custom={0.55}>
            {profile.leftLabel}
          </motion.div>
          <div className="name">
            <MaskWord delay={0.15}>{profile.first}</MaskWord>
          </div>
        </div>

        <motion.div className="photo">
          <motion.div className="photo-inner" variants={photoScale}>
            <BlurImage
              src={profile.photo}
              blur={profile.photoBlur}
              alt="Connor Close"
              fit="cover"
              eager
            />
          </motion.div>
          <motion.div className="photo-wipe" variants={photoWipe} aria-hidden />
        </motion.div>

        <div className="side right">
          <motion.div className="label" variants={fadeUp} custom={0.65}>
            {profile.rightLabel}
          </motion.div>
          <div className="name">
            <MaskWord delay={0.3}>{profile.last}</MaskWord>
          </div>
          <motion.div className="sub" variants={fadeUp} custom={0.8}>
            {profile.location} &mdash; <Clock /> EST
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
