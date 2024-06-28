import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import ImageViewModel from '@/components/ImageViewModel';
import { neueHass } from '@/utils/font';
import { createClient } from 'contentful';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { Draggable } from "gsap/Draggable";
import { Linear } from 'gsap';
import Spinner from '@/components/Spinner';
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
   
    useEffect(() => {
        var wrapper = document.querySelector(".carousel-container");
        var boxes = document.querySelectorAll(".carousel-item");
        var rightBtn = document.querySelector(".carousel-slider--right");
        var leftBtn = document.querySelector(".carousel-slider--left");


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
        gsap.set(proxy,{x:window.innerWidth})
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

        Draggable.create(proxy, {
            type: "x",
            trigger: wrapper,
            throwProps: true,
            onPress: function () {
                this.startX = this.x;
            },
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            snap: { x: snapBox },
            inertia: true,
            cursor:'ew-resize',
            onDragEnd: snapToBox
        });

        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case "ArrowLeft":
                    animateCarousel(1)
                    break;
                case "ArrowRight":
                    animateCarousel(-1)
                    break;

                default:
                    break;
            }
        })
        rightBtn.addEventListener('click',() => animateCarousel(-1))
       leftBtn.addEventListener('click',() => animateCarousel(1))
        function updateProgress() {
            console.log(props("x")/wrapWidth)
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
        function snapToBox() {
            const direction = this.getDirection("velocity") === "left" ? -1 : 1
            gsap.to(proxy, {
                duration: 0.8,
                x: snapBox(props("x") + direction * boxWidth),
                onUpdate: updateProgress
            });
        }
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
            <div className='work-details'>
                <div className="wrapper-container mid:mt-24 mt-20 lg:mx-10 mx-3">
                    <div className="carousel-container " id="wrapper">
                        <div className="carousel-items">
                            <div className='carousel-slider---overlay flex bg-black w-full h-full opacity-0 z-50 absolute'>
                                <div className='carousel-slider--left w-6/12'></div>
                                <div className='carousel-slider--right w-6/12'></div>
                            </div>
                            <div className="carousel-item overflow-y-scroll thumbnail flex xs:flex-col gap-5 items-start">
                                <div className='relative w-9/12 xs:w-full h-full'>
                                    <ImageWithPlaceholder 
                                        src={`https:${work.fields.thumbnail.fields.file.url}`}
                                        alt={work.fields.title}
                                        objectfit={work.fields.thumbnailOrientation ? 'none' : 'cover'}
                                    />
                                </div>
                                <div className={`work-description w-3/12 xs:w-full  ${neueHass.className}`}>
                                    <div className='work-title 2xl:text-4xl text-2xl'>
                                        <h1>{work.fields.title}</h1>
                                    </div>
                                    <div className='work-date text-md opacity-75 my-5'>
                                        <h1>{formatDate(work.fields.date)}</h1>
                                    </div>
                                    <div className='work-info lg:text-sm xl:text-sm '>
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
                </div>
            </div>
             |<div className='pin-spacer'></div>                           
        </div>
    );
};

export default WorkDetails;