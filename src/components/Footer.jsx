import Image from 'next/image'
import React from 'react'
import localFont from '@next/font/local'

import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const FreeSans = localFont({ src: "../fonts/FreeSansBold.ttf" });
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
const Helvetica = localFont({ src: "../fonts/helvetica/Helvetica-Bold.ttf" });

const Footer = () => {
  return (
    <footer className='p-10 flex flex-col justify-between'>
      <div className="footer-head flex justify-between">
        <div className={`footer-headline ${FreeSans.className}`}>
          <p>(Get in Touch)</p>
          <h2 className='lg:text-5xl text-3xl lg:w-6/12 w-full leading-tight mt-5'>Are you interested in working together and elevate your brand to the next level?</h2>
        </div>
        <div className="link-container--big lg:block hidden">
          <div className="social-nav--links">
            <p className={`${neueHass.className} opacity-60`}>Socials</p>
            <div className="links">
              <ul className='flex items-center cursor-pointer'>
                <Link href={'https://wa.me/+917666848035'}>
                  <li>
                    <span>
                      <Image
                        src="/assets/WhatsApp.svg"
                        width={30}
                        height={30}
                        alt="Instagram"
                      />
                    </span>
                  </li>
                </Link>
                <li>
                  <span>
                    <Image
                      src="/assets/Instagram.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/assets/Behance.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/assets/Dribbble.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${neueHass.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center ${Helvetica.className}`}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Works</li>
              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${neueHass.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>(123) 456-7890</span>
          </div>
        </div>
      </div>
      <div className={`footer-mail lg:mt-60 text-2xl ${FreeSans.className}`}>
        <p className='opacity-45'>Send Mail</p>
        <Link href="mailto:test@gmail.com">
          <h2 className='lg:text-5xl text-3xl underline'>info@archiive.com</h2>
        </Link>

      </div>
      <div className="footer-branding flex flex-col justify-end">
        <div className="link-container--big lg:hidden block">
          <div className="social-nav--links">
            <p className={`${neueHass.className} opacity-60`}>Socials</p>

            <div className="links">
              <ul className='flex items-center'>
                <li className='cursor-pointer'>
                  <span>
                    <Image
                      src="/assets/WhatsApp.svg"
                      width={30}
                      height={30}
                      alt="Whatsapp"
                    />
                  </span>

                </li>
                <li>
                  <span>
                    <Image
                      src="/assets/Instagram.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/assets/Behance.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <Image
                      src="/assets/Dribbble.svg"
                      width={30}
                      height={30}
                      alt="Instagram"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${neueHass.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center ${Helvetica.className}`}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Works</li>
              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${neueHass.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>(123) 456-7890</span>
          </div>
        </div>
        <h1 className={` ${neueHass.className} font-medium ml-auto mt-10`}>archiive</h1>
      </div>
    </footer>
  )
}

export default Footer