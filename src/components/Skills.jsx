import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      skills: [
        { name: 'JavaScript (ES6+)', icon: '/images/icons8-javascript.svg', level: 'Advanced', desc: 'Modern async/await, ES modules, DOM manipulation & closure architecture.' },
        { name: 'HTML5', icon: '/images/icons8-html.svg', level: 'Advanced', desc: 'Semantic HTML, native Dialog/Popover, accessibility & microdata.' },
        { name: 'CSS3 / Sass', icon: '/images/icons8-css.svg', level: 'Advanced', desc: 'Flexbox, CSS Grid, Bento layouts, custom properties, animations & media queries.' },
        { name: 'C#', icon: '/images/icons8-c.svg', level: 'Intermediate', desc: 'Object-oriented programming, .NET fundamentals, and structured algorithms.' },
        { name: 'PHP', icon: '/images/php-1-logo-svgrepo-com.svg', level: 'Intermediate', desc: 'Server-side scripting, form processing, and database integrations.' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Server,
      skills: [
        { name: 'React', icon: '/images/react-svgrepo-com.svg', level: 'Advanced', desc: 'Hooks, component architecture, state management, and virtual DOM performance.' },
        { name: 'Node.js', icon: '/images/icons8-nodejs.svg', level: 'Intermediate', desc: 'Asynchronous event loops, Express API endpoints, and NPM package ecosystem.' },
        { name: 'Laravel', icon: '/images/laravel-svgrepo-com.svg', level: 'Intermediate', desc: 'MVC web architecture, Eloquent ORM, and backend routing.' }
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Backend',
      icon: Database,
      skills: [
        { name: 'MongoDB', icon: '/images/mongodb-logo-svgrepo-com.svg', level: 'Intermediate', desc: 'NoSQL document modeling, JSON queries, and aggregation pipelines.' },
        { name: 'MySQL', icon: '/images/mysql-logo-svgrepo-com.svg', level: 'Intermediate', desc: 'Relational database schema design, SQL joins, indexing, and data integrity.' },
        { name: 'RESTful APIs', icon: null, level: 'Advanced', desc: 'JSON API design, fetch architecture, error handling, and endpoint consumption.' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Standards',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', icon: '/images/icons8-github.svg', level: 'Advanced', desc: 'Version control workflows, branching strategy, PR reviews, and issue tracking.' },
        { name: 'Web Accessibility (a11y)', icon: null, level: 'Advanced', desc: 'WCAG compliance, ARIA attributes, keyboard navigation, and contrast ratio standards.' },
        { name: 'Performance & CWV', icon: null, level: 'Advanced', desc: 'LCP/INP optimization, lazy loading, font preloading, and Lighthouse audits.' }
      ]
    }
  ];

  const categoriesList = ['All', ...skillCategories.map(c => c.title)];

  return (
    <section id="skills" className="section-container">
      <div className="section-header" style={{ display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Skills & Stack.</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and engineering standards utilized across projects.
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
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                background: activeCategory === cat ? 'var(--accent-blue)' : 'transparent',
                color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {skillCategories
          .filter(cat => activeCategory === 'All' || cat.title === activeCategory)
          .map((catGroup) => {
            const IconComp = catGroup.icon;
            return (
              <div key={catGroup.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <IconComp size={18} color="var(--accent-blue)" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{catGroup.title}</h3>
                </div>

                <div className="bento-grid">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bento-card bento-col-4"
                      style={{ padding: '24px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={`${skill.name} logo`}
                              style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                            />
                          ) : (
                            <Cpu size={20} color="var(--accent-blue)" />
                          )}
                          <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{skill.name}</h4>
                        </div>
                        <span className="badge badge-tech">
                          {skill.level}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
