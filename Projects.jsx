import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projectImg from '../assets/profile.jpg'; // replace with real project images

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React and Vite.',
      img: projectImg,
      link: '#'
    },
    {
      title: 'AWS Lambda Project',
      description: 'Serverless image processing using AWS Lambda and S3.',
      img: projectImg,
      link: '#'
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
