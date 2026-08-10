import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Github, Linkedin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const emailAddress = 'KongMongVang@icloud.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-tag">Contact</span>
        <h2 className="section-title">Let's Connect.</h2>
        <p className="section-subtitle">
          Interested in working together or discussing opportunities? Feel free to reach out directly.
        </p>
      </div>

      <div className="bento-grid">
        
        {/* Direct Email & Social Box */}
        <div className="bento-card bento-col-5" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="badge badge-status" style={{ marginBottom: '20px' }}>
              <span className="status-dot"></span>
              <span>Available for Opportunities</span>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Direct Communication</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
              Copy my primary email address or connect via social networks.
            </p>

            <div
              style={{
                background: 'var(--bg-app)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--accent-blue)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL</div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                    {emailAddress}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={14} color="var(--accent-emerald)" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://github.com/KongMongVang"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/web-dev-kong/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Contact Form */}
        <div className="bento-card bento-col-7">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Send a Message</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '20px' }}>
            Leave a message and I will reply promptly.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                padding: '28px',
                textAlign: 'center',
                background: 'rgba(48, 209, 88, 0.08)',
                border: '1px solid rgba(48, 209, 88, 0.3)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              <Sparkles size={36} color="var(--accent-emerald)" style={{ margin: '0 auto 8px' }} />
              <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Message Sent</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                Thank you for getting in touch. I will get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                    Name <span style={{ color: '#ff453a' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-app)',
                      border: errors.name ? '1px solid #ff453a' : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                    }}
                    required
                  />
                  {errors.name && <span style={{ color: '#ff453a', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                    Email <span style={{ color: '#ff453a' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-app)',
                      border: errors.email ? '1px solid #ff453a' : '1px solid var(--border-subtle)',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                    }}
                    required
                  />
                  {errors.email && <span style={{ color: '#ff453a', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Opportunity"
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-app)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
                  Message <span style={{ color: '#ff453a' }}>*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-app)',
                    border: errors.message ? '1px solid #ff453a' : '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    fontSize: '0.92rem',
                    resize: 'vertical',
                  }}
                  required
                ></textarea>
                {errors.message && <span style={{ color: '#ff453a', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '4px', alignSelf: 'flex-start' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {copied && (
        <div className="toast">
          <Check size={16} color="var(--accent-emerald)" />
          <span>Email copied to clipboard ({emailAddress})</span>
        </div>
      )}
    </section>
  );
}
