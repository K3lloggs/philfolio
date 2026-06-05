import type Lenis from 'lenis'

// Module singleton so anchor clicks anywhere can route through Lenis.
let instance: Lenis | null = null

export const setLenis = (l: Lenis | null) => {
  instance = l
}

/** Route in-page anchor navigation through Lenis (falls back to native). */
export function scrollToId(hash: string) {
  const el = document.querySelector(hash)
  if (!el) return
  if (instance) instance.scrollTo(el as HTMLElement, { offset: 0, duration: 1.1 })
  else (el as HTMLElement).scrollIntoView({ behavior: 'smooth' })
}
