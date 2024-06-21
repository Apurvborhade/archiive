import React, { useState } from 'react'
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
    const [logoSize, setLogoSize] = useState(80)
    useGSAP(() => {
        if(window.innerWidth < 600) {
            setLogoSize(70)
        }

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

        tl.to(".logo-anim", { y: -220, opacity: 0,ease:"power1.inOut",delay:0.8, })
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
            <div className="logo-anim absolute  w-screen h-screen flex justify-center items-center pointer-events-none">
                <div className="translate-x-3 fixed flex w-full h-full items-center justify-center">
                    <Image
                        src={'/assets/archiiveLoader.svg'}
                        width={logoSize}
                        alt='logo'
                        height={logoSize}
                        className="loader-logo mt-5"
                    />
                    <h1 className={`text-white ml-10 lg:text-9xl text-8xl loader-brand--text ${neueHass.className} font-medium`}>archiive</h1>
                </div>
            </div>
            <div className="overlay pointer-events-none"></div>
        </>
    )
}

export default Loader