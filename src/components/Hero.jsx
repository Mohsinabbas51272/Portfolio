import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="premium-badge">
              <span className="dot"></span>
              Expertise In Web Development
            </div>
          <h1 className="hero-title">
  Where Ideas Turn Into <br />
  <span className="text-gradient">Digital Impact</span>
</h1>
            <p className="hero-subtitle">
I'm Mohsin Abbas — a Software Developer building modern, efficient, and
scalable web experiences.
            </p>
            
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                Explore Portfolio <ArrowUpRight size={20} style={{ marginLeft: '8px' }} />
              </a>
              <div className="social-stack">
                <a href="https://github.com/Mohsinabbas51272" target="_blank" rel="noreferrer" className="social-pill">
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/mohsin-abbas-5199902ba" target="_blank" rel="noreferrer" className="social-pill">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="hero-visual">
          <motion.div 
            className="visual-card glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="card-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <span className="file-name">mohsin.js</span>
            </div>
            <pre className="code-block">
              <code>{`const Developer = {
  name: "Mohsin Abbas",
  role: "Web Developer",
  status: "Developer",
  motto: "Code with Precision"
};`}</code>
            </pre>
          </motion.div>
          <div className="glow-sphere"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
