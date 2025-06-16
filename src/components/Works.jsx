import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';

import Link from 'next/link';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { inter } from '@/utils/font';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);






const Works = ({ works }) => {
  const triggerRef = useRef(null);
  useGSAP(() => {
   

      gsap.fromTo(
        ".work-grid-item",
        {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)"
        },
        {
          stagger:0.3,
          opacity: 1,
          clipPath: "polygon(0 0, 120% 0%, 120% 120%, 0 120%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: work,
            start: '-=140px 30%',
            end: 'top 30%',
            scrub: false,
            markers: false,
            toggleActions: "play none none reverse"
          },
          
        }
      );
    

  })


  return (
    <div id='work'>
      <div className="work-head flex">
        <div className='ml-auto m-5'>
          <p className={`inline-block font-bold ${inter.className}`}>(works)</p>
        </div>
      </div>
     
      <div className='work-grid grid mid:grid-cols-3 lg:grid-cols-3  m-10 mid:gap-x-64 lg:gap-x-36 lg:gap-y-16 sm:grid-cols-2 mid:gap-y-32 lg:mx-10 gap-20 xs:gap-24 'ref={triggerRef}>
        {works.map((work) => (
          <Link key={work.sys.id} href={`/works/${work.fields.slug}`} className='work-grid-item'>
            <div className='relative w-full h-full'>
              <img
                src={`https:${work.fields.thumbnail.fields.file.url}`}
                alt={work.fields.title}
                width={450}
                height={300}
                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
              />
            <p className={`${inter.className} mt-2 text-left mid:text-sm text-xs `}>{work.fields.title}</p>
            </div>

          </Link>
        ))}
      </div>
      <div className="works-btn flex ">
        <div className='flex justify-center w-full xs:justify-start xs:mx-10'>
          <Link href={"/works"}>
            <button className={`${inter.className} mt-16 underline-right outline-none  text-2xl xs:text-xl flex items-center view-works-btn`}>
              <p className=' transition-transform duration-500'> View All Works</p>
              <img
                className="ml-3 transition-all duration-700 opacity-0 -translate-x-5"
                src="/assets/right%20arrow.svg"
                width={20}
                height={15}
                alt="right-arrow"
                loading="lazy"
                style={{ display: 'inline-block', maxWidth: '100%', height: 'auto' }}
                decoding="async"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}



export default Works