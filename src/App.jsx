import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import useScrollReveal from './hooks/useScrollReveal'
import './index.css'
import './components.css'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useScrollReveal()

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ThemeSwitcher />
    </>
  )
}
