import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitPullRequest } from 'lucide-react';
import './GithubSection.css';

const GithubSection = () => {
  return (
    <section id="github" className="github-section">
      <div className="section-header">
        <h2 className="section-title">Open Source & GitHub</h2>
      </div>

      <div className="github-container">
        <motion.div 
          className="github-card white-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="github-profile">
            <div className="github-avatar-placeholder">
              <Github size={40} />
            </div>
            <div className="github-info">
              <h3>Mohsinabbas51272</h3>
              <a href="https://github.com/Mohsinabbas51272" target="_blank" rel="noreferrer" className="btn-secondary">
                View Profile
              </a>
            </div>
          </div>
          
          <div className="github-stats">
            <div className="stat-item">
              <GitCommit className="stat-icon" />
              <span>Active Contributions</span>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <span>Repositories</span>
            </div>
            <div className="stat-item">
              <GitPullRequest className="stat-icon" />
              <span>Pull Requests</span>
            </div>
          </div>
          
          <div className="github-graph-placeholder">
            <div className="graph-header">Contribution Activity</div>
            <div className="graph-grid">
              {/* Generating a placeholder grid for the calendar feel */}
              {Array.from({ length: 90 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`graph-box level-${Math.floor(Math.random() * 5)}`}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
