import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import localFont from '@next/font/local'
import Link from 'next/link'
import gsap from 'gsap';

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
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
const Works = () => {
  const triggerRef = useRef(null);


  useGSAP(() => {
    triggerRef.current.childNodes.forEach((work) => {

      gsap.fromTo(
        work,
        {
          opacity:0,
          clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)"
        },
        {
          opacity:1,
          clipPath: "polygon(0 0, 120% 0%, 120% 120%, 0 120%)",
          webkitClipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: work,
            start: 'top 80%',
            end: '+1500 120%',
            scrub: 1,
            markers:false,
          },
        }
      );
    })

  })


  return (
    <>
      <div className="work-head flex">
        <div className='ml-auto m-5'>
          <p className={`inline-block font-bold ${Helvetica.className}`}>(works)</p>
        </div>
      </div>
      <div className={`works-container p-10 ${Helvetica.className}`} ref={triggerRef}>
        <div className="work-item relative" >
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative text-xl" >
          <div className='relative w-full h-full'>
            <Image
              src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <p className=''>Museum of Art and Photography</p>
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className="works-btn flex">
        <div className='ml-auto mr-auto'>
          <Link href={"/"}>
            <button className={`${Helvetica.className} underline-right outline-none  text-3xl flex items-center view-works-btn`}>
              <p className=' transition-transform duration-500'> View All Works</p>
              <Image className='ml-3 transition-all duration-700 opacity-0 -translate-x-5' src={"/assets/right arrow.svg"} width={25} height={15}></Image>
            </button>
          </Link>
        </div>
      </div>
    </>

  )
}

export default Works