"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import Paragraphs from '../../../public/utils/LorumIpsum'
import { motion, useInView } from "framer-motion"

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
    {
        id: 3,
        title: "Static Page Hosted on aws",
        description: "acessible here",
        projectUrl: "https://lettuceawstest.s3.amazonaws.com/index.html",
        shortUrl: "awsTest",
        image: "/images/webPortfolio.png",
        tag: ["All"],
        previewUrl: "/",
        gitUrl: "/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const handelTagChanged = (newTag:any) => {
        setTag(newTag)
    }
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity: 1},
    }

    return (
    <section id="projects">
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
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}>
                    <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                projectUrl={project.projectUrl}
                shortUrl={project.shortUrl}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
                </motion.li>
            
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection