import { LockIcon, RocketIcon, CloudIcon, CodeIcon, WrenchIcon, AwardIcon } from './Icons'

const categories = [
  {
    name: 'Cybersecurity',
    icon: <LockIcon size={22} />,
    color: 'rgba(0,102,204,0.08)',
    iconBg: 'rgba(0,102,204,0.12)',
    skills: [
      'Network Security', 'Vulnerability Assessment', 'Penetration Testing',
      'SIEM / Log Analysis', 'Incident Response', 'Threat Modeling', 'OWASP',
    ],
  },
  {
    name: 'DevSecOps',
    icon: <RocketIcon size={22} />,
    color: 'rgba(6,214,160,0.06)',
    iconBg: 'rgba(6,214,160,0.12)',
    skills: [
      'CI/CD Security', 'Docker', 'GitHub Actions', 'SonarQube',
      'Trivy', 'Secrets Management', 'Policy as Code',
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: <CloudIcon size={22} />,
    color: 'rgba(0,180,216,0.06)',
    iconBg: 'rgba(0,180,216,0.12)',
    skills: [
      'AWS (IAM, S3, EC2)', 'Azure Fundamentals', 'Linux Administration',
      'Nginx', 'Firewall Config', 'VPN', 'Kubernetes (basics)',
    ],
  },
  {
    name: 'Programming',
    icon: <CodeIcon size={22} />,
    color: 'rgba(139,92,246,0.06)',
    iconBg: 'rgba(139,92,246,0.12)',
    skills: [
      'Python', 'Bash / Shell', 'JavaScript', 'SQL',
      'PowerShell', 'YAML / JSON',
    ],
  },
  {
    name: 'Tools & Frameworks',
    icon: <WrenchIcon size={22} />,
    color: 'rgba(255,159,10,0.06)',
    iconBg: 'rgba(255,159,10,0.12)',
    skills: [
      'Nmap', 'Wireshark', 'Burp Suite', 'Metasploit',
      'Snort', 'OSSEC', 'Grafana', 'Elastic Stack',
    ],
  },
  {
    name: 'Certifications & Study',
    icon: <AwardIcon size={22} />,
    color: 'rgba(48,209,88,0.06)',
    iconBg: 'rgba(48,209,88,0.12)',
    skills: [
      'CEH (Certified)', 'AWS Security Specialty (studying)',
      'CCNA Basics', 'ISO 27001 Awareness',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            A focused toolkit built around cybersecurity, DevSecOps, and
            secure software delivery.
          </p>
        </div>

        <div className="skills-grid reveal-stagger">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="skill-category"
            >
              <div className="skill-category-header">
                <div
                  className="skill-category-icon"
                  style={{ background: cat.iconBg, color: 'var(--color-accent)' }}
                >
                  {cat.icon}
                </div>
                <div>
                  <div className="skill-category-name">{cat.name}</div>
                  <div className="skill-category-count">{cat.skills.length} skills</div>
                </div>
              </div>
              <div className="skill-list">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
