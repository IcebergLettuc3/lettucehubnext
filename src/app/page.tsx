import Image from 'next/image'
import Portfolio from './Portfolio'
import Intro from './Intro'
import Link from 'next/link'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4'>
      <div className='container mx-auto px-12 py-4'>
        <HeroSection/>
      </div>
    </main>
  // <div className='flex flex-col items-center justify-center'>
  //   <Intro/>
  //   <Image
  //     className='flex m-auto flex-col items-center'
  //     src="/me.jpg"
  //     alt="Me"
  //     width={500}
  //     height={300}
  //   />
  //   <Link href="/about">About</Link>
  //   <Link href="/blog">Blog</Link>
  //   <Portfolio/>
  //   </div>
  )
}
