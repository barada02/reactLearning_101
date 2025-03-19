import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  // Sample project data
  const projects = [
    { id: 1, name: 'Portfolio Website', category: 'Web Development' },
    { id: 2, name: 'Weather Dashboard', category: 'API Integration' },
    { id: 3, name: 'Task Manager', category: 'React State Management' },
    { id: 4, name: 'E-commerce Store', category: 'Full Stack' },
  ];

  return (
    <div className="page projects-page">
      <h1>Projects</h1>
      <p>Browse our collection of React projects. Click on a project to view details.</p>
      
      <div className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>Category: {project.category}</p>
            <Link to={`/project/${project.id}`} className="project-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
