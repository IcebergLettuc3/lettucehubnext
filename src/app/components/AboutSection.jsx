"use client"
import React, {useTransition, useState, startTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import { title } from 'process';
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Next.js</li>
        <li>trhrc</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Next.js</li>
        <li>aoeuoe</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Next.js</li>
        <li>iaae</li>
      </ul>
    )
  },
]

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
    // const [tab, setTab] = useState("skills")
    // const [startTransition, isPening] = useTransition()

    // const handleTabChange = (id:string) => {
    //     startTransition(() => {
    //         setTab(id)
    //     })
    // }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
            <Image src="/me.jpg" alt='some image' width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    teuoahrcgludhgc,.adugchr,hdbacruhcrhucr h.,crauhmcrt.h arhtcrhuc,.r hcrtu hb
                </p>
                <div className='flex flex-row mt-8'>
                  <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}>
                    Skills
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}>
                    Education
                  </TabButton>
                  <TabButton
                    selectTab={() => handleTabChange("certifications")}
                    active={tab === "certifications"}>
                    Certifications
                  </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection