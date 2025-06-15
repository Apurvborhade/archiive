import React from 'react'

import { FreeSans, poppins, inter } from '@/utils/font';
import Link from 'next/link';

const founderImages = [
  {
    src: "/assets/founders/adesh.jpg",
    alt: "founder",
    name: "Adesh Dholi",
    role: "Co-Founder",
    instagram: "https://instagram.com/laksha_vedh",
    desc: "Adesh graduated from Pune University and began his career as an intern at A for Architecture. Later, he moved to Bangalore where he worked as an architect with Mathew and Ghosh Architects.Passionate about photography, he enjoys traveling and capturing life's moments and stories through his lens."
  },
  {
    src: "/assets/founders/viral.jpg",
    alt: "founder",
    name: "Viral Nayee",
    role: "Co-Founder",
    instagram: "https://instagram.com/__viral18",
    desc: "Viral, a passionate spirit graduated from Pune University with a fresh perspective, started his professional journey at Pritesh Deo Design Spaces as an intern. He is a practicising architect and an interior designer, who explored his passion in photography with an eye of revealing stories through his lens. Archiive is his venture to dive deep into the passion"
  },
  {
    src: "/assets/founders/prachi.jpg",
    alt: "founder",
    name: "Prachi Sule",
    role: "Partner",
    instagram: "https://instagram.com/prach.i.sule",
    desc: "Prachi Graduated from Pune University. She has worked with s.p.a design studio for 2 years. Later, she worked with Studio PPBA in Pune.\n\nWith a creative eye for engaging visual content, she handles the correspondence and strategic growth at archiive"
  }
];

const About = () => {
  return (
    <div className='about-container flex flex-col mx-5 my-32 lg:mt-44' id='about'>
      <div className="section-tag ml-auto ">
        <p className={`font-medium ${inter.className}`}>(about)</p>
      </div>
      <div className="section-headline text-2xl lg:text-6xl lg:mx-10 md:text-4xl my-20">
        <h2 className={` uppercase  ${FreeSans.className} mx-30 `}>You create – we archiive
        </h2>
      </div>
      <div className={`about-info ml-auto lg:w-5/12 mid:text-lg lg:text-sm lg:mt-22 ${inter.className}`}>
        <p>Archiive is a creative photography studio founded by three architects. Together we believe in crafting unique and engaging visual content and to tell your stories through our lenses.
          <br /><br />We believe stories convey experiences, emotions, and ideas, connecting people deeply. They make information memorable and impactful. Generating content as stories engages audiences emotionally, fostering a stronger connection. Visual storytelling enhances impact, making content more engaging and easier to recall.

        </p>
      </div>
      <div className="team-section mt-10 lg:mt-22 lg:mx-10">
        <div className="section-container xxl:w-11/12 xl:w-12/12 w-full founder-section flex xs:flex-wrap justify-center mt-10 xs:gap-24">
          {founderImages.map((founder, idx) => (
            <div className='founder' key={founder.name}>
              <div className={`founder-card relative text-white overflow-hidden ${inter.className}`}>
                <img
                  src={founder.src}
                  alt={founder.alt}
                  width={430}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'top',
                    width: '100%',
                    height: '400px',
                    display: 'block'
                  }}
                />
                <div className="social-btns absolute top-0 z-50 m-5 flex flex-col">
                  <button className="founder-social bg-white text-black rounded-3xl px-2 z-50 mb-2 hover:translate-x-2 transition-transform outline-none">
                    <Link href={founder.instagram} target='_blank'>
                      Instagram
                    </Link>
                  </button>
                </div>
                <div className={`founder-card--overlay absolute top-0 opacity-0 hover:block hover:opacity-100 ${inter.className} text-sm transition-opacity duration-500 cursor-pointer`}>
                  <p className='absolute bottom-0 mx-5 py-10 text-start'>{founder.desc}</p>
                </div>
              </div>
              <div className={`py-2 founder-info w-full text-start flex flex-col items-start ${poppins.className} ${idx === 1 ? "font-medium" : ""}`}>
                <h2 className='text-xl font-medium'>{founder.name}</h2>
                <p className={`opacity-50 font-light ${inter.className}`}>{founder.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About