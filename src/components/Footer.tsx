export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-icon">📖</span>
          <span className="logo-text">Jarren's Guidebooks</span>
        </div>
        <p className="footer-tagline">
          Guidebooks, stories, and tools that move people from pain to action.
        </p>
        <div className="footer-links">
          <a href="#guidebooks">Guidebooks</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Jarren's Guidebooks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
