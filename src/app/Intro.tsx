import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className='flex m-auto flex-col items-center'>
            <h1 className='text-xl'>
                {/* add conditional int on years of experience */}
                Hello my Name is Jonathan Eisenbrandt I&apos;m a software developer with 2 years of experience developing applications for desktop and web.
            </h1>
            <h1 className='text-xl'>
                Welcome to my website.
            </h1>
            <p>
                contact me: 
            </p>
        </div>
    )
}

export default Intro