import React from 'react'

import Image from 'next/image';
import { FreeSans, HelveticaReg, Helvetica_Bold, NeueMontreal, neueHass } from '@/utils/font';
import Link from 'next/link';

const About = () => {
  return (
    <div className='about-container flex flex-col mx-5 my-32 lg:mt-44' id='about'>
      <div className="section-tag ml-auto ">
        <p className={Helvetica_Bold.className}>(about)</p>
      </div>
      <div className="section-headline text-2xl lg:text-6xl lg:mx-10 md:text-4xl my-20">
        <h2 className={` uppercase  ${FreeSans.className} mx-30 `}>You create – we archiive
        </h2>
      </div>
      <div className={`about-info ml-auto lg:w-5/12 text-lg lg:mt-22 ${neueHass.className}`}>
        <p>Archiive is a creative photography studio founded by three architects. Together we believe in crafting unique and engaging visual content and to tell your stories through our lenses.
          <br /><br />We believe stories convey experiences, emotions, and ideas, connecting people deeply. They make information memorable and impactful. Generating content as stories engages audiences emotionally, fostering a stronger connection. Visual storytelling enhances impact, making content more engaging and easier to recall.

        </p>
      </div>
      <div className="team-section mt-10 lg:mt-22 lg:mx-10">
        <div className="section-container xxl:w-11/12 xl:w-12/12 w-full founder-section grid lg:grid-cols-3 lg:grid-rows-1  grid-rows-2 xs:grid-cols-1 lg:gap-16 gap-5 mt-10">


          <div className='founder'>
            <div className={`founder-card relative text-white overflow-hidden ${neueHass.className}`}>
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='founder'
                fill
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
                quality={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
              <div className="social-btns absolute top-0 z-50 m-5 flex flex-col">
                <button className="founder-social bg-white text-black rounded-3xl px-2 z-50 mb-2 hover:translate-x-2 transition-transform outline-none">
                  <Link href={'https://instagram.com/laksha_vedh'} target='_blank'>
                    Instagram
                  </Link>
                </button>
              </div>
              <div className={`founder-card--overlay   opacity-0 hover:block hover:opacity-100 ${neueHass.className} text-sm transition-opacity duration-500 cursor-pointer`}>
                <p className='absolute bottom-0 mx-5 py-10 text-start'>Adesh graduated from Pune University and began his career as an intern at A for Architecture. Later, he moved to Bangalore where he worked as an architect with Mathew and Ghosh Architects.Passionate about photography, he enjoys traveling and capturing life&apos;s moments and stories through his lens.</p>
              </div>
            </div>
            <div className={`py-2 founder-info w-full text-start flex flex-col items-start ${NeueMontreal.className}`}>
              <h2 className='text-2xl font-medium'>Adesh Dholi
              </h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Co-Founder</p>
            </div>
          </div>
          <div className='founder'>
            <div className={`founder-card relative text-white overflow-hidden ${neueHass.className}`}>
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='founder'
                fill
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
                quality={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
              <div className="social-btns absolute top-0 z-50 m-5 flex flex-col">
                <button className="founder-social bg-white text-black rounded-3xl px-2 z-50 mb-2 hover:translate-x-2 transition-transform outline-none">
                  <Link href={'https://instagram.com/__viral18'} target='_blank'>
                    Instagram
                  </Link>
                </button>
              </div>
              <div className={`founder-card--overlay   opacity-0 hover:block hover:opacity-100 ${neueHass.className} text-sm transition-opacity duration-500 cursor-pointer`}>
                <p className='absolute bottom-0 mx-5 py-10 text-start'>Adesh graduated from Pune University and began his career as an intern at A for Architecture. Later, he moved to Bangalore where he worked as an architect with Mathew and Ghosh Architects.Passionate about photography, he enjoys traveling and capturing life&apos;s moments and stories through his lens.</p>
              </div>
            </div>
            <div className={`py-2 founder-info w-full text-start flex flex-col items-start ${NeueMontreal.className}`}>
              <h2 className='text-2xl font-medium'>Viral Nayee 
              </h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Co-Founder</p>
            </div>
          </div>
          <div className='founder'>
            <div className={`founder-card relative text-white overflow-hidden ${neueHass.className}`}>
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='founder'
                fill
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQY..."
                quality={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top'
                }}
              />
              <div className="social-btns absolute top-0 z-50 m-5 flex flex-col">
                <button className="founder-social bg-white text-black rounded-3xl px-2 z-50 mb-2 hover:translate-x-2 transition-transform outline-none">
                  <Link href={'https://instagram.com/laksha_vedh'} target='_blank'>
                    Instagram
                  </Link>
                </button>
              </div>
              <div className={`founder-card--overlay   opacity-0 hover:block hover:opacity-100 ${neueHass.className} text-sm transition-opacity duration-500 cursor-pointer`}>
                <p className='absolute bottom-0 mx-5 py-10 text-start'>Prachi Graduated from Pune University. She has worked with s.p.a design studio for 2 years. Later, she worked with Studio PPBA in Pune. <br /> With a creative eye for engaging visual content, she handles the correspondence and strategic growth at archiive.
 
</p>
              </div>
            </div>
            <div className={`py-2 founder-info w-full text-start flex flex-col items-start ${NeueMontreal.className}`}>
              <h2 className='text-2xl font-medium'>Prachi Sule 

              </h2>
              <p className={`opacity-50 ${HelveticaReg.className}`}>Partner</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About