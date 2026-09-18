import React from 'react';
import { BRANCHES_DATA } from '../data/instituteData.js';

export default function BranchesSection({ onBookDemoForBranch }) {
  return (
    <section className="section" id="branches">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Prime Locations</span>
          <h2 className="section-title">Campuses</h2>
          <p className="section-subtitle">
            Conveniently situated in Sonarpur, Kolkata with dedicated podium chambers and air-conditioned discussion rooms.
          </p>
        </div>

        <div className="campuses-grid">
          {BRANCHES_DATA.map(branch => (
            <div key={branch.id} className="campus-luxury-card">
              <span className="campus-badge">{branch.badge}</span>
              <h3 className="campus-title">{branch.title}</h3>
              <p className="campus-address">{branch.address}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                📍 Landmark: {branch.landmark}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                🚆 Transit: {branch.transit}
              </p>

              <div className="campus-features-list">
                {branch.features.map((feat, idx) => (
                  <span key={idx} className="campus-feature-tag">
                    {feat}
                  </span>
                ))}
              </div>

              <div className="map-embed-frame">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title={branch.title}
                />
              </div>

              <div className="campus-card-actions">
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Open Google Maps ↗
                </a>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => onBookDemoForBranch(branch.title)}
                >
                  Select This Campus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
