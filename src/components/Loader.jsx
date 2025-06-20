import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FreeSans } from '@/utils/font';
gsap.registerPlugin(useGSAP);

const optimizedImgStyle = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto'
};

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

        tl.to(".logo-anim", { y: -220, opacity: 0, ease: "power1.inOut", delay: 0.8, duration: 1 })
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
                    <img
                        src={'/assets/archiiveLoader.svg'}
                        width={logoSize}
                        height={logoSize}
                        alt='logo'
                        className="loader-logo lg:mt-5"
                        loading="eager"
                        decoding="async"
                        style={optimizedImgStyle}
                    />
                    <h1 className={`text-white ml-5 lg:ml-10 lg:text-9xl text-6xl loader-brand--text ${FreeSans.className} font-medium`}>archiive</h1>
                </div>
            </div>
            <div className="overlay pointer-events-none"></div>
        </>
    )
}

export default Loader