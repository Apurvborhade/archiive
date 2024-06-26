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
const verticalGridItem = {
  gridColumn: "span 2",
  gridRow: "span 3"
}
const squareGridItem = {
  gridColumn: "span 2",
  gridRow: "span 2"
}
const Index = ({ works }) => {

  return (
    <>
      <Header />
      <div className='work-grid mt-44 m-10'>
        {works.map((work) => (
          <Link key={work.sys.id} style={work.fields.thumbnailOrientation === false ? squareGridItem : verticalGridItem} href={`/works/${work.fields.slug}`} className='work-grid-item'>
            <div className='relative w-full h-full'>
              <Image
                src={`https:${work.fields.thumbnail.fields.file.url}`}
                alt={work.fields.title}
                fill
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            <p className={`${neueHass.className} mt-2 text-left`}>{work.fields.title}</p>

          </Link>
        ))}
      </div>
    </>
  )
}

export default Index