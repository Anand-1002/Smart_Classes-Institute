import React from 'react';

export default function CourseModal({ course, onClose, onBookDemo }) {
  if (!course) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">✕</button>
        <span className="modal-badge">{course.badge}</span>
        <h3 className="modal-title">{course.title}</h3>
        <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          {course.overview}
        </p>
        
        <div style={{ padding: '12px 16px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', marginBottom: '20px' }}>
          <strong style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-primary)' }}>Duration: </strong>
          <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{course.duration}</span>
        </div>

        <h4 style={{ fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '12px' }}>Curriculum Modules</h4>
        <div className="modal-modules-list">
          {course.modules.map((mod, index) => (
            <div key={index} className="modal-module-item">
              <span className="modal-check-icon">—</span>
              <span>{mod}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', padding: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Expected Outcome:</strong>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            {course.outcomes}
          </p>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
          <button
            className="btn btn-primary w-full"
            onClick={() => {
              onClose();
              onBookDemo(course.title);
            }}
          >
            Enroll in This Discipline
          </button>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
