import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Globe } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "Frontend Architecture", level: "Expert", icon: <Zap /> },
    { name: "Backend Development", level: "Advanced", icon: <Cpu /> },
    { name: "Data Structures & Algorithms", level: "Advanced", icon: <ShieldCheck /> },
    { name: "Responsive UI/UX", level: "Expert", icon: <Globe /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <span className="text-gradient">03. Expertise</span>
        <h2 className="section-title">Core Capabilities</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-premium-box glass-card"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span className="level">{skill.level}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
