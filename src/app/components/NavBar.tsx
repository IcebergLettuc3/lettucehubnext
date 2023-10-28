import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { link } from 'fs'

const NavLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

export const NavBar = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                LOGO
            </Link>
            <div className='menu block md:auto' id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-10'>
                    {NavLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}
