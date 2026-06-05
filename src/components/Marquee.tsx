import { Fragment } from 'react'
import { marquee } from '../lib/content'

// One sequence of words + dividers; rendered twice in the track for a seamless
// -50% loop. The connective tissue between hero and services — slow, constant.
function Sequence() {
  return (
    <>
      {marquee.map((word) => (
        <Fragment key={word}>
          <span>{word}</span>
          <span className="dot" aria-hidden>
            ✱
          </span>
        </Fragment>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="track">
        <Sequence />
        <Sequence />
      </div>
    </div>
  )
}
