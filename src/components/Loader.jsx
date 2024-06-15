import React from 'react'
import gsap, { Power1 } from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP);

const Loader = () => {
    useGSAP(() => {
        gsap.from(
            '.block',
            {
                width: "5%",
                ease: Power1.easeIn,
                duration:0.8,
                delay: 0.1,
                stagger:0.1     ,
            }
        )
    })
    return (
        <div class="overlay">
            <div class="block block-1"></div>
            <div class="block block-2"></div>
            <div class="block block-3"></div>
            <div class="block block-4"></div>
            <div class="block block-5"></div>
            <div class="block block-6"></div>
            <div class="block block-7"></div>
            <div class="block block-8"></div>
            <div class="block block-9"></div>
            <div class="block block-10"></div>
            <div class="block block-11"></div>
            <div class="block block-12"></div>
            <div class="block block-13"></div>
            <div class="block block-14"></div>
            <div class="block block-15"></div>
            <div class="block block-16"></div>
            <div class="block block-17"></div>
            <div class="block block-18"></div>
            <div class="block block-19"></div>
            <div class="block block-20"></div>
            <div class="block block-21"></div>
        </div>
    )
}

export default Loader