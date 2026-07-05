import { MapPinIcon } from './Icons'

const experiences = [
  {
    title: 'DevSecOps Intern',
    company: 'Seagate Technology (Korat)',
    period: 'Present · 2025 – 2026',
    active: true,
    project: 'Project: Digital Employee',
    desc: `Integrating security practices into Seagate's internal "Digital Employee" platform. 
    Responsible for vulnerability scanning in CI/CD pipelines, container security hardening, 
    secrets management, and assisting with security incident reviews. Working closely with 
    DevOps and IT Security teams to implement security gates and compliance checks.`,
    tags: ['DevSecOps', 'CI/CD', 'Docker', 'Vulnerability Scanning', 'Secrets Management', 'Python'],
  },
  {
    title: 'Cybersecurity Student (Year 4)',
    company: 'Khon Kaen University (KKU)',
    period: '2022 – Present',
    active: true,
    project: 'Bachelor of Science — Cybersecurity',
    desc: `Studying advanced topics in network security, ethical hacking, cryptography, digital 
    forensics, and secure software development. Participating in CTF competitions and security 
    labs to build hands-on experience with real-world attack and defense scenarios.`,
    tags: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Digital Forensics', 'CTF'],
  },
  {
    title: 'Hands-on Security Project',
    company: 'Khon Kaen University',
    period: '2024',
    active: false,
    project: 'Security Lab & Threat Research',
    desc: `Built and managed isolated lab environments for vulnerability testing and malware analysis. 
    Performed static and dynamic analysis of malware samples, documented indicators of compromise (IoCs), 
    and designed defensive security architectures using virtualization and network segmentation.`,
    tags: ['Malware Analysis', 'Wireshark', 'Virtual Machines', 'IoC Documentation', 'Lab Setup'],
  },
  {
    title: 'Teaching Assistant',
    company: 'Khon Kaen University',
    period: '2023 – 2024',
    active: false,
    project: 'Cybersecurity & Networking Courses',
    desc: `Assisted professors in delivering cybersecurity and computer networking coursework. 
    Helped students with lab exercises covering network scanning, firewall configuration, 
    vulnerability assessment, and basic penetration testing. Graded assignments and provided 
    one-on-one mentoring during office hours.`,
    tags: ['Teaching', 'Mentoring', 'Network Security', 'Lab Instruction', 'Nmap'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">My journey</h2>
          <p className="section-subtitle">
            From university labs to enterprise DevSecOps — building security
            skills in the real world.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={exp.title} className="timeline-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="timeline-dot-wrap">
                <div className="timeline-dot">
                  {i + 1}
                </div>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <div className="timeline-card-title">{exp.title}</div>
                    <div className="timeline-card-company">
                      <MapPinIcon size={14} />
                      {exp.company}
                    </div>
                    {exp.project && (
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-tertiary)',
                        marginTop: '4px'
                      }}>
                        {exp.project}
                      </div>
                    )}
                  </div>
                  <div className="timeline-card-period">{exp.period}</div>
                </div>

                <p className="timeline-card-desc">{exp.desc}</p>

                <div className="timeline-card-tags">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
