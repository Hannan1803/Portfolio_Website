const tools = [
  {
    name: 'Azure',
    role: 'Cloud Platform',
    icon: '/azure.png',
    accent: '#0078D4',
    glow: 'rgba(0, 120, 212, 0.22)',
  },
  {
    name: 'Terraform',
    role: 'IaC & Modules',
    icon: '/terraform-bg.png',
    accent: '#7B42BC',
    glow: 'rgba(123, 66, 188, 0.22)',
  },
  {
    name: 'Docker',
    role: 'Containers',
    icon: '/Docker.png',
    accent: '#1D63ED',
    glow: 'rgba(29, 99, 237, 0.22)',
  },
  {
    name: 'Jenkins',
    role: 'CI/CD Pipelines',
    icon: '/Jenkins.png',
    accent: '#D33833',
    glow: 'rgba(211, 56, 51, 0.22)',
  },
  {
    name: 'Linux',
    role: 'Enterprise OS',
    icon: '/Linux.png',
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.22)',
  },
]

const SkillsMarquee = () => {
  return (
    <div
      className="hero-skills-marquee"
      role="region"
      aria-label="Core Technology Stack Marquee"
    >
      <div className="hero-skills-badge">
        <span className="hero-skills-dot" />
        <span>TECH STACK</span>
      </div>

      <div className="hero-skills-viewport">
        <div className="hero-skills-track">
          {[0, 1, 2].map((groupIndex) => (
            <div
              className="hero-skills-group"
              key={groupIndex}
              aria-hidden={groupIndex > 0 ? 'true' : undefined}
            >
              {tools.map((tool) => (
                <div
                  className="hero-skill-card"
                  key={`${tool.name}-${groupIndex}`}
                  style={{
                    '--skill-accent': tool.accent,
                    '--skill-glow': tool.glow,
                  }}
                  title={`${tool.name} · ${tool.role}`}
                >
                  <div className="hero-skill-icon-wrap">
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      className="hero-skill-icon-img"
                      loading="eager"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="hero-skill-meta">
                    <span className="hero-skill-name">{tool.name}</span>
                    <span className="hero-skill-role">{tool.role}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsMarquee