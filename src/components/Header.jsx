import React, { useState } from 'react';

export default function Header({ currentView, setCurrentView, theme, toggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Philosophy' },
    { id: 'courses', label: 'Offerings' },
    { id: 'why-us', label: 'Method' },
    { id: 'branches', label: 'Campuses' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Admissions' }
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setIsMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Strip */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <span className="pulse-dot"></span>
            <span><strong>New Batches Open:</strong> Limited 8-10 candidates per batch with Coach Sourav Chatterjee.</span>
          </div>
          <div className="top-strip-right">
            <a href="tel:+917890102966" className="top-strip-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 78901 02966
            </a>
            <span>⭐ 4.9 / 5.0 (79+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Executive Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Brand Lockup: Logo (Left) + Row-Wise SMART CLASSES with 4.9★ Badge */}
          <button className="brand-logo" onClick={() => handleNavClick('home')} aria-label="Smart Classes Home">
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
              </div>
              <span className="logo-tagline">Spoken English • Personality</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-item-btn ${currentView === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Dark/Light Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? '☼' : '☾'}
            </button>

            {/* CTA */}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleNavClick('contact')}
            >
              <span>Book a Session</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <aside className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="drawer-header">
          <div className="brand-logo">
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
              </div>
              <span className="logo-tagline">Spoken English • Personality</span>
            </div>
          </div>
          <button className="modal-close-btn" onClick={() => setIsMobileOpen(false)}>&times;</button>
        </div>

        <div className="drawer-nav-list">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`drawer-nav-btn ${currentView === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button className="btn btn-primary w-full" onClick={() => handleNavClick('contact')}>
            Book Free Demo Class
          </button>
          <a
            href="https://wa.me/917890102966"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
