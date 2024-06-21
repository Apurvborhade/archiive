import Image from 'next/image'
import React from 'react'

const ImageViewModel = ({ isOpen, imageSrc, onClose, imageTitle }) => {
    if (!isOpen) return null;
    return (
        <div className={`w-screen h-screen fixed top-0 left-0 flex justify-center items-center image-model  ${isOpen ? 'block' : 'hidden'}`}>
            <div className="image-model--overlay w-full  h-full bg-black absolute top-0 left-0 opacity-90">
                <p className='text-white z-50 absolute top-0 right-0 p-8 cursor-pointer' onClick={onClose}><Image className='opacity-100 z-50' src={"/assets/Close_round.svg"} width={25} height={15} alt='right-arrow'></Image></p>
            </div>
            <div className='m-10 lg:w-7/12 w-11/12 h-5/6 relative pointer-events-none'>

                <Image
                    src={imageSrc}
                    alt={imageTitle}
                    fill
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                    }}
                    className='z-50 pointer-events-auto'
                />
            </div>
        </div>
    )
}

export default ImageViewModel