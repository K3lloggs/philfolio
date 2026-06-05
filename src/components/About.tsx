import Reveal from './Reveal'
import Parallax from './Parallax'
import { about } from '../lib/content'
import { scrollToId } from '../lib/scroll'

export default function About() {
  return (
    <section id="about">
      <Parallax amount={20}>
        <Reveal>
          <p className="kicker">{about.kicker}</p>
        </Reveal>
      </Parallax>

      <div className="about-grid">
        <Reveal className="big">
          {about.bigLead}
          <em>{about.bigAccent}</em>
          {about.bigTail}
        </Reveal>

        <Reveal className="txt" delay={0.1}>
          {about.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <a
            href="#contact"
            className="btn"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('#contact')
            }}
          >
            Let's talk &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  )
}
