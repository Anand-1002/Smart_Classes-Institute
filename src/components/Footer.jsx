import React from 'react';
import { COURSES_DATA, SOCIAL_PROFILES } from '../data/instituteData.js';

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

  const renderSocialIcon = (id) => {
    switch (id) {
      case 'facebook':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'youtube':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      default:
        return null;
    }
  };

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

          {/* Col 5: Socials */}
          <div className="footer-col footer-socials-col">
            <h4>Socials</h4>
            <ul className="footer-social-list">
              {SOCIAL_PROFILES.map((item) => (
                <li key={item.id} className="footer-social-item">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={item.ariaLabel}
                  >
                    <span className={`social-icon-wrapper ${item.colorClass}`}>
                      {renderSocialIcon(item.id)}
                    </span>
                    <div className="social-link-text">
                      <span className="social-name">{item.name}</span>
                      <span className="social-handle">{item.handle}</span>
                    </div>
                    <svg
                      className="social-arrow-icon"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
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
