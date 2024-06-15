import localFont from '@next/font/local';
import { Monda } from 'next/font/google'

const monda = Monda({ subsets: ['latin'], weight: "400" })
import React from 'react'
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
    return (
        <div className='process-container mx-10 '>
            <div className="process-head">
                <h2 className={`text-9xl ${neueHass.className} font-medium`}>Our Approach</h2>
            </div>

            <div className="process-card--container h-full flex flex-row items-center">
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