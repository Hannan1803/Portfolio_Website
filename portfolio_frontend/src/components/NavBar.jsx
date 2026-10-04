import { ArrowUpRight, Github, Linkedin, Menu } from 'lucide-react'

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
]

const NavBar = () => (
  <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Hannan, home">
      H<span>.</span>
    </a>

    <nav className="desktop-nav" aria-label="Main navigation">
      {sections.map((section) => (
        <a key={section.href} href={section.href}>
          {section.label}
        </a>
      ))}
    </nav>

    <div className="header-actions">
      <a className="social-link" href="https://github.com/Hannan1803" target="_blank" rel="noreferrer" aria-label="GitHub">
        <Github size={17} strokeWidth={1.7} />
      </a>
      <a className="social-link" href="https://www.linkedin.com/in/muhammad-haniif-hannan-s-731943289/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={17} strokeWidth={1.7} />
      </a>
      <a className="contact-link" href="#contact">
        Let&apos;s talk <ArrowUpRight size={15} />
      </a>
    </div>

    <details className="mobile-menu">
      <summary aria-label="Open navigation menu">
        <Menu size={21} />
      </summary>
      <nav aria-label="Mobile navigation">
        {sections.map((section) => (
          <a key={section.href} href={section.href}>
            {section.label}
          </a>
        ))}
        <a href="#contact">Contact</a>
      </nav>
    </details>
  </header>
)

export default NavBar
