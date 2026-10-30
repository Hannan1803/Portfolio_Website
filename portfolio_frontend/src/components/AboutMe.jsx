import { ArrowUpRight, Check, MapPin } from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'Cloud & platform',
    skills: ['Microsoft Azure', 'Azure Virtual Machines', 'Azure Monitor', 'Azure Databricks', 'Microsoft Fabric'],
  },
  {
    number: '02',
    title: 'Infrastructure as code',
    skills: ['Terraform', 'Reusable modules', 'Remote state', 'State locking & versioning'],
  },
  {
    number: '03',
    title: 'Delivery & containers',
    skills: ['Azure DevOps', 'Jenkins', 'GitHub Actions', 'Bitbucket', 'Docker', 'Nginx'],
  },
  {
    number: '04',
    title: 'Networking & security',
    skills: ['Hub-and-spoke', 'VNet peering', 'Private Endpoints & DNS', 'NSGs', 'NAT Gateway', 'RBAC', 'Managed Identities'],
  },
  {
    number: '05',
    title: 'Scripting & collaboration',
    skills: ['Python', 'Bash', 'PowerShell', 'YAML', 'Git', 'Azure Repos'],
  },
]

const experienceHighlights = [
  <>Designed and automated Microsoft Azure infrastructure with <strong>Terraform</strong>, including virtual networks, subnets, virtual machines, load balancers, NAT gateways, Key Vault, Container Registry, storage, and monitoring.</>,
  <>Built and maintained <strong>CI/CD pipelines</strong> with Jenkins, GitHub Actions, Bitbucket, and Azure DevOps for infrastructure provisioning, application deployments, and releases across Development, UAT, and Production.</>,
  <>Implemented secure <strong>hub-and-spoke networking</strong> using VNet peering, private endpoints, private DNS zones, NSGs, NAT Gateway, and Zscaler ZPA.</>,
  <>Containerized React.js and NestJS applications with <strong>Docker</strong>, configured Nginx as a reverse proxy, and deployed behind Azure Load Balancer.</>,
  <>Integrated Azure Databricks and Unity Catalog with Key Vault, secure networking, and enterprise authentication; supported Microsoft Fabric capacity for analytics workloads.</>,
  <>Managed secrets and access with Microsoft Entra ID, managed identities, and Azure Key Vault, removing hardcoded credentials from deployment workflows.</>,
  <>Maintained Terraform remote state in Azure Storage with state locking and versioning; administered Linux-based Azure VMs and automated operational tasks with Bash and CI/CD.</>,
]

const AboutMe = () => (
  <div className="portfolio-content">
    <section className="about-section section-block" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE ABOUT ME <span>01</span></p>
        <h2 id="about-title">Good systems make<br /><em>hard things feel simple.</em></h2>
      </div>
      <div className="about-copy">
        <p>
          I&apos;m Muhammad Haniif Hannan, a DevOps Engineer focused on building and operating secure cloud infrastructure. My work brings together Azure, infrastructure as code, networking, and CI/CD to make releases more predictable and platforms easier to trust.
        </p>
        <div className="about-facts">
          <span><MapPin size={15} /> Chennai, Tamil Nadu</span>
          <span><Check size={15} /> Azure · Terraform · CI/CD</span>
        </div>
      </div>
    </section>

    <section className="skills-section section-block" id="skills" aria-labelledby="skills-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">TOOLS OF THE TRADE <span>02</span></p>
          <h2 id="skills-title">Built for the<br /><em>whole platform.</em></h2>
        </div>
        <p className="section-aside">A practical toolkit for provisioning, connecting, securing, and delivering cloud workloads.</p>
      </div>
      <div className="skill-list">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.number}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="experience-section section-block" id="experience" aria-labelledby="experience-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">WHERE I MAKE AN IMPACT <span>03</span></p>
          <h2 id="experience-title">Experience</h2>
        </div>
        <p className="section-aside">Creating dependable infrastructure and delivery paths for real-world workloads.</p>
      </div>
      <article className="experience-card">
        <div className="experience-meta">
          <span className="eyebrow">JUNE 2025 — PRESENT</span>
          <span className="experience-location">CHENNAI, INDIA</span>
        </div>
        <div className="experience-main">
          <h3>DevOps Engineer</h3>
          <p className="company-name">JMAN Group</p>
          <ul className="highlight-list">
            {experienceHighlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
          </ul>
        </div>
      </article>
    </section>

    <section className="projects-section section-block" id="projects" aria-labelledby="projects-title">
      <div className="section-heading section-heading-row">
        <div>
          <p className="eyebrow">SELECTED WORK <span>04</span></p>
          <h2 id="projects-title">Projects</h2>
        </div>
        <p className="section-aside">Engineering the delivery foundation behind a financial reporting web application.</p>
      </div>
      <article className="project-card">
        <div className="project-number">01 <ArrowUpRight size={18} /></div>
        <div className="project-details">
          <p className="eyebrow">CLOUD PLATFORM · CI/CD · SECURITY</p>
          <h3>Financial Reporting<br /><em>Web Application</em></h3>
          <ul className="highlight-list">
            <li>Provisioned enterprise Azure infrastructure with reusable Terraform modules and remote state management.</li>
            <li>Created Azure DevOps pipelines with pull-request validation, branch policies, SonarQube, Trivy, Docker image builds, Azure Container Registry, and automated VM deployments.</li>
            <li>Supported secure application hosting with Docker, Nginx, Azure Load Balancer, private endpoints, private DNS, NAT Gateway, and Key Vault.</li>
          </ul>
          <div className="project-tags"><span>Terraform</span><span>Azure DevOps</span><span>Docker</span><span>Azure</span><span>SonarQube</span><span>Trivy</span></div>
        </div>
      </article>
    </section>

    <section className="credentials-section section-block" id="certifications" aria-labelledby="certifications-title">
      <div className="section-heading">
        <p className="eyebrow">LEARNING & CREDENTIALS <span>05</span></p>
        <h2 id="certifications-title">Grounded in<br /><em>the fundamentals.</em></h2>
      </div>
      <div className="credentials-grid">
        <article className="credential-card">
          <p className="eyebrow">CERTIFICATION</p>
          <h3>HashiCorp Certified:<br />Terraform Associate</h3>
          <p>Certification 004</p>
        </article>
        <article className="credential-card">
          <p className="eyebrow">EDUCATION · 2021 — 2025</p>
          <h3>B.Tech, Information<br />Technology</h3>
          <p>Sona College of Technology<br />Salem, Tamil Nadu</p>
        </article>
      </div>
    </section>

    <footer className="contact-section" id="contact">
      <div>
        <p className="eyebrow">HAVE A PLATFORM CHALLENGE?</p>
        <h2>Let&apos;s make it<br /><em>work beautifully.</em></h2>
      </div>
      <div className="contact-actions">
        <a className="contact-button" href="https://www.linkedin.com/in/muhammad-haniif-hannan-s-731943289/" target="_blank" rel="noreferrer">
          Connect on LinkedIn <ArrowUpRight size={17} />
        </a>
        <a className="text-link" href="https://github.com/Hannan1803" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a>
      </div>
      <div className="footer-bottom">
        <a className="wordmark footer-wordmark" href="#home">H<span>.</span></a>
        <span>MUHAMMAD HANIIF HANNAN · DEVOPS ENGINEER</span>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </div>
    </footer>
  </div>
)

export default AboutMe
