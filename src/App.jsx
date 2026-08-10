import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('color-scheme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('color-scheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global Fixed Breathing Mesh Glow (Fixed background across entire page scroll) */}
      <div className="hero-mesh-glow" aria-hidden="true" />

      {/* Skip Link for WCAG Accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Clean Apple Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* De-cluttered Main Sections */}
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
