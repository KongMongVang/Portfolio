import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState('capstone-lead');

  const timelineEvents = [
    {
      id: 'capstone-lead',
      role: 'Full-Stack Developer & Capstone Team Lead',
      organization: 'EmoNomics Capstone Project',
      period: '2025 — Present',
      type: 'Project Leadership',
      location: 'Canada',
      summary: 'Spearheaded full-stack development of the EmoNomics sentiment web platform, managing frontend architecture, API integration, and team deliverables.',
      achievements: [
        'Designed & deployed responsive interactive sentiment analytics dashboards using modern JavaScript and CSS.',
        'Structured modular REST API endpoints for smooth data retrieval and real-time frontend updates.',
        'Led cross-functional team communication, code reviews, git workflows, and milestone tracking.',
        'Optimized page load speed and Core Web Vitals to achieve high performance scores.'
      ]
    },
    {
      id: 'fullstack-dev',
      role: 'Full-Stack Web Engineering & Stack Expansion',
      organization: 'Software Development',
      period: '2023 — Present',
      type: 'Technical Growth',
      location: 'Remote',
      summary: 'Focused on deep front-end specialization while continuously expanding back-end proficiency across Node.js, C#, PHP, and SQL/NoSQL databases.',
      achievements: [
        'Built interactive single page web apps (Magic 8-Ball JS, CSS Animation Showcase) emphasizing high 60FPS UI motion.',
        'Developed robust database schemas and queries using MongoDB and MySQL.',
        'Implemented strict WCAG accessibility guidelines, keyboard navigation, and ARIA attributes across web builds.',
        'Mastered modern Git workflows, continuous integration principles, and component-driven architecture.'
      ]
    },
    {
      id: 'web-education',
      role: 'Full-Stack Web Development Program',
      organization: 'Post-Secondary Technical Education',
      period: '2022 — 2025',
      type: 'Education & Training',
      location: 'Academic Institution',
      summary: 'Comprehensive training in modern web software engineering, responsive layout systems, database management, and agile software methodologies.',
      achievements: [
        'Graduated with strong technical honors and completed multiple full-stack capstone projects.',
        'Mastered Object-Oriented Programming (OOP) in C#, backend PHP development, and JavaScript ecosystem.',
        'Conducted user testing, interface prototyping, and responsive multi-device design audits.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-tag">Milestones & Experience</span>
        <h2 className="section-title">Timeline & Engineering Journey</h2>
        <p className="section-subtitle">
          A summary of project leadership, technical roles, educational foundation, and continuous learning achievements.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {timelineEvents.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bento-card"
              style={{
                cursor: 'pointer',
                borderColor: isExpanded ? 'var(--border-active)' : 'var(--border-subtle)',
              }}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="bento-card-icon" style={{ marginTop: '2px' }}>
                    {item.type === 'Education & Training' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{item.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', color: 'var(--accent-indigo)', fontWeight: 600, fontSize: '0.92rem' }}>
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
                        <Calendar size={14} />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="badge badge-tech">{item.type}</span>
                  <div style={{ color: 'var(--text-muted)' }}>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>

              <p style={{ marginTop: '16px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {item.summary}
              </p>

              {/* Collapsible Key Achievements */}
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                    Key Accomplishments & Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {item.achievements.map((ach, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
