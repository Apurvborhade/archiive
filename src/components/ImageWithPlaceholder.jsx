// components/ImageWithPlaceholder.js
import React, { useState } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';


const ImageWithPlaceholder = ({ src ,alt,objectfit,...props }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className='flex justify-center items-center h-full'>
            {loading && <Spinner />}
            <Image
                src={src}
                alt={alt}
                fill
                onLoadingComplete={() => {
                    setLoading(false)
                }}
                quality={100}
                style={{
                    objectFit: objectfit,
                }}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
