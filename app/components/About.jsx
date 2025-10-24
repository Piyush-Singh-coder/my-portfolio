import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-nt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-2'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl' />
        </div>

        <div className='flex-1'>
            <p className='mb-5 max-w-2xl'>
                <p>
            I’m a backend-focused full-stack developer experienced in building scalable web applications using Node.js/Express, Django, and Spring Boot. I’m currently specializing in Java-based enterprise development, with a strong focus on clean architecture and performance.
        </p>

        <p >
            I enjoy solving complex backend problems and turning them into smooth, reliable user experiences.
        </p>

        <p >
            Right now, I’m specializing in backend development with a focus on Spring Boot and microservice architectures. I’m also expanding into:
        </p>

        <ul >
            <li>
                <strong>Advanced backend systems</strong> – GraphQL, Socket.IO, and Webhooks for real-time and event-driven design.
            </li>
            <li>
                <strong>Generative AI (GenAI)</strong> – Experimenting with RAG (Retrieval-Augmented Generation) and LangChain to build context-aware AI applications.
            </li>
        </ul>

        <p>
            I’m looking for Software Engineer opportunities where I can leverage my experience to create reliable and scalable products.
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

            {/* <h4 className='my-6 text-gray-700 '>Tech Stack</h4> */}

            {/* <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index) =>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                    </li>
                ))}
            </ul> */}
        </div>
      </div>
    </div>
  )
}

export default About
