import { useState, useEffect } from 'react';

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
  const [autoIndex, setAutoIndex] = useState(0);
  const [manualIndex, setManualIndex] = useState(null);

  useEffect(() => {
    // 40 seconds total for 3 items = 13333.33ms per item
    const itemTime = 40000 / testimonials.length;
    
    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % testimonials.length);
    }, itemTime);

    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index) => {
    setManualIndex(index);
    if (window.testimonialOverrideTimer) {
      clearTimeout(window.testimonialOverrideTimer);
    }
    
    window.testimonialOverrideTimer = setTimeout(() => {
      setManualIndex(null);
    }, 10000);
  };

  const activeIndex = manualIndex !== null ? manualIndex : autoIndex;
  const selected = testimonials[activeIndex];

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

        <div className="testimonials-layout reveal-stagger" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          
          <div className="testimonials-selected-column reveal" style={{ padding: '0', maxWidth: '800px', margin: '0 auto' }}>
            <div key={activeIndex} className="testimonial-fade-in">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text-large">{selected.text}</p>
              <div className="testimonial-author" style={{ marginTop: 'var(--space-6)' }}>
                <div className="testimonial-avatar">{selected.initials}</div>
                <div>
                  <div className="testimonial-author-name">{selected.author}</div>
                  <div className="testimonial-author-role">{selected.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-marquee-wrapper" style={{ maxWidth: '800px', margin: '0 auto', borderRight: 'none', borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-8)', paddingBottom: '0' }}>
            <div className="testimonials-marquee">
              <div className="testimonials-track">
                {testimonials.map((t, i) => (
                  <div 
                    key={`t1-${i}`} 
                    className={`testimonial-card ${activeIndex === i ? 'active' : ''}`}
                    onClick={() => handleItemClick(i)}
                  >
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
              <div className="testimonials-track" aria-hidden="true">
                {testimonials.map((t, i) => (
                  <div 
                    key={`t2-${i}`} 
                    className={`testimonial-card ${activeIndex === i ? 'active' : ''}`}
                    onClick={() => handleItemClick(i)}
                  >
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
          </div>

          <p style={{ 
            textAlign: 'center', 
            fontSize: 'var(--text-xs)', 
            color: 'var(--color-text-tertiary)', 
            marginTop: 'calc(var(--space-6) * -1)', 
            opacity: 0.7 
          }}>
            Click on any profile to hold their testimonial
          </p>

        </div>
      </div>
    </section>
  )
}
