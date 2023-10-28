"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'

function AboutSection() {
    const [tab, setTab] = useState("skills")
    const [startTransition, isPenging] = useTransition()

    const handleTabChange = (id:string) => {
        startTransition(() => {
            setTab(id)
        })
    }
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
                    <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>
                        Skills
                    </span>
                    <span className=''>Education</span>
                    <span className=''>Experience</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection