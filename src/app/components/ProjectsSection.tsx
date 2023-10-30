"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

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
    const [tag, setTag] = useState("All")
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center intems-center gap-2 py-6'>
            <button className=' rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>
                All
            </button>
        </div>
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