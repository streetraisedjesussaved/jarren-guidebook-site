import { useState, useRef } from 'react';
import { guidebooks } from '../data/guidebooks';
import { GuidebookCard } from '../components/GuidebookCard';

const CATEGORIES = ['All', ...Array.from(new Set(guidebooks.map((g) => g.category)))];

interface GuidebooksPageProps {
  onSelect: (id: string) => void;
}

export function GuidebooksPage({ onSelect }: GuidebooksPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    activeCategory === 'All'
      ? guidebooks
      : guidebooks.filter((g) => g.category === activeCategory);

  return (
    <section id="guidebooks" className="guidebooks-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title">Our Guidebooks</h2>
        <p className="section-subtitle">
          Each one is written to meet you where you are and walk you to where you want to be.
        </p>
      </div>

      <div className="category-filters" role="tablist" aria-label="Filter by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="guidebooks-grid">
        {filtered.map((guidebook) => (
          <GuidebookCard key={guidebook.id} guidebook={guidebook} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}
