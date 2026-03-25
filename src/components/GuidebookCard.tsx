import type { Guidebook } from '../data/guidebooks';

interface GuidebookCardProps {
  guidebook: Guidebook;
  onSelect: (id: string) => void;
}

export function GuidebookCard({ guidebook, onSelect }: GuidebookCardProps) {
  return (
    <div className="guidebook-card" onClick={() => onSelect(guidebook.id)}>
      <div
        className="guidebook-cover"
        style={{ backgroundColor: guidebook.coverColor }}
        aria-hidden="true"
      >
        <div className="cover-spine" />
        <div className="cover-title">{guidebook.title}</div>
        {guidebook.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="guidebook-info">
        <span className="guidebook-category">{guidebook.category}</span>
        <h2 className="guidebook-title">{guidebook.title}</h2>
        <p className="guidebook-subtitle">{guidebook.subtitle}</p>
        <p className="guidebook-description">{guidebook.description}</p>
        <div className="guidebook-meta">
          <span className="guidebook-pages">{guidebook.pages} pages</span>
          <span className="guidebook-price">${guidebook.price.toFixed(2)}</span>
        </div>
        <div className="guidebook-topics">
          {guidebook.topics.map((topic) => (
            <span key={topic} className="topic-tag">
              {topic}
            </span>
          ))}
        </div>
        <button
          className="btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(guidebook.id);
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
