import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-container" style={{ paddingTop: '180px', paddingBottom: '100px', textAlign: 'center', position: 'relative' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Apple Style Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge badge-status"
        >
          <span className="status-dot"></span>
          <span>Available for Full-Stack & Front-End Roles</span>
        </motion.div>

        {/* Apple Style High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            margin: '8px 0',
          }}
        >
          Kong Mong Vang<span className="text-muted">.</span>
        </motion.h1>

        {/* Subhead / Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
          style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto' }}
        >
          Full-Stack Web Developer specializing in responsive, accessible, and high-performance applications built with React, Node.js, C#, PHP, and modern web standards.
        </motion.p>

        {/* Apple CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '16px',
            flexWrap: 'wrap',
          }}
        >
          <a href="#projects" className="btn btn-primary">
            <span>Explore Projects</span>
            <ChevronRight size={16} />
          </a>

          <a href="#contact" className="btn btn-secondary">
            <Mail size={16} />
            <span>Get in Touch</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '4px' }}>
            <a
              href="https://github.com/KongMongVang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/web-dev-kong/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
