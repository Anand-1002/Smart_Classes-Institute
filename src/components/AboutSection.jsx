import React from 'react';

export default function AboutSection({ onBookDemo }) {
  return (
    <section className="section section-surface" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Core Foundation</span>
          <h2 className="section-title">Philosophy</h2>
          <p className="section-subtitle">
            A complete personality rebirth — replacing passive grammar memorization with unshakeable inner authority.
          </p>
        </div>

        <div className="philosophy-grid">
          {/* Left Asymmetric Collage */}
          <div className="philosophy-collage">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Linen journal and fountain pen"
              className="collage-img-1"
            />
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
              alt="Public speaking in session"
              className="collage-img-2"
            />
          </div>

          {/* Right Narrative */}
          <div className="philosophy-content">
            <blockquote className="lead-quote">
              “Speaking fluent English is not an intellectual test of rules. It is the quiet authority of an unburdened mind and unshakeable self-belief.”
            </blockquote>
            <p>
              Located in Sonarpur, Kolkata, <strong>SMART CLASSES</strong> was founded by <strong>Mr. Sourav Chatterjee</strong> to dismantle the emotional barrier that prevents capable individuals from speaking fluently.
            </p>
            <p>
              Traditional institutions burden students with passive textbook grammar. We replace this lag with live podium immersion, cognitive formulation conditioning, and subconscious fear release.
            </p>
            <div style={{ marginTop: '16px' }}>
              <button className="btn btn-primary" onClick={onBookDemo}>
                Reserve a Private Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
