import React from 'react';
import './Portfolio.css'; // Create this CSS file to style your portfolio

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Web App",
    description: "A Portfolio Web Application to show off my accomplishments, you should deffinately check it out",
    link: "https://github.com/IcebergLettuc3/lettucehubnext"
  },
  {
    title: "Project Wingman",
    description: "A Project that I'm very excited to be making progress on. This project invols the coordination of a large group of different technologies that involve hardware, firmware and software",
    link: "https://github.com/IcebergLettuc3/wingman"
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
