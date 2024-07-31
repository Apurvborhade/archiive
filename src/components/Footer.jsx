import Image from 'next/image'

import Link from 'next/link'
import { FreeSans, inter } from '@/utils/font'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


const Footer = () => {
  return (
    <footer className='p-10 flex flex-col justify-between mid:h-full ' id='footer'>
      <div className="footer-head flex justify-between">
        <div className={`footer-headline ${FreeSans.className}`}>
          <p>(Get in Touch)</p>
          <h2 className='lg:text-2xl mid:text-4xl text-3xl lg:w-6/12 w-full leading-tight my-5'>Bring your vision to life with us. Lets turn your creations into timeless visual narratives.
          </h2>
        </div>
        {/* large Screen Links */}
        <div className="link-container--big lg:block hidden">
          <div className="social-nav--links">
            <p className={`${inter.className} opacity-60`}>Socials</p>
            <div className="links">
              <ul className='flex items-center cursor-pointer'>
                <li>
                  <Link href={'https://www.facebook.com/profile.php?id=61563454502057'} target='_blank'>
                    <span>
                      <Image
                        src="/assets/FaceBook.svg"
                        width={30}
                        height={30}
                        alt="Facebook"
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={'https://instagram.com/archiive_visuals'} target='_blank'>
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
                  <Link href={'https://www.behance.net/archiive_visuals'} target='_blank'>
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
                  <Link href={'https://www.linkedin.com/company/archiive-visuals/'} target='_blank'>
                    <span>
                      <Image
                        src="/assets/linkedin.svg"
                        width={22}
                        height={22}
                        alt="LinkedIn"
                      />
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${inter.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center font-medium ${inter.className}`}>
                <li className='underline-right'>
                  <Link href={'/'}>
                    Home
                  </Link>
                </li>
                <li className='underline-right'>
                  <Link href={'/contact'}>
                    Contact
                  </Link>
                </li>
                <li className='underline-right'>
                  <Link href={'/#about'}>
                    About
                  </Link>
                </li>
                <li className='underline-right'>
                  <Link href={'/works'}>
                    Works
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${inter.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>+91 8432360136</span> <br />
            <span className={`${inter.className} font-semibold`}>+91 9922285031</span>
          </div>
        </div>
      </div>
      {/* Mail */}
      <div className={`footer-mail lg:mt-36 text-1xl mid:text-2xl lg:mb-0 mb-10 ${FreeSans.className}`}>
        <p className='opacity-45'>Send Mail</p>
        <Link href="mailto:test@gmail.com">
          <h2 className='lg:text-3xl mid:text-5xl text-3xl underline'>info@archiive.co</h2>
        </Link>

      </div>
      <div className="footer-branding flex flex-col justify-end">
        {/* Mobile Link */}
        <div className="link-container--big lg:hidden block">
          <div className="social-nav--links">
            <p className={`${inter.className} opacity-60`}>Socials</p>

            <div className="links">
              <ul className='flex items-center'>
                <li>
                  <Link href={'https://www.facebook.com/profile.php?id=61563454502057&sk=about'} target='_blank'>
                    <span>
                      <Image
                        src="/assets/FaceBook.svg"
                        width={30}
                        height={30}
                        alt="Facebook"
                      />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={'https://instagram.com/archiive_visuals'} target='_blank'>
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
                  <Link href={'https://www.behance.net/archiive_visuals'} target='_blank'>
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
                  <Link href={'https://www.linkedin.com/company/archiive-visuals/'} target='_blank'>
                    <span>
                      <Image
                        src="/assets/linkedin.svg"
                        width={22}
                        height={22}
                        alt="LinkedIn"
                      />
                    </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="page-nav--links my-4">
            <p className={` ${inter.className} opacity-60`}>Menu</p>
            <div className="links">
              <ul className={`flex items-center font-medium ${inter.className}`}>
                <li>
                  <Link href={'/'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={'/#about'}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={'/works'}>
                    Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-phn">
            <p className={`${inter.className} opacity-60`}>Phone</p>
            <span className={`${inter.className} font-semibold`}>+91 8432360136</span> <br />
            <span className={`${inter.className} font-semibold`}>+91 9922285031</span>
          </div>
        </div>
        <h1 className={`lg:text-9xl xs:text-5xl ${FreeSans.className} font-medium ml-auto text-4xl mt-10 `}>archiive</h1>
      </div>
    </footer>
  )
}

export default Footer