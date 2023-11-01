"use client"
import React from "react";
import Image from "next/image";
import {TypeAnimation} from 'react-type-animation';
import Paragraphs from '../../../public/utils/LorumIpsum';

const HeroSection = () => {
    const handelClick = () => {
        console.log("button does't work yet")
    }
    return(
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-8 place-self-center text-center sm:text-lef justify-self-start">
                    <h1 className='text-white mb-4 text-5xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 ">
                            Hello, I&apos;m{" "}
                            </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                "Jonathan",
                                1000,
                                "a Web Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            />
                    </h1>
                    {Paragraphs.slice(0,3).map((paragraph:string, index:number) => (
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl" key={index}>{paragraph}</p>
                    ))}
                    <div>
                        <button
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                            onClick={handelClick}>
                            hire me
                        </button>
                        <button
                            className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
                            onClick={handelClick}>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                            
                        </button>
                    </div>
                </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative">
                        <Image
                        src={"../../../public/images/me.jpg"}
                        alt="Me"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection