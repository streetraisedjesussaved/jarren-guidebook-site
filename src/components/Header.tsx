interface HeaderProps {
  onHome: () => void;
}

export function Header({ onHome }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="logo" onClick={onHome} aria-label="Go to homepage">
          <span className="logo-icon">📖</span>
          <span className="logo-text">Jarren's Guidebooks</span>
        </button>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#guidebooks">Guidebooks</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
