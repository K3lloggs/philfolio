import Reveal from './Reveal'
import Parallax from './Parallax'
import CountUp from './CountUp'
import { STAGGER } from '../lib/motion'
import { statement, stats } from '../lib/content'

export default function Statement() {
  return (
    <section>
      <Parallax amount={22}>
        <Reveal>
          <p className="kicker">{statement.kicker}</p>
        </Reveal>
      </Parallax>

      <Reveal delay={0.1}>
        <p className="statement">
          {statement.lead}
          <em>{statement.accent}</em>
          {statement.tail}
        </p>
      </Reveal>

      <div className="stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * STAGGER}>
            <div className="n">
              {s.display ? (
                <em>{s.display}</em>
              ) : (
                <em>
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </em>
              )}
            </div>
            <div className="l">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
