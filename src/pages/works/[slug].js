import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import ImageViewModel from '@/components/ImageViewModel';
import { neueHass } from '@/utils/font';
import { createClient } from 'contentful';
import Image from 'next/image';
import React, { useState } from 'react';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'work',
    });

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug },
        };
    });

    return {
        paths,
        fallback: true, // true allows for ISR
    };
};

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'work',
        'fields.slug': params.slug,
    });

    if (!items.length) {
        return {
            notFound: true,
        };
    }

    return {
        props: { work: items[0] || null },
    };
}

const WorkDetails = ({ work }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageTitle, setSelectedImageTitle] = useState('');

    if (!work) {
        return <div>Loading...</div>;
    }

    const { title, media, thumbnail } = work.fields;

    const openModal = (imageSrc, imageTitle) => {
        setSelectedImage(imageSrc);
        setSelectedImageTitle(imageTitle);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
        setSelectedImageTitle('');
    };

    return (
        <div className='work-detail'>
            <CustomCursor />
            <Header navColor={"#FFFDEB"} />
            <div className='work-det--container my-24 mx-6 mt-32'>
                <div className='work-header'>
                    <h1 className={`text-black ${neueHass.className} font-medium lg:text-8xl text-5xl`}>{title}</h1>
                </div>
                <div className='work-det--thumbnail relative mt-20'>
                    {thumbnail && (
                        <>
                            <div
                                className='work-det--thumbnail-overlay absolute hover-target w-full h-full bg-black z-10 opacity-0 hover:opacity-45 transition-opacity duration-700 cursor-pointer'
                                onClick={() => openModal(`https:${thumbnail.fields.file.url}`, title)}
                            ></div>
                            <Image
                                src={`https:${thumbnail.fields.file.url}`}
                                alt={title}
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />
                        </>
                    )}
                    <ImageViewModel
                        isOpen={isOpen}
                        imageSrc={selectedImage}
                        onClose={closeModal}
                        imageTitle={selectedImageTitle}
                    />
                </div>

                <div className={`work-description flex ${neueHass.className}`}>
                    <div className='mx-auto lg:ml-auto lg:w-4/12 w-12/12 lg:m-24 my-10'>
                        <div>
                            <p>
                                Nestled in the heart of a bustling metropolis, &quot;La Belle Étoile&quot; stands as a beacon of refined elegance and culinary excellence. From the moment you enter its door, you are transported into a world where timeless sophistication and modern gastronomy converge.
                                <br /><br />
                                A team of chefs crafts each dish with precision and artistry, infusing classic French techniques with innovative flavors. The menu is a symphony of seasonal ingredients, where every plate is a work of culinary art. Whether it&apos;s an intimate dinner for two or a grand celebration, &quot;La Belle Étoile&quot; promises a dining experience that transcends the ordinary and leaves an indelible mark on the soul.
                            </p>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <p className='opacity-70 uppercase'>Date</p>
                            <p>September, 2024</p>
                        </div>
                    </div>
                </div>
                {media && (
                    <div className='work-media grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-10'>
                        {media.map(image => (
                            <div className='media-container relative w-full' key={image.sys.id}>
                                <div
                                    className='work-det--thumbnail-overlay absolute w-full h-full hover-target bg-black z-10 opacity-0 hover:opacity-45 transition-opacity duration-700 cursor-pointer'
                                    onClick={() => openModal(`https:${image.fields.file.url}`, image.fields.title)}
                                ></div>
                                <Image
                                    src={`https:${image.fields.file.url}`}
                                    alt={image.fields.title}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkDetails;