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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

// Helper: get YouTube video id from url
function getYoutubeId(url) {
    // Handles: youtu.be/{{id}} , youtube.com/watch?v={{id}}, youtube.com/embed/{{id}}
    if (!url) return null;

    // Try to get the 11-character id for various possible URL scenarios,
    // including YouTube short links with query parameters.
    // e.g. https://youtu.be/9kzE8isXlQY?si=F6M9nvj10C5XuTKb
    try {
        // Remove url params and hash
        const cleanUrl = url.split('?')[0].split('#')[0];

        // Test youtu.be URL
        const youtuBe = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
        if (youtuBe) return youtuBe[1];

        // Test youtube.com/embed/ID
        const embed = cleanUrl.match(/embed\/([a-zA-Z0-9_-]{11})/);
        if (embed) return embed[1];

        // Test youtube.com/watch?v=ID
        const watch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
        if (watch) return watch[1];

        // Could handle other edge cases if needed.
    } catch (err) {
        // fall through
    }
    return null;
}

export async function getStaticProps({ params }) {
    // Fetch the work item
    const { items } = await client.getEntries({
        content_type: 'work',
        'fields.slug': params.slug,
    });

    if (!items.length) {
        return {
            notFound: true,
        };
    }

    const work = items[0];

    // Only fetch a single video link (this will be either an embedded entry or a reference)
    let videoLink = null;
    try {
        const link = work.fields.videoLink;
        if (link) {
            // Embedded entry or reference
            if (link.fields) {
                videoLink = link;
            } else if (link.sys) {
                const { items: fetchedLinks } = await client.getEntries({
                    content_type: "videoLink",
                    "sys.id": link.sys.id
                });
                if (fetchedLinks.length) videoLink = fetchedLinks[0];
            }
        }
    } catch (err) {
        // fallback: ignore video link if error
        videoLink = null;
    }

    return {
        props: { work: work || null, videoLink },
    };
}

const WorkDetails = ({ work, videoLink }) => {
    useScrollToTop();
    const fullscreenBtn = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const wrapperRef = useRef(null);
    const proxyRef = useRef(null);
    const animationRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    // Keep refs for navigating programmatically
    const animateCarouselRef = useRef(null);

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
        let slidesCountLocal = boxes.length;
        setSlidesCount(slidesCountLocal);

        // Helper to set the current slide index based on proxy.x
        const updateCurrentIndex = () => {
            if (!proxyRef.current) return;
            const x = gsap.getProperty(proxyRef.current, "x");
            let idx = Math.round(x / boxWidth);
            // The carousel allows wrap-around, so we make sure idx is always valid [0..slidesCount-1]
            idx = ((idx % slidesCountLocal) + slidesCountLocal) % slidesCountLocal;
            setCurrentIndex(idx);
        };

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
                        updateCurrentIndex();
                    }
                },
                onThrowUpdate() {
                    updateProgress();
                    updateCurrentIndex();
                },
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
                    // updateCurrentIndex(); // already called in onThrowUpdate
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
            if(rightBtn) rightBtn.addEventListener('click', () => animateCarousel(-1));
            if(leftBtn) leftBtn.addEventListener('click', () => animateCarousel(1));
        };

        // Expose animateCarousel to be used outside (for inline slide nav on video)
        const animateCarousel = (direction) => {
            const xVal = gsap.getProperty(proxyRef.current, "x");
            const newX = gsap.utils.snap(boxWidth)(xVal + direction * boxWidth);
            gsap.to(proxyRef.current, {
                duration: 0.8,
                x: newX,
                onUpdate: () => {
                    updateProgress();
                    updateCurrentIndex();
                },
            });
        };
        animateCarouselRef.current = animateCarousel;

        const updateProgress = () => {
            animationRef.current.progress(gsap.utils.wrap(0, 1)(gsap.getProperty(proxyRef.current, "x") / wrapWidth));
        };

        const snapToBox = (directionX) => {
            const direction = directionX === "left" ? -1 : 1;
            const xVal = gsap.getProperty(proxyRef.current, "x");
            const newX = gsap.utils.snap(boxWidth)(xVal + direction * boxWidth);
            gsap.to(proxyRef.current, {
                duration: 0.8,
                x: newX,
                onUpdate: () => {
                    updateProgress();
                    updateCurrentIndex();
                },
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

    // Helper to detect video slide
    const VideoNavButtons = ({className = ""}) => (
        <div
            className={`
                absolute flex items-center justify-between w-full 
                top-1/2 left-0 z-50 
                px-2 pointer-events-none
                ${className}
            `}
            style={{
                transform: 'translateY(-50%)',
            }}
        >
            <button
                tabIndex={-1}
                type="button"
                className="video-nav-btn video-nav-btn-left flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100
                    shadow border border-gray-200 hover:border-gray-400
                    p-1.5 transition-all focus:outline-none pointer-events-auto"
                style={{
                    pointerEvents: 'auto',
                }}
                aria-label="Previous slide"
                onClick={e => {
                    e.stopPropagation();
                    if (animateCarouselRef.current) animateCarouselRef.current(1);
                }}
            >
                <ArrowBackIosNewIcon fontSize="medium" style={{ color: "#333" }} />
            </button>
            <button
                tabIndex={-1}
                type="button"
                className="video-nav-btn video-nav-btn-right flex items-center justify-center rounded-full bg-white bg-opacity-80 hover:bg-opacity-100
                    shadow border border-gray-200 hover:border-gray-400
                    p-1.5 transition-all focus:outline-none pointer-events-auto"
                style={{
                    pointerEvents: 'auto',
                }}
                aria-label="Next slide"
                onClick={e => {
                    e.stopPropagation();
                    if (animateCarouselRef.current) animateCarouselRef.current(-1);
                }}
            >
                <ArrowForwardIosIcon fontSize="medium" style={{ color: "#333" }} />
            </button>
        </div>
    );

    // Prepare all slides: main thumbnail, carousel media, then the single yt video (if any)
    const carouselSlides = [
        <div className="carousel-item h-full thumbnail flex xs:flex-col gap-5 items-start" key="main-thumbnail">
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
    ];

    // Add images if present
    if (work.fields.media && Array.isArray(work.fields.media)) {
        carouselSlides.push(
            ...work.fields.media.map((item) => (
                <div className="carousel-item non-thumb" key={item.sys.id}>
                    <ImageWithPlaceholder
                        src={`https:${item.fields.file.url}`}
                        alt={item.fields.title}
                        objectfit={'contain'}
                    />
                </div>
            ))
        );
    }

    // Add a single YouTube video link as the final slide if present
    // (TEST: always add the example youtu.be video to test the parsing as per the prompt)
    const alwaysTestYoutubeUrl = "";
    const alwaysTestYoutubeId = getYoutubeId(alwaysTestYoutubeUrl);

    if (alwaysTestYoutubeId) {
        carouselSlides.push(
            <div className="carousel-item video-slide flex items-center justify-center bg-[#FFFDEB] w-full h-full relative" key={`video_test_9kzE8isXlQY`}>
                <iframe
                    className="w-full h-full"
                    width="100%"
                    height="100%"
                    style={{ aspectRatio: '16/9', borderRadius: 0, background: "#111" }}
                    src={`https://www.youtube.com/embed/${alwaysTestYoutubeId}?rel=0&modestbranding=1`}
                    title={"Test YouTube Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
                <VideoNavButtons />
            </div>
        )
    }

    if (videoLink) {
        const ytId = getYoutubeId(videoLink.fields.url);
        if (ytId) {
            carouselSlides.push(
                <div className="carousel-item video-slide flex items-center justify-center bg-[#FFFDEB] w-full h-full relative" key={`video_${videoLink.sys.id}`}>
                    <iframe
                        className="w-full h-full"
                        width="100%"
                        height="100%"
                        style={{ aspectRatio: '16/9', borderRadius: 0, background: "#111" }}
                        src={`https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`}
                        title={videoLink.fields.title || 'YouTube Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                    <VideoNavButtons />
                </div>
            );
        }
    }

    return (
        <div className='work-detail'>
            <Header navColor={"#FFFDEB"} />
            <CustomCursor />
            <div className='work-details '>
                <div className="wrapper-container mid:mt-24 mt-20 lg:mx-10 mx-3">
                    <div className="carousel-container " id="wrapper" ref={wrapperRef}>
                        <div className="carousel-items">
                            <div className={`carousel-slider---overlay flex bg-black w-full h-full opacity-0 z-50 absolute xs:hidden ${currentIndex == 2 && videoLink ? 'pointer-events-none' : ''}`}>
                                <div className={`carousel-slider--left hover-target  w-6/12`}></div>
                                <div className={`carousel-slider--right hover-target  w-6/12`}></div>
                            </div>
                            {carouselSlides}
                        </div>
                    </div>
                    <div className='drag-indicator flex absolute right-0 -bottom-16  border border-black rounded-full w-20 h-12 justify-center items-center xs:flex '>
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
