import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Globe, Server, Code, Atom, Layers, FileCode, Database, Lock, Gauge, TestTube, GitBranch, Github, Smartphone, Figma, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "Frontend-Architecture", level: "Expert", icon: <Zap /> },
    { name: "Backend Development", level: "advanced", icon: <Cpu /> },
    { name: "Responsive UI/UX", level: "Expert", icon: <Globe /> },
    { name: "RESTful APIs", level: "Advanced", icon: <Server /> },
    { name: "GraphQL", level: "Intermediate", icon: <Code /> },
    { name: "React.js", level: "Expert", icon: <Atom /> },
    { name: "Next.js", level: "Advanced", icon: <Layers /> },
    { name: "JavaScript (ES6+)", level: "Expert", icon: <FileCode /> },
    { name: "TypeScript", level: "Advanced", icon: <Code /> },
    { name: "Node.js", level: "Advanced", icon: <Terminal /> },
    { name: "Express.js", level: "Advanced", icon: <Server /> },
    { name: "Database Design (SQL/NoSQL)", level: "Advanced", icon: <Database /> },
    { name: "MongoDB", level: "Advanced", icon: <Database /> },
    { name: "Authentication & Authorization", level: "Advanced", icon: <Lock /> },
    { name: "Web Performance Optimization", level: "Advanced", icon: <Gauge /> },
    { name: "Version Control (Git/GitHub)", level: "Expert", icon: <Github /> },
    { name: "Graphical Design & Figma", level: "Intermediate", icon: <Figma /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Core Capabilities</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-premium-box white-card"
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
