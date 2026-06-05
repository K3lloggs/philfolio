import { MotionConfig } from 'framer-motion'
import { EASE, DUR } from './lib/motion'
import SmoothScroll from './components/SmoothScroll'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Marquee from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Work from './components/Work'
import Resume from './components/Resume'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    // reducedMotion="user" drops every transform/layout animation to a clean
    // fade when the OS asks for less motion; the house easing/duration are the
    // defaults for any transition that doesn't specify its own.
    <MotionConfig reducedMotion="user" transition={{ duration: DUR.base, ease: EASE }}>
      <SmoothScroll>
        <Nav />
        <main>
          <Hero />
          <Statement />
          <Marquee />
          <Services />
          <About />
          <Work />
          <Resume />
          <CTA />
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  )
}
