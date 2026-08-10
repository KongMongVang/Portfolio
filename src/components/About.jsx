import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal as TerminalIcon } from 'lucide-react';

export default function About() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { cmd: 'whoami', output: 'Kong Mong Vang — Full-stack developer committed to clean code, accessibility, and high performance.' },
    { cmd: 'help', output: 'Available commands: bio, skills, projects, contact, clear' }
  ]);

  const handleCommand = (commandToRun) => {
    const cmd = (commandToRun || inputVal).trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    switch (cmd) {
      case 'bio':
        output = 'Full-stack developer with strong UI/UX instincts. Leadership experience on capstone projects and continuous engineering expansion.';
        break;
      case 'skills':
        output = 'React, JavaScript (ES6+), Node.js, C#, PHP, HTML5, CSS3, MongoDB, MySQL, REST APIs, Web Accessibility (a11y)';
        break;
      case 'projects':
        output = '1. EmoNomics Capstone (emonomics.ca) 2. Magic 8-Ball JS Web App 3. CSS Animation UFO Showcase';
        break;
      case 'contact':
        output = 'Email: KongMongVang@icloud.com | GitHub: github.com/KongMongVang | LinkedIn: linkedin.com/in/web-dev-kong';
        break;
      case 'help':
        output = 'Available commands: bio, skills, projects, contact, clear';
        break;
      default:
        output = `Command not recognized: "${cmd}". Type "help" to see available commands.`;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInputVal('');
  };

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Code Meets Design.</h2>
        <p className="section-subtitle">
          Passionate about building intuitive web applications that combine clean visual design with reliable software engineering.
        </p>
      </div>

      <div className="bento-grid">
        
        {/* Core Bio Story */}
        <div className="bento-card bento-col-8">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Kong Mong Vang</h3>
          <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>
            Full-Stack Web Developer • Front-End Specialist
          </p>
          <p className="bento-card-desc" style={{ marginBottom: '16px' }}>
            I am a full-stack, front-end focused developer with strong design instincts. With a deep foundation in component architecture and back-end capabilities, I bridge the gap between creative visual design and scalable engineering.
          </p>
          <p className="bento-card-desc" style={{ marginBottom: '24px' }}>
            Whether leading capstone project teams, optimizing Core Web Vitals, or implementing accessibility standards, I focus on building software that makes an impact.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                Team Leadership & Collaboration
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                WCAG Accessibility Standards
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                Performance & Core Web Vitals
              </span>
            </div>
          </div>
        </div>

        {/* Clean Stat Card */}
        <div className="bento-card bento-col-4 stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Clean Code Commitment</div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '12px' }}>
            Semantic HTML, responsive CSS systems, and clean JavaScript architecture.
          </p>
        </div>

        {/* Sleek Optional Developer CLI Terminal Widget */}
        <div className="bento-card bento-col-12" style={{ padding: '0', background: 'transparent', border: 'none' }}>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot terminal-dot-red"></div>
                <div className="terminal-dot terminal-dot-yellow"></div>
                <div className="terminal-dot terminal-dot-green"></div>
              </div>
              <div className="terminal-title">kong-cli (interactive terminal)</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Optional interactive CLI</div>
            </div>

            <div className="terminal-body">
              {history.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <div className="terminal-line">
                    <span className="terminal-prompt">kong@portfolio:~$</span>
                    <span>{item.cmd}</span>
                  </div>
                  <div className="terminal-output">{item.output}</div>
                </div>
              ))}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommand();
                }}
                className="terminal-input-row"
              >
                <span className="terminal-prompt">kong@portfolio:~$</span>
                <input
                  type="text"
                  className="terminal-input"
                  placeholder="Type a command (e.g. bio, skills, projects, contact)..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  aria-label="Interactive Terminal Input"
                />
              </form>

              <div className="terminal-pills">
                {['bio', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    className="terminal-pill"
                    onClick={() => handleCommand(cmd)}
                  >
                    ${cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
