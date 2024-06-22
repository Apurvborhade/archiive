import Image from 'next/image'
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { HelveticaReg, Helvetica_Now } from '@/utils/font';



const Header = ({ navColor }) => {
  const [navbarColor, setNavbarColor] = useState(navColor);

  // useEffect(() => {
  //   if (isHome === false) {
  //     setNavbarColor('#FFFDEB'); // Change to your desired color
  //   }
  // },[])
  const handleScroll = () => {
    if (window.scrollY > 950) {
      setNavbarColor('#FFFDEB'); // Change to your desired color
    } else {
      setNavbarColor(navColor);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: navbarColor }} className={`header-container fixed top-0 w-screen ${Helvetica_Now.className}`}>
      <div className='header w-full flex justify-between items-center p-4 lg:px-10 lg:py-4'>
        <Link className="brand-logo" href={"/"}>
          <Image
            src="/assets/archiive.svg"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </Link>
        <div className={`menu-link--container ${Helvetica_Now.className} text-sm uppercase ml-auto mr-44 lg:block hidden`}>
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
          <button className='contact-cta border border-black outline-none rounded-md py-2 px-5 hover:bg-black lg:block hidden hover:text-white transition-colors'>
            <p>Book A Call</p>
          </button>
          <button className={`menu-btn flex ml-10 mr-4 outline-none ${Helvetica_Now.className} lg:hidden block uppercase`}><p>Menu</p></button>
        </div>
      </div>
    </div>
  )
}

export default Header