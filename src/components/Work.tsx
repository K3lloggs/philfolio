import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import Parallax from './Parallax'
import MediaCard from './MediaCard'
import ProjectModal from './ProjectModal'
import { projects, type Project } from '../lib/content'
import { STAGGER } from '../lib/motion'

export default function Work() {
  // The open case-study (cards carrying a `gallery` open the modal on click).
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work">
      <div className="svc-head">
        <Parallax amount={26}>
          <Reveal>
            <h2>
              Selected<br />Work
            </h2>
          </Reveal>
        </Parallax>
        <Reveal delay={0.1}>
          <p>Real builds — products, client sites, agents, and the pipelines behind them.</p>
        </Reveal>
      </div>

      <div className="work-grid">
        {projects.map((p, i) => (
          // Reveal handles the card's fade-rise; MediaCard owns the media settle.
          <Reveal key={p.title} delay={(i % 2) * STAGGER}>
            <MediaCard project={p} onOpen={setActive} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
