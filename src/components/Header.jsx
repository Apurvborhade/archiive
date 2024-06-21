import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import localFont from "@next/font/local"
import Link from 'next/link';
const HelveticaReg = localFont({ src: "../fonts/HelveticaNowDisplay-Regular.ttf" });
const neueMontreal = localFont({ src: "../fonts/Neue Montreal Regular 400.otf" })

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


const Header = ({ isHome }) => {
  const [navbarColor, setNavbarColor] = useState('#FFD951');

  useEffect(() => {
    if (isHome === false) {
      setNavbarColor('#FFFDEB'); // Change to your desired color
    }
  })
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
    <div style={{ backgroundColor: navbarColor }} className={`header-container fixed top-0 w-full ${HelveticaReg.className}`}>
      <div className='header w-full flex justify-between items-center p-4 lg:px-10 lg:py-4'>
        <Link className="brand-logo" href={"/"}>
          <Image
            src="/assets/archiive.svg"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </Link>
        <div className={`menu-link--container ${HelveticaReg.className} text-sm uppercase ml-auto mr-44 lg:block hidden`}>
          <ul className=' flex justify-center items-center'>
            <li className="nav-link underline-right py-3">
              <Link href={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-link mx-10 underline-right py-3">
              <Link href={'#work'}>
                Works
              </Link>
            </li>
            <li className="nav-link underline-right py-3">
              <Link href={'#about'}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-cta flex items-center">
          <button className='contact-cta border border-black outline-none rounded-md py-2 px-5 hover:bg-black hover:text-white transition-colors'>
            <p>Book A Call</p>
          </button>
          <button className={`menu-btn flex ml-10 mr-4 outline-none ${HelveticaReg.className} lg:hidden block uppercase`}><p>Menu</p></button>
        </div>
      </div>
    </div>
  )
}

export default Header