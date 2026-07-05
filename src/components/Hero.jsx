import { GitHubIcon, ArrowRightIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Currently interning @ Seagate Korat · DevSecOps
          </div>

          <h1 className="hero-heading">
            Hi, I'm <br />
            <span className="accent">Tapyothin</span>
            <br />
            Vissanuyothin
          </h1>

          <p className="hero-subtitle">
            Cybersecurity student (Year 4) passionate about securing digital
            systems, building DevSecOps pipelines, and protecting organizations
            from modern threats.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn-primary">
              View Experience
              <ArrowRightIcon size={16} />
            </a>
            <a
              href="https://github.com/mgmoies"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a href="#contact" className="btn-secondary">
              <MailIcon size={16} />
              Get in touch
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-value">4th</div>
              <div className="hero-stat-label">Year Student</div>
            </div>
            <div>
              <div className="hero-stat-value">1+</div>
              <div className="hero-stat-label">Year in Security</div>
            </div>
            <div>
              <div className="hero-stat-value">DevSec</div>
              <div className="hero-stat-label">Ops Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
