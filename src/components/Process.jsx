import localFont from '@next/font/local';
import { Monda } from 'next/font/google'
import gsap, { Power1 } from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);
const monda = Monda({ subsets: ['latin'], weight: "400" })
import React, { useEffect, useRef } from 'react'
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
const Process = () => {
    const processCard = useRef(null);
    let horizontalScroll = 0;
    useEffect(() => {
        
        if (processCard.current && window.innerWidth > 1300) {
            const processCards = Array.from(processCard.current.childNodes)
            processCards.slice(0,processCards.length-2).forEach((card) => {
            
                horizontalScroll += card.offsetWidth;
            })
            gsap.to("#process", {
                scrollTrigger: {
                    trigger: "#process",
                    start: "top top",
                    end: "+=2500",
                    pin: true,
                    markers: false,
                    scrub: true
                },
                x: -(horizontalScroll),
                ease: "power1.inOut",
                delay: false
            })
        }
    }, [])

    useGSAP(() => {
       
        
    
    })
    return (
        <div className='process-container mx-10' id='process'>
            <div className="process-head">
                <h2 className={`text-9xl ${neueHass.className} font-medium`}>Our Approach</h2>
            </div>

            <div className="process-card--container h-full flex flex-row items-center" ref={processCard}>
                <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                    <p className={`card-id ${monda.className}`}>(01)</p>
                    <h2 className={`text-5xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                    <p className={`${neueHass.className} text-2xl`}>At "archiive," our process starts with an in-depth consultation. We focus on understanding our clients' needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                </div>
                <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                    <p className={`card-id ${monda.className}`}>(01)</p>
                    <h2 className={`text-5xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                    <p className={`${neueHass.className} text-2xl`}>At "archiive," our process starts with an in-depth consultation. We focus on understanding our clients' needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                </div>
                <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                    <p className={`card-id ${monda.className}`}>(01)</p>
                    <h2 className={`text-5xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                    <p className={`${neueHass.className} text-2xl`}>At "archiive," our process starts with an in-depth consultation. We focus on understanding our clients' needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                </div>
                <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                    <p className={`card-id ${monda.className}`}>(01)</p>
                    <h2 className={`text-5xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                    <p className={`${neueHass.className} text-2xl`}>At "archiive," our process starts with an in-depth consultation. We focus on understanding our clients' needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                </div>
            </div>
        </div>
    )
}

export default Process