import { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { GuidebooksPage } from './pages/GuidebooksPage';
import { GuidebookDetailPage } from './pages/GuidebookDetailPage';
import './App.css';

type View = { page: 'home' } | { page: 'detail'; id: string };

function App() {
  const [view, setView] = useState<View>({ page: 'home' });
  const guidebooksSectionRef = useRef<HTMLDivElement>(null);

  function handleBrowse() {
    setView({ page: 'home' });
    setTimeout(() => {
      guidebooksSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  function handleSelectGuidebook(id: string) {
    setView({ page: 'detail', id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBack() {
    setView({ page: 'home' });
  }

  return (
    <>
      <Header onHome={handleBack} />

      <main className="main-content">
        {view.page === 'detail' ? (
          <div className="container">
            <GuidebookDetailPage id={view.id} onBack={handleBack} />
          </div>
        ) : (
          <>
            <Hero onBrowse={handleBrowse} />
            <div ref={guidebooksSectionRef} className="container">
              <GuidebooksPage onSelect={handleSelectGuidebook} />
            </div>
            <section id="about" className="about-section">
              <div className="container">
                <div className="about-content">
                  <h2 className="section-title">Built From the Inside Out</h2>
                  <p>
                    These guidebooks weren't written in a conference room. They came out of real
                    struggle — streets, setbacks, and the slow climb back. Every page is designed
                    to give you something you can actually use, whether you're in crisis or just
                    ready to level up.
                  </p>
                  <p>
                    The mission is simple: move people from pain to action. Not someday. Now.
                  </p>
                </div>
              </div>
            </section>
            <section id="contact" className="contact-section">
              <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">
                  Questions about a guidebook? Want to bulk order for your organization?
                </p>
                <a href="mailto:hello@jarrenguidebooks.com" className="btn-primary btn-lg">
                  Email Us
                </a>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
