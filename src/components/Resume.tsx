import Reveal from './Reveal'
import Parallax from './Parallax'
import { resume } from '../lib/content'
import { STAGGER } from '../lib/motion'

/**
 * The formal CV: an experience timeline, a grouped skills grid, and education /
 * credentials — all on the house reveal + parallax, copy lifted from the résumé.
 */
export default function Resume() {
  return (
    <section id="resume">
      <div className="svc-head">
        <Parallax amount={26}>
          <Reveal>
            <h2>
              {resume.lead}
              <em>{resume.accent}</em>
              {resume.tail}
            </h2>
          </Reveal>
        </Parallax>
        <Reveal delay={0.1}>
          <a className="btn" href={resume.download} download>
            Download résumé &darr;
          </a>
        </Reveal>
      </div>

      {/* Experience timeline */}
      <div className="resume-exp">
        {resume.experience.map((job, i) => (
          <Reveal key={job.org + job.dates} delay={(i % 2) * STAGGER}>
            <article className="rj">
              <div className="rj-meta">
                <div className="rj-org">{job.org}</div>
                <div className="rj-role">{job.role}</div>
                <div className="rj-dates">
                  {job.dates}
                  <span className="rj-place">{job.place}</span>
                </div>
              </div>
              <ul className="rj-bullets">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 28)}>{b}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Skills */}
      <Reveal>
        <div className="resume-skills">
          {resume.skills.map((g) => (
            <div className="skill-group" key={g.label}>
              <div className="sg-label">{g.label}</div>
              <div className="sg-tags">
                {g.items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Education + credentials */}
      <div className="resume-foot">
        <Reveal className="rf-col">
          <div className="rf-h">Education</div>
          {resume.education.map((e) => (
            <div className="rf-item" key={e.name}>
              <div className="rf-name">{e.name}</div>
              <div className="rf-sub">{e.place}</div>
              <div className="rf-dates">{e.dates}</div>
            </div>
          ))}
        </Reveal>
        <Reveal className="rf-col" delay={0.1}>
          <div className="rf-h">Credentials</div>
          {resume.credentials.map((c) => (
            <div className="rf-item" key={c.name}>
              <div className="rf-name">{c.name}</div>
              <div className="rf-sub">{c.place}</div>
              <div className="rf-dates">{c.dates}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
