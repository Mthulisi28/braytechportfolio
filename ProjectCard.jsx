import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
