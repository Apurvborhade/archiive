import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';

import { neueHass } from '@/utils/font';
import { createClient } from 'contentful';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import screenfull from 'screenfull';
import { Draggable } from "gsap/Draggable";
import { Linear } from 'gsap';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';


gsap.registerPlugin(Draggable);

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
    const fullscreenBtn = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false)
    const handleFullscreenChange = () => {
        screenfull.isFullscreen ? setIsFullScreen(true) : setIsFullScreen(false)
    };

    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle()
        }
    };
    const handleKeydown = (event) => {
        if (event.key === 'F11') {
            event.preventDefault(); // Prevent the default F11 action (browser fullscreen)

            toggleFullscreen();
        }
    };
    if (screenfull.isEnabled) {
        screenfull.on('change', handleFullscreenChange);
    }

    useEffect(() => {
        var wrapper = document.querySelector(".carousel-container");
        var boxes = document.querySelectorAll(".carousel-item");
        var rightBtn = document.querySelector(".carousel-slider--right");
        var leftBtn = document.querySelector(".carousel-slider--left");

        function setupCarousel() {
            var boxWidth = window.innerWidth;
            var wrapWidth = boxes.length * boxWidth;

            for (var i = 0; i < boxes.length; i++) {
                let box = boxes[i];
                gsap.set(box, { x: i * boxWidth, left: -(boxWidth) });
            }

            var wrapProgress = gsap.utils.wrap(0, 1);
            var snapBox = gsap.utils.snap(boxWidth);
            var clickAnimation = gsap.set({}, {});
            var proxy = document.createElement("div");
            var props = gsap.getProperty(proxy);
            gsap.set(proxy, { x: window.innerWidth });
            var animation = gsap.to(".carousel-item", {
                duration: 1,
                x: "+=" + wrapWidth,
                ease: Linear.easeNone,
                paused: true,
                repeat: -1,
                modifiers: {
                    x: function (x, target) {
                        x = parseFloat(x) % wrapWidth;
                        return x + "px";
                    }
                }
            }).progress(1 / boxes.length);
            let isHorizontalGesture = false;
            Draggable.create(proxy, {
                type: "x",
                trigger: wrapper,
                throwProps: true,
                onPress: function () {
                    this.startX = this.pointerX;
                    this.startY = this.pointerY;
                    isHorizontalGesture = false;
                },
                onDrag: function () {

                    const deltaX = Math.abs(this.startX - this.pointerX);

                    if (deltaX > 20) {
                        updateProgress();
                    }

                },
                onThrowUpdate: updateProgress,
                snap: { x: snapBox },
                inertia: true,
                cursor: 'ew-resize',
                onDragEnd: function () {
                    const deltaX = Math.abs(this.startX - this.pointerX)

                    if (deltaX > 20) {
                        snapToBox(this.getDirection("velocity"))
                    }
                }
            });

            window.addEventListener('keydown', (e) => {
                switch (e.code) {
                    case "ArrowLeft":
                        animateCarousel(1);
                        break;
                    case "ArrowRight":
                        animateCarousel(-1);
                        break;
                    default:
                        break;
                }
            });
            rightBtn.addEventListener('click', () => animateCarousel(-1));
            leftBtn.addEventListener('click', () => animateCarousel(1));

            function updateProgress() {
                animation.progress(wrapProgress(props("x") / wrapWidth));
            }

            function animateCarousel(direction) {
                clickAnimation.kill();
                clickAnimation = gsap.to(proxy, {
                    duration: 0.8,
                    x: snapBox(props("x") + direction * boxWidth),
                    onUpdate: updateProgress
                });
            }

            function snapToBox(directionX) {
                const direction = directionX === "left" ? -1 : 1;
                gsap.to(proxy, {
                    duration: 0.8,
                    x: snapBox(props("x") + direction * boxWidth),
                    onUpdate: updateProgress
                });
            }
        }

        setupCarousel();

        window.addEventListener('resize', setupCarousel);
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('resize', setupCarousel);
            window.removeEventListener('keydown', handleKeydown);
        };

    }, []);

    if (!work) {
        return <div>Loading...</div>;
    }

    
    



   



    const formatDate = (date) => {
        const year = date.split("-")[0]
        return `${year}`
    }
    return (
        <div className='work-detail'>
            <Header navColor={"#FFFDEB"} />
            <CustomCursor />
            <div className='work-details '>
                <div className="wrapper-container mid:mt-24 mt-20 lg:mx-10 mx-3">
                    <div className="carousel-container " id="wrapper">
                        <div className="carousel-items">
                            <div className='carousel-slider---overlay flex bg-black w-full h-full opacity-0 z-50 absolute xs:hidden hidden'>
                                <div className='carousel-slider--left hover-target  w-6/12'></div>
                                <div className='carousel-slider--right hover-target  w-6/12'></div>
                            </div>
                            <div className="carousel-item thumbnail flex xs:flex-col gap-5 items-start">
                                <div className='relative image-container w-9/12 xs:w-full h-full'>
                                    <ImageWithPlaceholder
                                        src={`https:${work.fields.thumbnail.fields.file.url}`}
                                        alt={work.fields.title}
                                        objectfit={work.fields.thumbnailOrientation ? 'none' : 'cover'}
                                    />
                                </div>
                                <div className={`work-description overflow-scroll w-3/12 xs:w-full  ${neueHass.className}`}>
                                    <div className='work-title 2xl:text-4xl text-2xl'>
                                        <h1>{work.fields.title}</h1>
                                    </div>
                                    <div className='work-date text-md opacity-75 my-5'>
                                        <h1>{formatDate(work.fields.date)}</h1>
                                    </div>
                                    <div className='work-info lg:text-sm xl:text-sm  '>
                                        <h1>{work.fields.description}</h1>
                                    </div>
                                </div>
                            </div>
                            {work.fields.media && work.fields.media.map((item) => (
                                <div className="carousel-item" key={item.sys.id}>
                                    <ImageWithPlaceholder
                                        src={`https:${item.fields.file.url}`}
                                        alt={item.fields.title}
                                        objectfit={'contain'}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='drag-indicator hidden xs:flex absolute right-5 bottom-0 border border-black rounded-full w-10 h-10 flex justify-center items-center'>
                        <Image className='' src={"/assets/right arrow.svg"} width={15} height={15} alt='right-arrow'></Image>
                    </div>
                    <button className='fullscreen-btn absolute bottom-0 right-0 outline-none lg:block hidden' ref={fullscreenBtn} onClick={toggleFullscreen}>
                        {isFullScreen ? (
                            <FullscreenExitIcon />
                        ) : (
                            <FullscreenIcon />
                        )}
                    </button>
                </div>
            </div>
            |<div className='pin-spacer'></div>
        </div>
    );
};

export default WorkDetails;