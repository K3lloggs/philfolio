import { useEffect, useState } from 'react'
import { nav } from '../lib/content'
import { scrollToId } from '../lib/scroll'

const SECTION_IDS = ['services', 'about', 'work', 'contact']

export default function Nav() {
  const [active, setActive] = useState<string | null>(null)

  // Scroll-spy: highlight the link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.5 },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToId(href)
  }

  return (
    <div className="navwrap">
      <nav aria-label="Primary">
        <a
          className="home"
          href="#top"
          aria-label="Home"
          onClick={(e) => onNav(e, '#top')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" />
          </svg>
        </a>

        {nav.map((item) => (
          <a
            key={item.href}
            className={`link${active && '#' + active === item.href ? ' active' : ''}`}
            href={item.href}
            onClick={(e) => onNav(e, item.href)}
          >
            {item.label}
            {item.chevron && (
              <svg
                className="chev"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
          </a>
        ))}

        <span className="sep" />
        <a className="cta" href="#contact" onClick={(e) => onNav(e, '#contact')}>
          Contact me
        </a>
      </nav>
    </div>
  )
}
