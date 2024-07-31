import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import ImageWithPlaceholder from '@/components/ImageWithPlaceholder';
import { inter } from '@/utils/font';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { createClient } from 'contentful';
import gsap, { Linear } from 'gsap';
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef, useState, useCallback } from 'react';
import screenfull from 'screenfull';
import SwipeOutlinedIcon from '@mui/icons-material/SwipeOutlined';
import useScrollToTop from '@/hooks/useScrollToTop';

gsap.registerPlugin(Draggable);

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
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
    useScrollToTop();
    const fullscreenBtn = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const wrapperRef = useRef(null);
    const proxyRef = useRef(null);
    const animationRef = useRef(null);

    const handleFullscreenChange = useCallback(() => {
        setIsFullScreen(screenfull.isFullscreen);
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (screenfull.isEnabled) {
            screenfull.toggle().catch((err) => {
                console.log("Error toggling fullscreen:", err);
            });
        }
    }, []);

    const [boxWidth, setBoxWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);

    useEffect(() => {
        const boxes = document.querySelectorAll(".carousel-item");
        const rightBtn = document.querySelector(".carousel-slider--right");
        const leftBtn = document.querySelector(".carousel-slider--left");

        let wrapWidth;

        const setupCarousel = () => {
            wrapWidth = boxes.length * boxWidth;

            boxes.forEach((box, i) => {
                gsap.set(box, { x: i * boxWidth, left: -boxWidth });
            });

            const wrapper = wrapperRef.current;
            const wrapProgress = gsap.utils.wrap(0, 1);
            const snapBox = gsap.utils.snap(boxWidth);
            const proxy = document.createElement("div");
            proxyRef.current = proxy;
            const props = gsap.getProperty(proxy);

            gsap.set(proxyRef.current, { x: boxWidth });

            animationRef.current = gsap.to(".carousel-item", {
                duration: 1,
                x: `+=${wrapWidth}`,
                ease: Linear.easeNone,
                paused: true,
                repeat: -1,
                modifiers: {
                    x: (x) => {
                        x = parseFloat(x) % wrapWidth;
                        return `${x}px`;
                    },
                },
            }).progress(1 / boxes.length);

            let isHorizontalGesture = false;
            Draggable.create(proxy, {
                type: "x",
                trigger: wrapper,
                throwProps: true,
                onPress() {
                    this.startX = this.pointerX;
                    this.startY = this.pointerY;
                    isHorizontalGesture = false;
                },
                onDrag() {
                    const deltaX = Math.abs(this.startX - this.pointerX);
                    if (deltaX > 20) {
                        isHorizontalGesture = true;
                        updateProgress();
                    }
                },
                onThrowUpdate: updateProgress,
                snap: { x: snapBox },
                inertia: true,
                cursor: 'ew-resize',
                onDragEnd() {
                    if (isHorizontalGesture) {
                        const deltaX = Math.abs(this.startX - this.pointerX);
                        if (deltaX > 20) {
                            snapToBox(this.getDirection("velocity"));
                        }
                    }
                },
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
        };

        const animateCarousel = (direction) => {
            gsap.to(proxyRef.current, {
                duration: 0.8,
                x: gsap.utils.snap(boxWidth)(gsap.getProperty(proxyRef.current, "x") + direction * boxWidth),
                onUpdate: updateProgress,
            });
        };

        const updateProgress = () => {
            animationRef.current.progress(gsap.utils.wrap(0, 1)(gsap.getProperty(proxyRef.current, "x") / wrapWidth));
        };

        const snapToBox = (directionX) => {
            const direction = directionX === "left" ? -1 : 1;
            gsap.to(proxyRef.current, {
                duration: 0.8,
                x: gsap.utils.snap(boxWidth)(gsap.getProperty(proxyRef.current, "x") + direction * boxWidth),
                onUpdate: updateProgress,
            });
        };

        const handleResize = () => {
            setBoxWidth(window.innerWidth);
        };

        setupCarousel();

        if (screenfull.isEnabled) {
            screenfull.on('change', handleFullscreenChange);
        }

        window.addEventListener('resize', handleResize);
        const handleKeydown = (event) => {
            if (event.key === 'F11' || event.code === 'F11' || event.which === 122) {
                event.preventDefault(); // Prevent the default F11 action (browser fullscreen)
                toggleFullscreen();
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => {
            if (screenfull.isEnabled) {
                screenfull.off('change', handleFullscreenChange);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [boxWidth, handleFullscreenChange, toggleFullscreen]);




    if (!work) {
        return <div>Loading...</div>;
    }

    const formatDate = (date) => {
        const year = date.split("-")[0];
        return `${year}`;
    };

    return (
        <div className='work-detail'>
            <Header navColor={"#FFFDEB"} />
            <CustomCursor />
            <div className='work-details '>
                <div className="wrapper-container mid:mt-24 mt-20 lg:mx-10 mx-3">
                    <div className="carousel-container " id="wrapper" ref={wrapperRef}>
                        <div className="carousel-items">
                            <div className='carousel-slider---overlay flex bg-black w-full h-full opacity-0 z-50 absolute xs:hidden'>
                                <div className='carousel-slider--left hover-target  w-6/12'></div>
                                <div className='carousel-slider--right hover-target  w-6/12'></div>
                            </div>
                            <div className="carousel-item h-full thumbnail flex xs:flex-col gap-5 items-start">
                                <div className='relative image-container w-9/12 xs:w-full h-full'>
                                    <ImageWithPlaceholder
                                        src={`https:${work.fields.thumbnail.fields.file.url}`}
                                        alt={work.fields.title}
                                        objectfit={work.fields.thumbnailOrientation ? 'none' : 'cover'}
                                    />
                                </div>
                                <div className={`work-description overflow-scroll w-3/12 xs:w-full   ${inter.className}`}>
                                    <div className='work-title 2xl:text-4xl text-2xl'>
                                        <h1>{work.fields.title}</h1>
                                    </div>
                                    <div className='work-date text-md opacity-75 my-5'>
                                        <h1>{formatDate(work.fields.date)}</h1>
                                    </div>
                                    <div className='work-info lg:text-sm xl:text-sm  xs:text-xs '>
                                        <h1>{work.fields.description}</h1>
                                    </div>
                                </div>
                            </div>
                            {work.fields.media && work.fields.media.map((item) => (
                                <div className="carousel-item non-thumb" key={item.sys.id}>
                                    <ImageWithPlaceholder
                                        src={`https:${item.fields.file.url}`}
                                        alt={item.fields.title}
                                        objectfit={'contain'}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='drag-indicator absolute right-0 -bottom-16  border border-black rounded-full w-20 h-12 justify-center items-center xs:flex hidden'>
                        <p className='text-sm'>Drag</p> <SwipeOutlinedIcon fontSize='small' className='ml-1' />
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
            <div className='pin-spacer'></div>
        </div>
    );
};

export default WorkDetails;
