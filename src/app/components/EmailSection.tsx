import React from 'react'
import GithubIcon from '/public/images/github-icon.svg'
import LinkedinIcon from 'public/images/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='social flex flex-row gap-2'>
          <Link href='github.com'>
            <Image src={GithubIcon} alt="Github Icon"/>
          </Link>
          <Link href='linkedin.com'>
            <Image src={LinkedinIcon} alt="Linkedin Icon"/>
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-4'>
          <label htmlFor='email' className='text-white'>Your email</label>
          <input type='email' id='email' required placeholder='example@email.com' className='bg-black'/>
        </form>
      </div>
    </section>
  )
}

export default EmailSection