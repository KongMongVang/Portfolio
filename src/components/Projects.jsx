import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'emonomics',
      title: 'EmoNomics Capstone Project',
      category: 'Full-Stack',
      shortDesc: 'Comprehensive economic sentiment web platform tracking consumer financial trends.',
      fullDesc: 'EmoNomics is a full-stack capstone project designed to measure and visualize public economic sentiment. Built with modern web architecture, it transforms complex financial data into readable interactive dashboards.',
      tags: ['React', 'Node.js', 'REST API', 'JavaScript', 'CSS3', 'Responsive Design'],
      liveUrl: 'https://emonomics.ca',
      githubUrl: 'https://github.com/KongMongVang',
      metrics: [
        { label: 'Role', value: 'Team Lead' },
        { label: 'Architecture', value: 'Full-Stack' },
        { label: 'Performance', value: '98+ CWV' }
      ],
      features: [
        'Real-time financial sentiment visualization & interactive chart dashboards',
        'Modular REST API backend integration for continuous data streams',
        'Mobile-first responsive UI built with custom CSS design tokens',
        'Cross-browser accessibility testing and WCAG compliant structure'
      ],
      colSpan: 'bento-col-8'
    },
    {
      id: 'magic-ball',
      title: 'Magic 8-Ball JS Web App',
      category: 'JavaScript Apps',
      shortDesc: 'Interactive decision-making application with 3D-like ball tilt animations.',
      fullDesc: 'A dynamic JavaScript web application featuring custom shake physics, random answer generation algorithms, audio cues, and responsive DOM manipulation.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM API', 'Audio API'],
      liveUrl: 'https://kongmongvang.github.io/Pet-Project-Magic-8-Ball/',
      githubUrl: 'https://github.com/KongMongVang/Pet-Project-Magic-8-Ball',
      metrics: [
        { label: 'Interactions', value: 'Smooth 60FPS' },
        { label: 'Code', value: 'Vanilla JS' }
      ],
      features: [
        'Custom CSS keyframe shake and 3D depth tilt animations',
        'Dynamic state management with instant DOM manipulation',
        'Audio feedback integration on answer reveal',
        'Responsive layout optimized for touch and desktop devices'
      ],
      colSpan: 'bento-col-4'
    },
    {
      id: 'ufo-animation',
      title: 'CSS Animation UFO Showcase',
      category: 'Creative CSS',
      shortDesc: 'Pure CSS animation project showcasing custom keyframe motion & space physics.',
      fullDesc: 'An exploratory front-end project focusing on advanced CSS keyframe animations, spatial transformations, floating alien saucer motion physics, and particle glow rendering without heavy JS libraries.',
      tags: ['CSS3 Keyframes', 'HTML5', 'CSS Transforms', 'Animation Physics'],
      liveUrl: 'https://kongmongvang.github.io/CSS_Animation_Final_Project/',
      githubUrl: 'https://github.com/KongMongVang/CSS_Animation_Final_Project',
      metrics: [
        { label: 'Libraries', value: 'Zero JS' },
        { label: 'Animation', value: 'Pure CSS' }
      ],
      features: [
        'Complex layered CSS keyframe timelines for independent cosmic elements',
        'Hardware-accelerated transforms for 60FPS smooth animation',
        'Responsive viewport scaling for seamless visual fidelity',
        'Custom glowing particle trail visual effects'
      ],
      colSpan: 'bento-col-12'
    }
  ];

  const categories = ['All', 'Full-Stack', 'JavaScript Apps', 'Creative CSS'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span className="section-tag">Featured Projects</span>
          <h2 className="section-title">Built with Precision.</h2>
          <p className="section-subtitle">
            A selection of web applications, capstone projects, and interactive front-end builds.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            background: 'var(--bg-surface)',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                background: activeFilter === cat ? 'var(--accent-blue)' : 'transparent',
                color: activeFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bento-grid">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={`bento-card project-card ${project.colSpan}`}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span className="badge badge-tech">{project.category}</span>

              <div style={{ display: 'flex', gap: '6px' }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '34px', height: '34px' }}
                    aria-label={`${project.title} GitHub Repository`}
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: '34px', height: '34px' }}
                    aria-label={`${project.title} Live Website`}
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="bento-card-title">{project.title}</h3>
            <p className="bento-card-desc" style={{ marginBottom: '16px' }}>{project.shortDesc}</p>

            {project.metrics && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', padding: '10px 14px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} style={{ fontSize: '0.82rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{m.label}: </span>
                    <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{m.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="badge badge-tech">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-footer">
              <button
                onClick={() => setSelectedProject(project)}
                className="btn-link"
                style={{ fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <span>View Full Case Study</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
