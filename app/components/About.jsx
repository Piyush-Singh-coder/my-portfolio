import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-nt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1'>
            <p className='mb-10 max-w-2xl'>
                I’m Piyush Singh, a Full Stack Developer and AI enthusiast from India, currently pursuing my B.Tech in Computer Science. I enjoy building scalable web applications and experimenting with AI-powered tools, working with technologies like React, Next.js, Node.js, and PostgreSQL.
                <p>
                    I’ve created projects such as an AI-driven SaaS platform and a finance tracking app, focusing on clean design and smooth user experience. I’m always eager to learn, collaborate, and explore modern technologies to craft innovative digital solutions.
                </p>
                
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500' key={index} >
                        <Image className='w-7 mt-3' src={icon} alt={title} /> 
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-gray-600 text-sm'>{description} </p>
                    </li>
                ))}
            </ul>

            <h4 className='my-6 text-gray-700 '>Tools I used</h4>

            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) =>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
