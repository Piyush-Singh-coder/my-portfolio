import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-nt-20'>
       <h4 className='text-center mb-2 text-lg'>What I offer</h4>
      <h2 className='text-center text-5xl'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I am frontend Developer from California, USA with 10 years of experience in multiple companies like Microsoft, tesla and apple.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon,title, description, link}, index) => (
            <div className='border border-gray-400 rounded-lg px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-12 cursor-pointer hover:bg-pink-50 hover:-translate-y-1 duration-500' key={index}>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image className='w-4' alt='' src={assets.right_arrow} />
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
