import React from 'react'
// import { Phone, Share2, Instagram, Twitter, Facebook } from 'lucide-react';
import Carousel from './Carousel'

const Content = () => {
  return (
    <>
        <div className='flex justify-between p-8'>
            <div className='flex flex-col w-1/2'>
                <h1 className='main-theme text-base lg:text-8xl special-gothic-expanded-one-regular text-8xl font-semibold font-small'>Crafting Seamless Digital Experiences</h1>
                <p className='main-theme roboto-rt mt-2'>From pixel-perfect frontends to powerful backend architectures, I deliver end-to-end full stack solutions tailored to bring your vision to life. Whether it's building dynamic web apps, responsive interfaces, or scalable APIs—I blend clean code with creative design to create digital products that don't just work, but <i>wow.</i></p>
            </div>

            <div className='cor-theme items-center justify-center hidden md:flex w-1/2 h-[400px] overflow-hidden rounded-xl'>
                <Carousel></Carousel>
            </div>
        </div>
    </>
  )
}

export default Content
