import React, { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, title: "Executive Podium Session", src: "Executive Podium Session.png", objectPosition: "35% top" },
    { id: 6, title: "Personality Rebirth Cohort", src: "Personality Rebirth Cohort.png", objectPosition: "center 30%" },
    { id: 3, title: "Student Speech Presentation", src: "Student Speech.png", objectPosition: "45% top" },
    { id: 5, title: "Interactive Workshop", src: "Interaction workshop.png", objectPosition: "center 20%" },
    { id: 2, title: "1-on-1 Mentorship Dialogue", src: "Sir Picture.png", objectPosition: "center top" }
  ];

  return (
    <section className="section section-surface" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Visual Chronicle</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Moments from our live speech drills, podium workshops, and personality coaching cohorts.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div
              key={item.id}
              className="gallery-item-card"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{ objectPosition: item.objectPosition || 'center top' }}
              />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>Click to expand</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
              <div style={{ backgroundColor: '#141210', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{ width: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>{selectedImage.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Smart Classes Speech &amp; Personality Cohort</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
