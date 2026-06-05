import { useEffect, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { EASE, DUR, STAGGER } from '../lib/motion'
import { lockScroll, unlockScroll } from '../lib/scroll'
import type { Project } from '../lib/content'
import BlurImage from './BlurImage'

// Backdrop fades; the panel settles up + scales in on the house easing. Under
// reduced motion (MotionConfig) the transforms collapse to a clean fade.
const backdrop: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: DUR.fast, ease: EASE } },
  exit: { opacity: 0, transition: { duration: DUR.fast, ease: EASE } },
}
const panel: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: DUR.base, ease: EASE } },
  exit: { opacity: 0, y: 18, scale: 0.99, transition: { duration: DUR.fast, ease: EASE } },
}
const strip: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER, delayChildren: 0.15 } },
}
const shot: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
}

/**
 * Case-study lightbox. Opened by a Work card that carries a `gallery` — shows the
 * project's story plus a filmstrip of phone screens. Closes on Esc, backdrop
 * click, or the close button; background scroll is frozen while open.
 *
 * `data-lenis-prevent` is essential: Lenis preventDefaults every wheel event while
 * stopped, which would deaden scrolling inside the modal — the attribute exempts
 * this subtree so the scroll region scrolls natively.
 */
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    lockScroll()
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      unlockScroll()
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-backdrop"
      data-lenis-prevent
      variants={backdrop}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — case study`}
    >
      <motion.div
        className="modal-panel"
        variants={panel}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="modal-scroll">
          <div className="modal-head">
            <p className="kicker">Case study</p>
            <h2>{project.title}</h2>
            {project.meta && <p className="modal-meta">{project.meta}</p>}
            {project.summary && <p className="modal-summary">{project.summary}</p>}
          </div>

          {project.gallery && (
            <motion.div className="filmstrip" variants={strip} initial="hidden" animate="show">
              {project.gallery.map((s) => (
                <motion.figure className="shot" key={s.src} variants={shot}>
                  <div className="shot-media">
                    <BlurImage src={s.src} blur={s.blur} alt={s.caption} fit="cover" />
                  </div>
                  <figcaption className="shot-cap">{s.caption}</figcaption>
                </motion.figure>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
