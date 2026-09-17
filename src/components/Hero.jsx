import React from 'react';

export default function Hero({ onExploreCourses, onBookDemo }) {
  return (
    <section className="hero-editorial" id="hero">
      <div className="container">
        <div className="hero-editorial-grid">
          {/* Left Headline Column */}
          <div className="hero-editorial-content">
            <span className="hero-tag">Curated Coaching for the Modern Visionary</span>
            <h1 className="hero-title">Elevate Your Presence</h1>
            <p className="hero-subtitle">
              Master Spoken English, commanding public speaking, and executive personality architecture. Personalized 1-on-1 mentorship led by <strong>Mr. Sourav Chatterjee</strong> in Sonarpur, Kolkata.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={onBookDemo}>
                Book a Session
              </button>
              <button className="btn btn-outline btn-lg" onClick={onExploreCourses}>
                Explore Curriculum
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="hero-metrics-strip">
              <div className="metric-item">
                <span className="metric-num">1,000+</span>
                <span className="metric-label">Alumni Mentored</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">4.9 ★</span>
                <span className="metric-label">79+ Google Reviews</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">95%</span>
                <span className="metric-label">Fluency Success</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">2</span>
                <span className="metric-label">Sonarpur Campuses</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Photography Frame */}
          <div className="hero-image-frame">
            <img
              src="Sir Picture.png"
              alt="Coach Sourav Chatterjee Mentorship at Smart Classes"
              className="hero-main-img"
            />
            <div className="hero-floating-badge">
              <span className="floating-badge-title">Mr. Sourav Chatterjee</span>
              <span className="floating-badge-sub">Spiritual Life Coach &amp; Communication Specialist</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-brass)', fontWeight: 600, marginTop: '4px' }}>
                ★ 10+ Years Empowering Leaders
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
