export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">
            &copy; {year} Tapyothin Vissanuyothin · Built with React + Vite
          </p>
          <div className="footer-links">
            <a
              href="https://github.com/mgmoies"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="mailto:tapyothin.viss@gmail.com"
              className="footer-link"
            >
              Email
            </a>
            <a href="#hero" className="footer-link">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
