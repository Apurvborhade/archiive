import Header from '@/components/Header';
import { HelveticaReg, neueHass } from '@/utils/font';
import { createClient } from 'contentful';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'work', limit: 6 })
  return {
    props: {
      works: res.items,
    },
  }
}

const Index = ({ works }) => {

  return (
    <>
      <Header />
      <div className='work-grid grid mid:grid-cols-3 lg:grid-cols-3 mt-44  m-10 mid:gap-x-64 lg:gap-x-36 lg:gap-y-32 sm:grid-cols-2 lg:mx-20 gap-20 xs:gap-24'>
        {works.map((work) => (
          <Link key={work.sys.id} href={`/works/${work.fields.slug}`} className='work-grid-item'>
            <div className='relative w-full h-full'>
              <Image
                src={`https:${work.fields.thumbnail.fields.file.url}`}
                alt={work.fields.title}
                fill
                style={{
                  objectFit:'cover'
                }}
              />
            </div>
            <p className={`${neueHass.className} mt-2 text-left mid:text-sm text-xs`}>{work.fields.title}</p>

          </Link>
        ))}
      </div>
      <div className='pin-spacer'></div>
    </>
  )
}

export default Index