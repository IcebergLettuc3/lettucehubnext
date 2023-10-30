import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Title",
        description: "Description",
        image: "/images/webPortfolio.png",
        tag: ["All", "Web"],
        previewUrl: "/",
        gitUrl: "/"
    },
    {
        id: 2,
        title: "Title2",
        description: "Description2",
        image: "/images/webPortfolio.png",
        tag: ["All", "Web"],
        previewUrl: "/",
        gitUrl: "/",
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
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}/>
            ))}
        </div>
    </>
  )
}

export default ProjectsSection