import profilePhoto from '../assets/profile-photo.jpg'
import { ShieldIcon } from './Icons'

export default function About() {
  const highlights = [
    {
      title: 'Cybersecurity Focus',
      desc: 'Specializing in network security, threat analysis, and security automation across enterprise environments.',
    },
    {
      title: 'DevSecOps at Seagate',
      desc: 'Contributing to the "Digital Employee" project — integrating security into CI/CD pipelines and developer workflows.',
    },
    {
      title: 'Continuous Learner',
      desc: 'Pursuing certifications and hands-on labs in cloud security, penetration testing, and incident response.',
    },
    {
      title: 'Based in Thailand',
      desc: 'Currently at Seagate Korat (Nakhon Ratchasima) — open to remote and on-site opportunities after graduation.',
    },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-image-wrap reveal-left">
            <div className="about-image-frame">
              <img src={profilePhoto} alt="Tapyothin Vissanuyothin" className="about-image" />
              <div className="about-image-badge">
                <div className="about-image-badge-icon">
                  <ShieldIcon size={18} />
                </div>
                <div className="about-image-badge-text">
                  <strong>Cybersecurity</strong>
                  <span>Student &amp; DevSecOps Intern</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Securing the digital<br />world, one layer at a time
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-2)' }}>
              I'm <strong>Tapyothin Vissanuyothin</strong>, a 4th-year Cybersecurity student
              with a hands-on focus on DevSecOps, cloud security, and secure software development.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Currently working as a DevSecOps intern at <strong>Seagate Technology</strong> in
              Korat, where I'm part of the "Digital Employee" project — building security tools,
              automating threat detection, and hardening CI/CD pipelines.
            </p>

            <ul className="about-highlights reveal-stagger" style={{ marginTop: 'var(--space-6)', paddingLeft: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {highlights.map((h) => (
                <li key={h.title} style={{ color: 'var(--color-text-secondary)' }}>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
                    {h.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                    {h.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
