import React from 'react';
import { COURSES_DATA } from '../data/instituteData.js';

export default function Footer({ onNavigate }) {
  const navTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Philosophy' },
    { id: 'courses', label: 'Offerings' },
    { id: 'why-us', label: 'The Method' },
    { id: 'branches', label: 'Campuses' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Admissions' }
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <img 
                src="file:///C:/Users/kumar/.gemini/antigravity-ide/brain/535e9fc1-e42b-4f47-8714-cb5b5eea32cb/.user_uploaded/media_1789314066963.png"
                alt="Smart Classes Logo"
                className="brand-logo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'logo.svg';
                }}
              />
              <div className="logo-col">
                <div className="logo-title-row">
                  <span className="logo-word-main">SMART</span>
                  <span className="logo-word-sub">CLASSES</span>
                  <span className="brand-rating-badge">
                    <span className="rating-sparkle">✨</span>
                    <span className="rating-val">4.9</span>
                    <span className="rating-star">★</span>
                  </span>
                </div>
                <span className="logo-tagline">Spoken English • Personality</span>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.65 }}>
              Kolkata’s premier academy for eliminating stage fright, formulating thoughts in English, and developing commanding boardroom poise.
            </p>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Coach Sourav Chatterjee: +91 78901 02966
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {navTabs.slice(0, 5).map(t => (
                <li key={t.id}>
                  <button onClick={() => onNavigate(t.id)}>{t.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div className="footer-col">
            <h4>Disciplines</h4>
            <ul className="footer-links">
              {COURSES_DATA.slice(0, 5).map(c => (
                <li key={c.id}>
                  <button onClick={() => onNavigate('courses')}>{c.title}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sonarpur Campuses */}
          <div className="footer-col">
            <h4>Campuses</h4>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Main Campus (Baikunthapur):</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                1, Flat No. D, Baikunthapur, 352 Vivekananda Rd, Opp. Sonarpur Vidyapith School (700149)
              </p>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <strong style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>Power House Branch:</strong>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Sonarpur Power House More, beside ICICI Bank (700150)
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.82rem' }}>
              <a href="tel:+917890102966" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                📞 +91 78901 02966
              </a>
              <a href="mailto:suvo.sourav8@gmail.com" style={{ color: 'var(--text-muted)' }}>
                ✉ suvo.sourav8@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SMART CLASSES. Curated Coaching for the Modern Visionary.</p>
          <p>Quiet Luxury Mentorship • Sonarpur, Kolkata</p>
        </div>
      </div>
    </footer>
  );
}
