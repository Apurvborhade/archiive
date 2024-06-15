import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import localFont from "@next/font/local"

const neueMontreal = localFont({src:"../fonts/Neue Montreal Regular 400.otf"})
const Header = () => {
  const [navbarColor, setNavbarColor] = useState('#FFD951');

  const handleScroll = () => {
    if (window.scrollY > 950) {
      setNavbarColor('#FFFDEB'); // Change to your desired color
    } else {
      setNavbarColor('#FFD951');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: navbarColor }} className={`header-container fixed w-full ${neueMontreal.className}`}>
      <div className='header w-full flex justify-between items-center p-4 lg:px-10 lg:py-4'>
        <div className="brand-logo">
          <Image 
            src="/assets/archiive.svg"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </div>
        <div className="header-cta flex items-center">
          <button className='menu-btn flex mx-10 outline-none'><p>Menu</p></button>
          <button className='contact-cta border border-black outline-none rounded-md py-2 px-5 hover:bg-black hover:text-white transition-colors'>
            <p>Book A Call</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header