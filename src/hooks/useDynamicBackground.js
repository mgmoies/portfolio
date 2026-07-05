import { useEffect } from 'react'

export default function useDynamicBackground() {
  useEffect(() => {
    // Select sections that should trigger the elevated background
    const elevatedSections = document.querySelectorAll('.skills-section, .testimonials-section');
    if (!elevatedSections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.inView = 'true';
          } else {
            entry.target.dataset.inView = 'false';
          }
        });

        const isElevated = Array.from(elevatedSections).some(
          (el) => el.dataset.inView === 'true'
        );

        if (isElevated) {
          document.body.setAttribute('data-bg-elevated', 'true');
        } else {
          document.body.setAttribute('data-bg-elevated', 'false');
        }
      },
      {
        // Section must intersect the middle 40% of the viewport to trigger
        rootMargin: '-30% 0px -30% 0px' 
      }
    );

    elevatedSections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.body.removeAttribute('data-bg-elevated');
    };
  }, []);
}
