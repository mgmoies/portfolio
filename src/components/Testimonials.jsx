const testimonials = [
  {
    text: `Tapyothin has been an outstanding DevSecOps intern. His ability to quickly understand 
    our pipeline architecture and identify security gaps has been impressive for someone at 
    his level of experience. He brings a proactive attitude and sharp eye for security detail 
    to every task.`,
    author: 'Team Lead',
    role: 'DevSecOps Team · Seagate Technology Korat',
    initials: 'TL',
  },
  {
    text: `One of the most dedicated students in our cybersecurity program. Tapyothin consistently 
    goes beyond the curriculum — building his own lab environments, participating in CTF 
    competitions, and bringing real-world context to classroom discussions.`,
    author: 'University Advisor',
    role: 'Cybersecurity Department · KKU',
    initials: 'UA',
  },
  {
    text: `Tapyothin served as a teaching assistant and always went above and beyond. 
    His patience in explaining complex security concepts and hands-on lab guidance 
    made a real difference for students who were struggling. A natural mentor.`,
    author: 'Professor',
    role: 'Computer Science Faculty · KKU',
    initials: 'PR',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What people say</h2>
          <p className="section-subtitle">
            Feedback from mentors, supervisors, and colleagues who've worked with me.
          </p>
        </div>

        <div className="testimonials-grid reveal-stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-author-name">{t.author}</div>
                  <div className="testimonial-author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
