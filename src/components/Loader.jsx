import React, { useEffect, useState } from 'react'
import gsap, { Power1 } from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image';
gsap.registerPlugin(useGSAP);
import localFont from '@next/font/local'
const neueHass = localFont({
    src: [
        {
            path: '../fonts/neue hass/NeueHaasDisplayRoman.ttf',
            weight: '400',
            style: 'roman'
        },
        {
            path: '../fonts/neue hass/NeueHaasDisplayMediu.ttf',
            weight: '500',
            style: 'medium'
        },

    ]
});
const Loader = () => {
    

    const [logoSize, setLogoSize] = useState(80);

   
    useGSAP(() => {

        const tl = gsap.timeline({});


        tl.from('.loader-logo', {
            x: 200,
            duration: 1,

        })



        tl.fromTo('.loader-brand--text', {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        }, {
            duration: 1,

            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        }, "-=0.4")

        tl.to(".logo-anim", { y: -220, opacity: 0, ease: "power1.inOut", delay: 0.8,duration:1 })
        tl.to(
            '.overlay',
            {
                height: "0%",
                ease: "power1.inOut",
                duration: 1,
            },
            "-=0.7"
        )

    })
    return (
        <>
            <div className="logo-anim fixed  w-screen h-screen flex justify-center items-center pointer-events-none">
                <div className="lg:translate-x-3 fixed flex w-full h-full items-center justify-center">
                    <Image
                        src={'/assets/archiiveLoader.svg'}
                        width={logoSize}
                        alt='logo'
                        height={logoSize}
                        className="loader-logo lg:mt-5"
                    />
                    <h1 className={`text-white ml-5 lg:ml-10 lg:text-9xl text-6xl loader-brand--text ${neueHass.className} font-medium`}>archiive</h1>
                </div>
            </div>
            <div className="overlay pointer-events-none"></div>
        </>
    )
}

export default Loader