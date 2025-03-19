import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetail() {
  // Get the project ID from URL parameters
  const { id } = useParams();
  
  // Sample project data (in a real app, you might fetch this from an API)
  const projects = [
    { 
      id: 1, 
      name: 'Portfolio Website', 
      category: 'Web Development',
      description: 'A responsive portfolio website built with React and CSS Grid.',
      technologies: ['React', 'CSS Grid', 'Responsive Design']
    },
    { 
      id: 2, 
      name: 'Weather Dashboard', 
      category: 'API Integration',
      description: 'A weather dashboard that fetches data from a weather API and displays current conditions and forecasts.',
      technologies: ['React', 'Axios', 'OpenWeather API']
    },
    { 
      id: 3, 
      name: 'Task Manager', 
      category: 'React State Management',
      description: 'A task management application with features like task creation, completion, and filtering.',
      technologies: ['React', 'Context API', 'LocalStorage']
    },
    { 
      id: 4, 
      name: 'E-commerce Store', 
      category: 'Full Stack',
      description: 'An e-commerce store with product listings, cart functionality, and checkout process.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
  ];
  
  // Find the project that matches the ID from the URL
  const project = projects.find(p => p.id === parseInt(id));
  
  // If no project is found, show a message
  if (!project) {
    return (
      <div className="page project-detail-page">
        <h1>Project Not Found</h1>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/projects" className="back-link">Back to Projects</Link>
      </div>
    );
  }
  
  return (
    <div className="page project-detail-page">
      <h1>{project.name}</h1>
      <div className="project-info">
        <p className="project-category">Category: {project.category}</p>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          <h3>Technologies Used:</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <Link to="/projects" className="back-link">Back to Projects</Link>
    </div>
  );
}

export default ProjectDetail;
