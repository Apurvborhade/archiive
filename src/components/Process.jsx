import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { monda, neueHass } from '@/utils/font';
gsap.registerPlugin(useGSAP);


const Process = () => {
    const processCard = useRef(null);
    const processContainer = useRef(null);
    const [horizontalScroll, setHorizontalScroll] = useState(0)

    useEffect(() => {
        const processContainer = document.querySelector(".process-container");

        if (window.outerWidth > 1400) {

            gsap.to(".process-card--container", {
                x: -1700,
                scrollTrigger: {
                    trigger: processContainer,
                    start: "-=200 top",
                    end: "+=2500",
                    pin: true,
                    markers: false,
                    scrub: true,
                },
                ease: "power1.inOut",
            });
        } else if (1400 > window.outerWidth >= 1024) {
            console.log("small")
            gsap.to(".process-card--container", {
                x: -2600,
                scrollTrigger: {
                    trigger: processContainer,
                    start: "-=200 top",
                    end: "+=2500",
                    pin: true,
                    markers: true,
                    scrub: true,
                },
                ease: "power1.inOut",
            });
        }


    }, []);


    return (
        <div>

            <div className='process-container lg:mx-10 mx-5 mt-52' ref={processContainer}>
                <div className="process-head">
                    <h2 className={`lg:text-6xl text-5xl mx-3 lg:mx-0 ${neueHass.className} font-medium`}>Our Approach</h2>
                </div>

                <div className="process-card--container  flex lg:flex-row flex-col items-center" ref={processCard}>
                    <div className="process-card flex flex-col place-content-between  border border-black hover:border-transparent rounded-lg p-10">
                        <div>
                            <p className={`card-id ${monda.className}`}>(01)</p>
                            <h2 className={`lg:text-5xl text-3xl ${neueHass.className} font-medium mt-5`}>Consultation and Discovery</h2>
                        </div>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>At &quot;archiive,&quot; our process starts with an in-depth consultation. We focus on understanding our client&apos;s needs, preferences, and vision for their architectural photography projects. Through meaningful conversations, we ensure alignment between their goals and our expertise.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <div>

                            <p className={`card-id ${monda.className}`}>(02)</p>
                            <h2 className={`lg:text-5xl text-3xl mt-5 ${neueHass.className} font-medium`}>Planning and Conceptualization</h2>
                        </div>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>After the consultation, we develop a detailed plan. We analyze lighting, angles, and focal points, collaborating with clients to ensure the shoot aligns with their objectives and expectations.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <div>
                            <p className={`card-id ${monda.className}`}>(03)</p>
                            <h2 className={`lg:text-5xl text-3xl ${neueHass.className} mt-5 font-medium`}>Scheduling and Coordination</h2>
                        </div>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>We work with you to schedule the photography session at a time that ensures optimal lighting conditions and minimal disruption. This could mean early morning or late afternoon shoots for the best natural light.</p>
                    </div>
                    <div className="process-card flex flex-col place-content-between  border border-black rounded-lg p-10">
                        <div>
                            <p className={`card-id ${monda.className}`}>(04)</p>
                            <h2 className={`lg:text-5xl text-3xl mt-5 ${neueHass.className} font-medium`}>Execution and Delivery</h2>
                        </div>
                        <p className={`${neueHass.className} lg:text-2xl text-lg`}>In this phase, our photographers use advanced equipment to capture stunning images with attention to detail. We combine artistic flair and technical skill to showcase the architecture. After careful editing, we deliver the final photos in the preferred format, ensuring client satisfaction. We aim to create a compelling story with our images to engage viewers.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Process