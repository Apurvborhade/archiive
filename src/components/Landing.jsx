import { FreeSans, Helvetica_Bold, neueHass } from '@/utils/font'
import React from 'react'

const Landing = () => {
  return (

    <div className="landing-container h-full flex flex-col w-full place-content-between p-4 lg:p-10">
      <div className="brand-info flex justify-end">
        <h2 className={`${Helvetica_Bold.className} lg:w-3/6 text-4xl lg:text-4xl lg:mt-32 mt-44`}>We craft unique and engaging visual content in our creative photography studio to tell your stories.
</h2>
      </div>
      <div className={`branding ${neueHass.className}`}>
        <div className="tagline-anim">
          <h1 className={`text-8xl lg:text-9xl ${neueHass.className} font-medium`}>archiive</h1>
          <div className="text-anim flex items-center text-lg lg:text-3xl">
            <h2 className='inline leading-5  font-medium'>We are here to archiive</h2>
            <div className="dash lg:w-24 w-10 bg-black border border-black mx-5"></div>
            <div className='text-slide h-6 lg:h-10 w-auto lg:w-auto overflow-hidden'>
              <div className='text-transform font-medium'>
                <h2>Architecture</h2>
                <h2>Lifestyle</h2>
                <h2>Culture</h2>
                <h2>People</h2>
                <h2>Landscape</h2>
                <h2>Spaces</h2>
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