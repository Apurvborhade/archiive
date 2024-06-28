import Image from 'next/image'
import React, { useState } from 'react';

import Link from 'next/link';
import { Helvetica_Now, neueHass } from '@/utils/font';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)


const Header = ({ navColor }) => {
  const [navbarColor, setNavbarColor] = useState(navColor);
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }




  useGSAP(() => {
    gsap.to(".header-container", {
      duration: 0.01,
      scrollTrigger: {
        trigger: ".work-head",
        start: "-=100 top",
        end: '-=100 +=100',
        markers: false,
      
        toggleActions: "play none none reverse"
      },
      backgroundColor: "#FFFDEB",
      color: "#000"
    });
    gsap.to(".header-container", {
      duration: 0.3 ,
      scrollTrigger: {
        trigger: window.innerWidth <= 768 ? "#footer" : ".pin-spacer",
        start: window.innerWidth <= 768 ? "top +=80" : "bottom +=80",
        end: 'bottom',
        markers: false,
        toggleActions: "play none none reverse"
      },
      opacity:0,
      display:"hidden"
    });
  })


  return (
    <div style={{ backgroundColor: navbarColor }} className={`header-container fixed top-0 w-screen ${Helvetica_Now.className}`}>
      <div className='header w-full flex justify-between items-center p-4 lg:px-10 lg:py-4'>
        <Link className="brand-logo" href={"/"}>
          <Image
            src="/assets/archiive.svg"
            width={30}
            height={30}
            alt="archiive"
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
              <Link href={'/works'}>
                Works
              </Link>
            </li>
            <li className="nav-link underline-right py-3">
              <Link href={'/#about'}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-cta flex items-center">
          <Link href={'/contact'}>
            <button className='contact-cta border border-black outline-none rounded-md py-2 px-5 hover:bg-black lg:block hidden hover:text-white transition-colors'>
              <p>Send A Message</p>
            </button>
          </Link>
          <button className={`menu-btn flex ml-10 mr-4 outline-none ${Helvetica_Now.className} lg:hidden block uppercase`} onClick={openMenu}><p>Menu</p></button>
        </div>
      </div>

      <div className={`menu-overlay cursor-pointer ${menuOpen ? 'block opacity-100' : ' hidden opacity-0'}`} onClick={closeMenu}></div>
      <div className={`mobile-menu flex flex-col ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div>
          <div className="mobile-menu--header flex justify-end ">
            <button className="close-btn m-5 p-1 border rounded-full cursor-pointer" onClick={closeMenu}>
              <Image
                src={"/assets/Close_round.svg"}
                width={25}
                height={25}
                alt='close-btn'
              />
            </button>
          </div>
          <div className="mobile-menu--links text-white m-10 flex flex-col justify-between">
            <ul className={`uppercase ${neueHass.className} font-medium text-5xl h-2/6 flex flex-col justify-between `} onClick={closeMenu}>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/#about'}>About</Link>
              </li>
              <li>
                <Link href={'/works'}>Works</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-nav--links flex mx-10 mt-auto mb-16 items-center">

          <div className="links w-full ">
            <ul className='flex items-center w-3/5 bz justify-around' >
              <li className='cursor-pointer'>
                <Link href={'https:/wa.me/+917666848035'}>
                  <span>
                    <Image
                      src="/assets/WhatsApp.svg"
                      width={30}
                      height={30}
                      alt="Whatsapp"
                      className='invert'
                    />
                  </span>

                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <span>
                    <Image
                      src="/assets/Instagram.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                      className='invert'
                    />
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <span>
                    <Image
                      src="/assets/Behance.svg"
                      width={30}
                      height={30}
                      alt="Behance"
                      className='invert'
                    />
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <span>
                    <Image
                      src="/assets/Dribbble.svg"
                      width={30}
                      height={30}
                      alt="Dribble"
                      className='invert'
                    />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Header