import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, BarChart2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="btn-icon modal-close"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="badge badge-tech" style={{ marginBottom: '12px' }}>
            {project.category}
          </div>
          <h2 id="modal-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            {project.shortDesc}
          </p>
        </div>

        {/* Key Metrics / Highlights Bar */}
        {project.metrics && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              marginBottom: '24px',
              padding: '16px',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {project.metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-indigo)' }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="modal-body">
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-main)' }}>
            Overview & Problem Solved
          </h3>
          <p style={{ marginBottom: '20px' }}>{project.fullDesc}</p>

          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-main)' }}>
            Key Technical Features
          </h3>
          <ul className="modal-features-list">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <h3 style={{ fontSize: '1.2rem', margin: '20px 0 12px', color: 'var(--text-main)' }}>
            Technologies Used
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge-tech">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glow"
              >
                <span>Visit Live Project</span>
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>View GitHub Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
