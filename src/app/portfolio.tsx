import React from 'react';
import './Portfolio.css'; // Create this CSS file to style your portfolio

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "This is a description of project two.",
    link: "https://github.com/yourusername/project-two"
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio website. Here are some of my projects:</p>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
