import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "DocuCollab System",
      category: "Full Stack",
      description: "A high-performance real-time collaboration engine using WebSocket technology.",
      github: "https://github.com/Mohsinabbas51272",
      tags: ["React", "Express", "Socket.io", "MongoDB"]
    },
    {
      title: "Royal Jewelry",
      category: "E-Commerce",
      description: "Boutique digital storefront focusing on luxury jewelry presentation.",
      github: "https://github.com/Mohsinabbas51272/JewlleryShop",
      tags: ["React", "CSS3", "Vite"]
    },
    {
      title: "Motion Metrics",
      category: "Utility",
      description: "Precision calculator for physical motion parameters and kinematics.",
      github: "https://github.com/Mohsinabbas51272/DistanceTimeSpeedCalculator",
      tags: ["JavaScript", "Algorithm", "UI"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="text-gradient">02. Portfolio</span>
        <h2 className="section-title">Curated Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-premium-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-top">
              <Code className="icon" size={24} />
              <div className="links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href="#" className="main-link"><ArrowUpRight size={20} /></a>
              </div>
            </div>
            
            <div className="project-body">
              <span className="cat">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
