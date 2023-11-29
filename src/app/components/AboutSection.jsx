"use client"
import React, {useTransition, useState, startTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { title } from 'process';
import { Content } from 'next/font/google';
import Paragraphs from '/public/utils/LorumIpsum';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>C++</li>
        <li>Python</li>
        <li>JavaScipt</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>QT</li>
        <li>Docker</li>
        <li>Git</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>University of Houston</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Coursera Machine Learning Specialization</li>
      </ul>
    )
  },
  {
    title: "Tech Interests",
    id: "techinterests",
    content: (
      <ul className='list-disc pl-2'>
        <li>Machine learning</li>
      </ul>
    )
  }
]

function AboutSection(id) {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white' id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
            <Image src="/images/me.jpg" alt='some image' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                {/* {Paragraphs.slice(0,5).map((paragraph, index) => (
                <p className='text-base lg:text-lg' key={index}>{paragraph}</p>
                ))} */}
                <p>
                  Graduate of the University of Houston Cullen College of Engineering with hands-on
                  experience in software development, encompassing both desktop and web application
                  design and implementation. Adept at translating complex requirements into functional
                  and user-friendly software solutions. Keenly interested in leveraging cloud computing
                  technologies and exploring the vast potential of artificial intelligence to innovate
                  and drive digital transformation. Eager to collaborate on projects that push the boundaries
                  of tech and provide meaningful impact.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                  <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}>
                      {" "}
                      Skills{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}>
                      {" "}
                      Education{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}>
                      {" "}
                      Certifications{" "}
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("techinterests")}
                    active={tab === "techinterests"}>
                      {" "}
                      Tech Interests{" "}
                  </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection