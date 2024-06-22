import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { FreeSans, Helvetica_Bold, inter, neueHass } from '@/utils/font'




const Footer = () => {
  return (
    <footer className='p-10 flex flex-col justify-between' id='contact'>
      <div className="footer-head flex justify-between">
        <div className={`footer-headline ${FreeSans.className}`}>
          <p>(Get in Touch)</p>
          <h2 className='lg:text-5xl text-3xl lg:w-6/12 w-full leading-tight my-5'>Are you interested in working together and elevate your brand to the next level?</h2>
        </div>
        <div className="link-container--big lg:block hidden">
          <div className="social-nav--links">
            <p className={`${neueHass.className} opacity-60`}>Socials</p>
            <div className="links">
              <ul className='flex items-center cursor-pointer'>
                <li>
                  <Link href={'https://wa.me/+917666848035'}>
                    <span>
                      <Image
                        src="/assets/WhatsApp.svg"
                        width={30}
                        height={30}
                        alt="Instagram"
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
                        alt="Instagram"
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
                        alt="Instagram"
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${neueHass.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center ${Helvetica_Bold.className}`}>
                <li>
                  <Link href={'/'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={'https://wa.me/+917666848035'}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={'#about'}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={'#works'}>
                    Works
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${neueHass.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>(123) 456-7890</span>
          </div>
        </div>
      </div>
      <div className={`footer-mail lg:mt-60 text-2xl lg:mb-0 mb-10 ${FreeSans.className}`}>
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
                  <Link href={'/https://wa.me/+917666848035'}>
                    <span>
                      <Image
                        src="/assets/WhatsApp.svg"
                        width={30}
                        height={30}
                        alt="Whatsapp"
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
                      />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${neueHass.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center ${Helvetica_Bold.className}`}>
                <li>
                  <Link href={'/'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={'https://wa.me/+917666848035'}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={'#about'}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={'#work'}>
                    Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${neueHass.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>(123) 456-7890</span>
          </div>
        </div>
        <h1 className={` ${neueHass.className} font-medium ml-auto mt-10 `}>archiive</h1>
      </div>
    </footer>
  )
}

export default Footer