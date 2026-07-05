import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
    )

    if (!revealElements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            // Only remove 'visible' class if the element is below the viewport.
            // This ensures animations only play when scrolling down, not up.
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('visible')
            }
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
