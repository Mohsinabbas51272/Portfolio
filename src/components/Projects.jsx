import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Doc-collab-system",
      category: "Full Stack",
      description: "A high-performance real-time collaboration engine using WebSocket technology.",
      github: "https://github.com/Mohsinabbas51272/Dacument-collaboration-system.git",
      tags: ["React", "Express", "Socket.io", "MongoDB"]
    },
    {
      title: "Royal-Jewelry",
      category: "E-Commerce",
      description: "Boutique digital storefront focusing on luxury jewelry presentation.",
      github: "https://github.com/Mohsinabbas51272/JewlleryShop",
      tags: ["React", "CSS3", "Vite"]
    },
    {
      title: "DTS-Calculator",
      category: "Utility",
      description: "Precision calculator for physical motion parameters and kinematics.",
      github: "https://github.com/Mohsinabbas51272/DistanceTimeSpeedCalculator",
      tags: ["JavaScript", "Algorithm", "UI"]
    },
    {
      title: "Animation-Website",
      category: "React",
      description: "Animated website using React and Framer Motion.",
      github: "https://github.com/Mohsinabbas51272/Animation.git",
      tags: ["React"]
    },
    {
      title: "Playground-Website",
      category: "Frontend",
      description: "Playground website using React and Framer Motion, interactive UI.",
      github: "https://github.com/Mohsinabbas51272/Playground.git",
      tags: ["React", "CSS3", "Vite"]
    },
    {
      title: "Data-Fetching-Website",
      category: "Utility",
      description: "Website for fetching data from an API, interactive UI,waiting response.",
      github: "https://github.com/Mohsinabbas51272/DataFetching.git",
      tags: ["JavaScript", "Algorithm", "API"]
    },

  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="text-gradient">02. Projects</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-premium-card white-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >


            <div className="project-top">
              <span className="cat">{project.category}</span>
              <div className="links">
                <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
              </div>
            </div>

            <div className="project-body">
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
