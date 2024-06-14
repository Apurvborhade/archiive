import React from 'react'
import localFont from '@next/font/local'
import {} from '@next/font/google'
import Image from 'next/image';
const Helvetica = localFont({ src: "../fonts/helvetica/Helvetica-Bold.ttf" });
const HelveticaReg = localFont({ src: "../fonts/helvetica/Helvetica.ttf" });
const FreeSans = localFont({ src: "../fonts/FreeSansBold.ttf" });
const About = () => {
  return (
  <div className='about-container flex flex-col mx-10'>
      <div className="section-tag ml-auto ">
        <p className={Helvetica.className}>(about)</p>
      </div>
      <div className="section-headline text-3xl lg:text-8xl my-20">
        <h2 className={`lg:indent-96  ${Helvetica.className} mx-30 `}>Born from Passion, Driven by Precision—Archiive: Elevating Architectural — Photography</h2>
      </div>
      <div className="about-info ml-auto lg:w-5/12 text-2xl lg:mt-32">
        <p>Archiive was born from a passion for architecture and photography. Our journey began when our founder, [Founder's Name], realized the need for high-quality, artistic architectural photography that truly captures the essence of buildings and structures.</p>
      </div>
      <div className="team-section mt-10 lg:mt-32 lg:mx-10">
        <h2 className={`${FreeSans.className} text-2xl lg:text-5xl`}>Meet Our Visionaries: The Founders</h2>
        <div className="section-container grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 lg:gap-16 gap-5 mt-10">
          <div className={`founder-card relative text-white overflow-hidden ${FreeSans.className}`}>
            <Image 
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='founder'
            fill
            quality={100}
            style={{
              objectFit:'cover'
            }}
            />
            <div className="founder-card--overlay"></div>
            <div className="p-10 founder-info w-full text-center absolute bottom-0 flex flex-col items-center">
              <h2 className='text-2xl'>Michael Brown</h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Head of Design</p>
            </div>
          </div>
          <div className={`founder-card relative text-white overflow-hidden ${FreeSans.className}`}>
            <Image 
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='founder'
            fill
            quality={100}
            style={{
              objectFit:'cover'
            }}
            />
            <div className="founder-card--overlay"></div>
            <div className="p-10 founder-info w-full text-center absolute bottom-0 flex flex-col items-center">
              <h2 className='text-2xl'>Michael Brown</h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Head of Design</p>
            </div>
          </div>
          <div className={`founder-card relative text-white overflow-hidden ${FreeSans.className}`}>
            <Image 
            src="https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='founder'
            fill
            quality={100}
            style={{
              objectFit:'cover'
            }}
            />
            <div className="founder-card--overlay"></div>
            <div className="p-10 founder-info w-full text-center absolute bottom-0 flex flex-col items-center">
              <h2 className='text-2xl'>Michael Brown</h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Head of Design</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About