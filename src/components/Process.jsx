import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { monda, neueHass } from '@/utils/font';
gsap.registerPlugin(useGSAP);


const Process = () => {
    const processCard = useRef(null);
    const processContainer = useRef(null);
    let horizontalScroll = 0;

    useEffect(() => {
        if (processCard.current && window.innerWidth > 1300) {
            const processCards = Array.from(processCard.current.childNodes)
            processCards.slice(0, processCards.length - 2).forEach((card) => {
                horizontalScroll += card.offsetWidth;
            })
            gsap.to(".process-card--container", {
                x: -(horizontalScroll),
                scrollTrigger: {
                    trigger: document.querySelector(".process-container"),
                    start: "-=100 top",
                    end: "+=2500",
                    pin: true,
                    markers: false,
                    scrub: true
                },
                ease: "power1.inOut",
            })
        }
    }, [])


    return (
        <div>

            <div className='process-container lg:mx-10 mx-5 mt-10' ref={processContainer}>
                <div className="process-head">
                    <h2 className={`lg:text-9xl text-5xl mx-3 lg:mx-0 ${neueHass.className} font-medium`}>Our Approach</h2>
                </div>

                <div className="process-card--container h-full flex lg:flex-row flex-col items-center" ref={processCard}>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <p className={`card-id ${monda.className}`}>(01)</p>
                        <h2 className={`lg:text-5xl text-3xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>At &quot;archiive,&quot; our process starts with an in-depth consultation. We focus on understanding our client&apos;s needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <p className={`card-id ${monda.className}`}>(01)</p>
                        <h2 className={`lg:text-5xl text-3xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>At &quot;archiive,&quot; our process starts with an in-depth consultation. We focus on understanding our clients&apos; needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <p className={`card-id ${monda.className}`}>(01)</p>
                        <h2 className={`lg:text-5xl text-3xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>At &quot;archiive,&quot; our process starts with an in-depth consultation. We focus on understanding our clients&apos; needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <p className={`card-id ${monda.className}`}>(01)</p>
                        <h2 className={`lg:text-5xl text-3xl ${neueHass.className} font-medium`}>Consultation and Discovery</h2>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>At &quot;archiive,&quot; our process starts with an in-depth consultation. We focus on understanding our clients&apos; needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Process