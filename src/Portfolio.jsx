import React from 'react';
import { projects } from './data/projects'; // Adjust the path if needed
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
