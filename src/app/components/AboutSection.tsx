import React from 'react'
import Image from 'next/image'

function AboutSection() {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 '>
            <Image src="/me.jpg" width={500} height={500}/>
            <div>
                <h2>About Me</h2>
                <p>
                    teuoahrcgludhgc,.adugchr,hdbacruhcrhucr h.,crauhmcrt.h arhtcrhuc,.r hcrtu hb
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection