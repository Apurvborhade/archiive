import { FreeSans, Helvetica_Bold, neueHass } from '@/utils/font'
import React from 'react'

const Landing = () => {
  return (

    <div className="landing-container h-full flex flex-col w-full place-content-between p-4 lg:p-10">
      <div className="brand-info flex justify-end">
        <h2 className={`${Helvetica_Bold.className} lg:w-3/6 text-4xl lg:text-5xl lg:mt-32 mt-44`}>We are a creative studio crafting unique visual content to empower people and brands.</h2>
      </div>
      <div className={`branding ${FreeSans.className}`}>
        <div className="tagline-anim">
          <h1 className={`text-8xl lg:text-9xl ${neueHass.className} font-medium`}>archiive</h1>
          <div className="text-anim flex items-center text-lg lg:text-3xl">
            <h2 className=''>We are here to archiive</h2>
            <div className="dash w-24 bg-black border border-black mx-5"></div>
            <div className='text-slide h-6 lg:h-10 w-auto lg:w-auto overflow-hidden'>
              <div className='text-transform'>
                <h2>Architecture</h2>
                <h2>Landscape</h2>
                <h2>Nature</h2>
                <h2>Architecture</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Landing