import Reveal from './Reveal'
import { contact } from '../lib/content'

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <Reveal>
        <div className="lt">
          Let's <em>build</em>
          <br />
          together
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <a href={`mailto:${contact.email}`} className="email">
          {contact.email} &rarr;
        </a>
      </Reveal>
    </section>
  )
}
