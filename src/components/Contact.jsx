import { useState } from 'react'
import { MailIcon, GitHubIcon, MapPinIcon, SendIcon, CheckCircleIcon } from './Icons'

const contactInfo = [
  {
    icon: <MailIcon size={20} />,
    label: 'Email',
    value: 'tapyothin.viss@gmail.com',
    href: 'mailto:tapyothin.viss@gmail.com',
  },
  {
    icon: <GitHubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/mgmoies',
    href: 'https://github.com/mgmoies',
  },
  {
    icon: <MapPinIcon size={20} />,
    label: 'Location',
    value: 'Nakhon Ratchasima, Thailand',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`mailto:tapyothin.viss@gmail.com?subject=${subject}&body=${body}`)
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal-left">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's work<br />together
            </h2>
            <p className="section-subtitle">
              Open to internship opportunities, entry-level roles in cybersecurity
              &amp; DevSecOps, or just a friendly conversation about security.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="contact-info-value"
                        style={{ textDecoration: 'underline', textDecorationColor: 'var(--color-border)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-info-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            {status === 'sent' ? (
              <div style={{
                background: 'var(--color-success)',
                opacity: 0.9,
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-8)',
                textAlign: 'center',
                color: 'white',
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)', display: 'flex', justifyContent: 'center' }}>
                  <CheckCircleIcon size={48} />
                </div>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-2)' }}>Message sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Your email client opened with the message. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setStatus(null)}
                  style={{
                    marginTop: 'var(--space-6)',
                    padding: 'var(--space-2) var(--space-5)',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: 'var(--radius-full)',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-contact-submit">
                  <SendIcon size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
