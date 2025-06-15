// components/ImageWithPlaceholder.js
import React, { useState } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';


const ImageWithPlaceholder = ({ src ,alt,objectfit,...props }) => {
    const [loading, setLoading] = useState(true);

    return (
        <div className='flex justify-center items-center h-full relative'>
            {loading && <Spinner />}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoading(false)}
                style={{
                    objectFit: objectfit,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "block"
                }}
                loading="lazy"
                decoding="async"
                {...props}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
