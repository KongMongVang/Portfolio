import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-app)',
        padding: '40px 24px 40px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code2 size={18} color="var(--accent-blue)" />
            <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
              Kong Mong Vang
            </span>
          </div>

          <ul
            style={{
              display: 'flex',
              gap: '20px',
              listStyle: 'none',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a></li>
            <li><a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a></li>
            <li><a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a></li>
            <li><a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a></li>
            <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
          </ul>

          <button
            onClick={scrollToTop}
            className="btn-icon"
            aria-label="Scroll back to top of page"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Kong Mong Vang. All rights reserved.
          </div>
          <div>
            Designed with simplicity & precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
