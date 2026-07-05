import { useState, useEffect, useRef } from 'react'
import { PaletteIcon } from './Icons'

const themes = [
  { id: 'light', name: 'Light', swatch: '#fafafa', dot: '#0066cc' },
  { id: 'dark', name: 'Dark', swatch: '#0e0e10', dot: '#5b9cf6' },
  { id: 'midnight', name: 'Midnight', swatch: '#0a0e1a', dot: '#818cf8' },
  { id: 'terminal', name: 'Terminal', swatch: '#0a0a0a', dot: '#00ff41' },
  { id: 'ocean', name: 'Ocean', swatch: '#f0f7ff', dot: '#0077b6' },
  { id: 'lavender', name: 'Lavender', swatch: '#faf5ff', dot: '#8b5cf6' },
  { id: 'cyberpunk', name: 'Cyberpunk', swatch: '#0d0d0d', dot: '#ff2a6d' },
  { id: 'forest', name: 'Forest', swatch: '#f5f7f2', dot: '#2d8a4e' },
]

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light'
  })
  const panelRef = useRef(null)

  useEffect(() => {
    // Apply theme on mount
    if (active === 'light') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', active)
    }
  }, [active])

  useEffect(() => {
    // Close panel on outside click
    function handleClickOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectTheme = (id) => {
    setActive(id)
    localStorage.setItem('portfolio-theme', id)
    if (id === 'light') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', id)
    }
  }

  return (
    <div className="theme-switcher-wrap" ref={panelRef}>
      <div className={`theme-panel ${open ? 'open' : ''}`}>
        <div className="theme-panel-title">Theme</div>
        <div className="theme-options">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-option ${active === t.id ? 'active' : ''}`}
              onClick={() => selectTheme(t.id)}
            >
              <span
                className="theme-swatch"
                style={{
                  background: `linear-gradient(135deg, ${t.swatch}, ${t.dot})`,
                }}
              />
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <button
        className="theme-toggle-btn"
        onClick={() => setOpen(!open)}
        aria-label="Change theme"
      >
        <PaletteIcon size={20} />
      </button>
    </div>
  )
}
