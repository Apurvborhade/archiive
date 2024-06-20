import React from 'react'
import gsap, { Power1 } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image';
gsap.registerPlugin(useGSAP);
import localFont from '@next/font/local'
const neueHass = localFont({ src: [
  {
    path:'../fonts/neue hass/NeueHaasDisplayRoman.ttf',
    weight:'400',
    style:'roman'
  },
  {
    path:'../fonts/neue hass/NeueHaasDisplayMediu.ttf',
    weight:'500',
    style:'medium'
  },

] });
const Loader = () => {
    useGSAP(() => {

        const tl = gsap.timeline({});

        
        tl.from('.loader-logo',{
            x:200,
            duration:1,
            ease:"circ"
        })

        
        
        tl.fromTo('.loader-brand--text',{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },{
            duration:1,
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        },"-=0.4")

        tl.to(".logo-anim",{opacity:0})
        tl.from(
            '.block',
            {
                width: "5%",
                ease: Power1.easeIn,
                duration: 0.8,
                delay: 0.1,
                stagger: 0.05,
            }
        )

    })
    return (
        <>
            <div className="logo-anim absolute  w-screen h-screen flex justify-center items-center pointer-events-none">
                <div className="translate-x-3 relative flex w-full h-full items-center justify-center">
                    <Image
                    src={'/assets/archiiveLoader.svg'}
                    width={100}
                    height={100}
                    className="loader-logo"
                    />
                    <h1 className={`text-white ml-10 text-9xl loader-brand--text ${neueHass.className} font-medium`}>archiive</h1>
                </div>
            </div>
            <div className="overlay pointer-events-none">
                <div className="block block-1"></div>
                <div className="block block-2"></div>
                <div className="block block-3"></div>
                <div className="block block-4"></div>
                <div className="block block-5"></div>
                <div className="block block-6"></div>
                <div className="block block-7"></div>
                <div className="block block-8"></div>
                <div className="block block-9"></div>
                <div className="block block-10"></div>
                <div className="block block-11"></div>
                <div className="block block-12"></div>
                <div className="block block-13"></div>
                <div className="block block-14"></div>
                <div className="block block-15"></div>
                <div className="block block-16"></div>
                <div className="block block-17"></div>
                <div className="block block-18"></div>
                <div className="block block-19"></div>
                <div className="block block-20"></div>
                <div className="block block-21"></div>
                <div className="block block-22"></div>
            </div>
        </>
    )
}

export default Loader