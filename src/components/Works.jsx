import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import localFont from '@next/font/local'
import Link from 'next/link'
import gsap from 'gsap';
import { createClient } from 'contentful'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import WorkCard from './WorkCard';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Helvetica = localFont({
  src: [
    {
      path: '../fonts/helvetica/Helvetica.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../fonts/helvetica/Helvetica-Bold.ttf',
      weight: '800',
      style: 'bold'
    },
  ]
})




const Works = ({ works }) => {
  const triggerRef = useRef(null);
  useGSAP(() => {
    triggerRef.current.childNodes.forEach((work) => {

      gsap.fromTo(
        work,
        {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)"
        },
        {
          opacity: 1,
          clipPath: "polygon(0 0, 120% 0%, 120% 120%, 0 120%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: work,
            start: 'top 80%',
            end: '+1500 120%',
            scrub: 1,
            markers: false,
          },
        }
      );
    })

  })


  return (
    <div id='work'>
      <div className="work-head flex">
        <div className='ml-auto m-5'>
          <p className={`inline-block font-bold ${Helvetica.className}`}>(works)</p>
        </div>
      </div>
      <div className={`works-container p-10 ${Helvetica.className}`} ref={triggerRef}>


        {works.map(work => (
          <WorkCard key={work.sys.id} work={work} />
        ))}


      </div>
      <div className="works-btn flex">
        <div className='ml-auto mr-auto'>
          <Link href={"/"}>
            <button className={`${Helvetica.className} underline-right outline-none  text-3xl flex items-center view-works-btn`}>
              <p className=' transition-transform duration-500'> View All Works</p>
              <Image className='ml-3 transition-all duration-700 opacity-0 -translate-x-5' src={"/assets/right arrow.svg"} width={25} height={15} alt='right-arrow'></Image>
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}



export default Works