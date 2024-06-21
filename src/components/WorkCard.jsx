import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkCard = ({ work }) => {
    const { title, slug } = work.fields
    return (
        <Link className="work-item relative text-xl" href={`/works/${slug}`}>
            <div className='relative w-full h-full'>
                <Image
                    src={`https:${work.fields.thumbnail.fields.file.url}`}
                    alt={title}
                    fill
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <p className=''>{title}</p>
        </Link>
    )
}

export default WorkCard
