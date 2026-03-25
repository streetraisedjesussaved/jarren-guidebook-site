import { guidebooks } from '../data/guidebooks';

interface GuidebookDetailPageProps {
  id: string;
  onBack: () => void;
}

export function GuidebookDetailPage({ id, onBack }: GuidebookDetailPageProps) {
  const guidebook = guidebooks.find((g) => g.id === id);

  if (!guidebook) {
    return (
      <div className="not-found">
        <h2>Guidebook not found</h2>
        <button className="btn-primary" onClick={onBack}>
          Back to Guidebooks
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <button className="btn-back" onClick={onBack} aria-label="Back to guidebooks">
        ← Back to Guidebooks
      </button>

      <div className="detail-layout">
        <div className="detail-cover-wrap">
          <div
            className="detail-cover"
            style={{ backgroundColor: guidebook.coverColor }}
            aria-hidden="true"
          >
            <div className="cover-spine" />
            <div className="cover-title">{guidebook.title}</div>
            {guidebook.featured && <span className="featured-badge">Featured</span>}
          </div>
          <div className="detail-price-box">
            <p className="detail-price">${guidebook.price.toFixed(2)}</p>
            <p className="detail-pages">{guidebook.pages} pages</p>
            <button className="btn-primary btn-lg btn-full">Get This Guidebook</button>
            <p className="detail-note">Instant digital download after purchase.</p>
          </div>
        </div>

        <div className="detail-content">
          <span className="guidebook-category">{guidebook.category}</span>
          <h1 className="detail-title">{guidebook.title}</h1>
          <p className="detail-subtitle">{guidebook.subtitle}</p>
          <p className="detail-description">{guidebook.description}</p>

          <div className="detail-topics">
            <h3>What's Inside</h3>
            <ul className="topics-list">
              {guidebook.topics.map((topic) => (
                <li key={topic} className="topic-item">
                  <span className="topic-check" aria-hidden="true">✓</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-cta">
            <button className="btn-primary btn-lg">Get This Guidebook — ${guidebook.price.toFixed(2)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
