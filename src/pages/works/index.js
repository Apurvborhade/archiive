import Header from '@/components/Header';
import { inter } from '@/utils/font';
import { createClient } from 'contentful';
import Link from 'next/link';
import React from 'react'
import { ReactLenis } from 'lenis/react'
import useScrollToTop from '@/hooks/useScrollToTop';

const optimizedImgStyle = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'work' })
  return {
    props: {
      works: res.items,
    },
  }
}

const Index = ({ works }) => {
  useScrollToTop(); 
  return (
    <ReactLenis root options={{ duration: 2 }}>
      <Header />
      <div className='work-grid grid mid:grid-cols-3 lg:grid-cols-3 mt-44  m-10 mid:gap-x-64 lg:gap-x-36 lg:gap-y-32 sm:grid-cols-2 lg:mx-20 gap-20 xs:gap-24'>
        {works.map((work) => (
          <Link key={work.sys.id} href={`/works/${work.fields.slug}`} className='work-grid-item'>
            <div className='relative w-full h-full'>
              <img
                src={`https:${work.fields.thumbnail.fields.file.url}`}
                alt={work.fields.title}
                width={450}
                height={300}
                loading="lazy"
                decoding="async"
                style={optimizedImgStyle}
              />
              <p className={`${inter.className} mt-2 text-left mid:text-sm text-xs `}>{work.fields.title}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className='pin-spacer'></div>
    </ReactLenis>
  )
}

export default Index