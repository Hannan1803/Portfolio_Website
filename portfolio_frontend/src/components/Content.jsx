import { ArrowDown, ArrowUpRight } from 'lucide-react'
import SkillsMarquee from './SkillsMarquee'

const Content = () => (
  <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero-topline">
      <span className="eyebrow"><span className="status-dot" /> DEVOPS ENGINEER · CHENNAI, INDIA</span>
      <span className="hero-index">PORTFOLIO — 2025 / 26</span>
    </div>

    <div className="hero-stage">
        <h1 className="hero-heading" id="hero-title">
        <span className="hero-word hero-word-left">Reliable</span>
        <SkillsMarquee />
        <span className="hero-word hero-word-right">by design.</span>
      </h1>

      {/* <SkillsMarquee /> */}

      <div className="hero-intro">
        <p className="eyebrow">CLOUD · AUTOMATION · DELIVERY</p>
        <p className="hero-description">
          I build secure Azure platforms and dependable delivery workflows that help teams ship with confidence.
        </p>
        <a className="text-link" href="#experience">Explore my work <ArrowUpRight size={16} /></a>
      </div>

      <div className="hero-side-note">
        <span className="side-note-mark">01 / 04</span>
        <span>Infrastructure<br />that moves work forward.</span>
      </div>
    </div>

    <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
  </section>
)

export default Content
