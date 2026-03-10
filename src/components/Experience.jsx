import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Software Developer",
      company: "Softoo Technology",
      period: "Present",
      description: "Delivering robust and scalable web solutions. Specializing in efficient backend architectures and intuitive frontend experiences. Focusing on performance, scalability, and clean code."
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card white-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="exp-icon">
              <Briefcase size={24} />
            </div>
            <div className="exp-content">
              <h3>{exp.role}</h3>
              <span className="exp-company">{exp.company}</span>
              <span className="exp-period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
