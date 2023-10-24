import Image from 'next/image'
import Portfolio from './Portfolio'
import Intro from './Intro'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
    <Intro/>
    <Image
      className='flex m-auto flex-col items-center'
      src="/me.jpg"
      alt="Me"
      width={500}
      height={300}
    />
    <Link href="/about">About</Link>
    <Portfolio/>
    </div>
  )
}
