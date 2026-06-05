import { useState } from 'react'

type Props = {
  src: string
  blur: string
  alt: string
  fit?: 'cover' | 'contain'
  /** eager-load above-the-fold media (hero); everything else lazy-loads */
  eager?: boolean
}

/**
 * Blur-up still. A tiny base64 placeholder fills the frame and the full asset
 * cross-fades in on load — never a white flash. The placeholder doubles as an
 * ambient blurred backdrop behind 'contain' media (e.g. a phone screen).
 */
export default function BlurImage({ src, blur, alt, fit = 'cover', eager = false }: Props) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="bi">
      <div
        className="bi-ph"
        data-loaded={loaded}
        style={{ backgroundImage: `url("${blur}")` }}
        aria-hidden
      />
      <img
        className="bi-img"
        src={src}
        alt={alt}
        data-loaded={loaded}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ objectFit: fit }}
      />
    </div>
  )
}
