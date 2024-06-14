import Image from 'next/image'
import React from 'react'
import localFont from '@next/font/local'
import Link from 'next/link'

const Helvetica = localFont({
  src: [
    {
      path: '../fonts/helvetica/Helvetica.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../fonts/helvetica/Helvetica-Bold.ttf',
      weight: '800',
      style: 'bold'
    },
  ]
})
const Works = () => {
  return (
    <>
      <div className="work-head flex">
        <div className='ml-auto m-5'>
          <p className={`inline-block font-bold ${Helvetica.className}`}>(works)</p>
        </div>
      </div>
      <div className={`works-container p-10 ${Helvetica.className}`}>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative text-xl">
          <div className='relative w-full h-full'>
            <Image
              src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <p>Museum of Art and Photography</p>
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
        <div className="work-item relative">
          <Image
            src="https://images.unsplash.com/photo-1718030463382-896949a8d53a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
      <div className="works-btn flex">
        <div className='ml-auto mr-auto'>
          <Link href={"/"}>
            <button className={`${Helvetica.className} outline-none  text-3xl flex items-center`}>View All Works <Image className='ml-3' src={"/assets/right arrow.svg"} width={25} height={15}></Image></button>
          </Link>
        </div>
      </div>
    </>

  )
}

export default Works