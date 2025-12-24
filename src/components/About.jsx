import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
 return (
    <section id="about" className="about">
      <div className="section-header">
        <span className="text-gradient">01. Discovery</span>
        <h2 className="section-title">Professional Background</h2>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-info glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
         <p className="lead">
  I am a Full-Stack Software Developer at Softoo Technology,
  delivering robust and scalable web solutions.
</p>
<p>
  I specialize in building efficient backend architectures and
  intuitive frontend experiences, with a strong focus on performance,
  scalability, and clean code.
</p>

          
          <div className="education-stripe">
            <div className="stripe-item">
              <span className="label">Institution</span>
              <span className="value">Minhaj University, Lahore</span>
            </div>
            <div className="stripe-item">
              <span className="label">Graduation</span>
              <span className="value">2024</span>
            </div>
          </div>
        </motion.div>

        <div className="about-stats">
          <div className="stat-box glass-card">
            <span className="number">3+</span>
            <span className="label">Live Projects</span>
          </div>
          <div className="stat-box glass-card">
            <span className="number">A+</span>
            <span className="label">Academic Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
