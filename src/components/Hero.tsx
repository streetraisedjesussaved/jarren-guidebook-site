interface HeroProps {
  onBrowse: () => void;
}

export function Hero({ onBrowse }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Real tools. Real stories. Real change.</p>
        <h1 className="hero-headline">
          Move From <span className="accent">Pain</span> to Action
        </h1>
        <p className="hero-subtext">
          Guidebooks written for people who've been through it — and are ready to rise.
          No fluff. No jargon. Just what you need to take the next step.
        </p>
        <div className="hero-actions">
          <button className="btn-primary btn-lg" onClick={onBrowse}>
            Browse Guidebooks
          </button>
          <a href="#about" className="btn-secondary btn-lg">
            Our Mission
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="book-stack">
          <div className="book book-1" />
          <div className="book book-2" />
          <div className="book book-3" />
        </div>
      </div>
    </section>
  );
}
