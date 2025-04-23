import React, { useState } from 'react'
import { Mail,Phone,Share2,Github,Linkedin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const NavBar = () => {
  return (
    <>
        <div className='flex justify-between p-8'>
            <h1 className='special-gothic-expanded-one-regular text-sm'>HANNAN</h1>

            <ul className='hidden md:flex gap-10 special-gothic-expanded-one-regular text-sm'>
                <li className='hover:cursor-pointer'>Home</li>
                <li className='hover:cursor-pointer'>About me</li>
                <li className='hover:cursor-pointer'>Projects</li>
            </ul>

            <ul className='hidden md:flex gap-6 special-gothic-expanded-one-regular text-sm items-center'>
              <li>
                <a href="https://github.com/Hannan1803">
                  <Github 
                    className="text-black hover:cursor-pointer transition duration-300 hover:text-gray-500" 
                    width={30}
                  />
                  </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/muhammad-haniif-hannan-s-731943289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <Linkedin
                    className="text-black hover:cursor-pointer transition duration-300 hover:text-[#5c39e9]"
                    width={30}
                  />
                </a>
              </li>
              
              <li>
                <Share2
                  className="text-black hover:cursor-pointer transition duration-300 hover:text-green-600"
                  width={30}
                />
              </li>
            </ul>
        </div>
    </>
  )
}

export default NavBar
