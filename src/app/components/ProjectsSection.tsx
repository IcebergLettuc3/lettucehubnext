"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import Paragraphs from '../../../public/utils/LorumIpsum'

const projectsData = [
    {
        id: 1,
        title: "Title",
        description: Paragraphs[2],
        image: "/images/webPortfolio.png",
        tag: ["All", "Web"],
        previewUrl: "/",
        gitUrl: "/"
    },
    {
        id: 2,
        title: "Title2",
        description: Paragraphs[9],
        image: "/images/webPortfolio.png",
        tag: ["All"],
        previewUrl: "/",
        gitUrl: "/",
    },
]

function ProjectsSection() {
    const [tag, setTag] = useState("All")
    const handelTagChanged = (newTag:any) => {
        setTag(newTag)
    }
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center intems-center gap-2 py-6'>
            <ProjectTag
            onClick={handelTagChanged}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handelTagChanged}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handelTagChanged}
            name="Machine Learning"
            isSelected={tag === "Machine Learning"}
            />
            <ProjectTag
            onClick={handelTagChanged}
            name="Mobile"
            isSelected={tag === "Mobile"}
            />
        </div>
        <div>
            {projectsData.map((project) => (
            <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
            ))}
        </div>
    </>
  )
}

export default ProjectsSection