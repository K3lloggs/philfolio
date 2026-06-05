import { useEffect, useRef, type ElementType, type KeyboardEvent } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { EASE, VIEWPORT } from '../lib/motion'
import type { Project } from '../lib/content'
import BlurImage from './BlurImage'

// Masked entrance: media settles (scale 1.06 -> 1) while a shade wipes open.
const mediaScale: Variants = {
  hidden: { scale: 1.06 },
  show: { scale: 1, transition: { duration: 0.9, ease: EASE } },
}
const wipe: Variants = {
  hidden: { scaleY: 1 },
  show: { scaleY: 0, transition: { duration: 0.9, ease: EASE } },
}

/**
 * Owns all Work media: still or video, masked entrance, in-view play, hover
 * coordination, zero CLS. Swapping a still for a clip changes nothing structural.
 */
export default function MediaCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen?: (p: Project) => void
}) {
  const { title, sub, src, blur, fit, video, href, gallery } = project
  const reduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  // A gallery card opens the case-study modal; an href card links out.
  const opensModal = !!gallery && !!onOpen

  // Video wakes as it enters view, sleeps as it leaves. Held on poster under
  // reduced motion.
  useEffect(() => {
    const el = videoRef.current
    if (!el || reduced) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduced])

  const onEnter = () => {
    if (!reduced) videoRef.current?.play().catch(() => {})
  }

  const Tag = (href ? motion.a : motion.div) as ElementType
  const open = () => onOpen?.(project)
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : opensModal
      ? {
          onClick: open,
          role: 'button',
          tabIndex: 0,
          onKeyDown: (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              open()
            }
          },
          'aria-label': `${title} — view case study`,
        }
      : {}

  return (
    <Tag
      className="work-card"
      onMouseEnter={onEnter}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...linkProps}
    >
      <motion.div className="work-media" variants={mediaScale}>
        {video ? (
          <video
            ref={videoRef}
            className="work-video"
            poster={src}
            muted
            loop
            playsInline
            preload="metadata"
            style={{ objectFit: fit }}
          >
            {video.webm && <source src={video.webm} type="video/webm" />}
            {video.mp4 && <source src={video.mp4} type="video/mp4" />}
          </video>
        ) : (
          <BlurImage src={src} blur={blur} alt={`${title} — ${sub}`} fit={fit} />
        )}
      </motion.div>

      {/* shade that wipes open on entrance */}
      <motion.div className="work-wipe" variants={wipe} aria-hidden />

      {opensModal && <span className="work-cue">View case &rarr;</span>}

      <div className="label">
        <div className="t">{title}</div>
        <div className="s">{sub}</div>
      </div>
    </Tag>
  )
}
