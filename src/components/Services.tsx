import { Fragment } from 'react'
import Reveal from './Reveal'
import Parallax from './Parallax'
import { services } from '../lib/content'

// Render a string with \n as <br/> line breaks.
function MultiLine({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  )
}

export default function Services() {
  return (
    <section id="services">
      <div className="svc-head">
        <Parallax amount={26}>
          <Reveal>
            <h2>
              What I<br />do
            </h2>
          </Reveal>
        </Parallax>
        <Reveal delay={0.1}>
          <p>
            Full pipeline, one person. Design the product, build it, ship it, and automate the
            parts that shouldn't need a human.
          </p>
        </Reveal>
      </div>

      {services.map((s) => (
        <Reveal key={s.num} className="svc">
          <div className="num">{s.num}</div>
          <h3>
            <MultiLine text={s.title} />
          </h3>
          <div className="body">
            <p>{s.body}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
