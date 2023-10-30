import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Title",
        description: "Description",
        image: "/images/webPortfolio.svg",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Title2",
        description: "Description2",
        image: "/images/webPortfolio.svg",
        tag: ["All", "Web"]
    },
]

function ProjectsSection() {
  return (
    <>
        <h2>My Projects</h2>
        <div>
            {projectsData.map((project) => (
            <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}/>
            ))}
        </div>
    </>
  )
}

export default ProjectsSection