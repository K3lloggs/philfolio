import { useEffect, useState } from 'react'

const fmt = (d: Date) =>
  d.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })

/** Live Philadelphia (EST) clock. Keeps ticking even under reduced motion. */
export default function Clock() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const tick = () => setTime(fmt(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="clock" suppressHydrationWarning>
      {time}
    </span>
  )
}
