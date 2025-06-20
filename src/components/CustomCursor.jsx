import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const cursor = useRef(null)
    const cursorFollower = useRef(null)
    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseover', onMouseOver);
            document.addEventListener('mouseout', onMouseOut);
        };
        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
        const onMouseMove = (e) => {
            setMouse({ x: e.clientX + 35, y: e.clientY + 30 })
            setPosition({ x: position.x += (mouse.x - position.x) / 9, y: position.y += (mouse.y - position.y) / 9 });

            if (e.target.matches('.hover-target')) {
                setHovered(true);

            }
        };
        const onMouseOver = (e) => {
            if (e.target.matches('.hover-target')) {
                setHovered(true);
            }
        };
        const onMouseOut = (e) => {
            if (e.target.matches('.hover-target')) {
                setHovered(false);
            }
        };
        addEventListeners();
        return () => removeEventListeners();
    })

    return (
        <div>
            <div className={`cursor flex justify-center items-center ${hovered ? 'mouse-hover' : ''}`} style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }} ref={cursor}>
                <p className='text-sm'>Drag</p>
            </div>
        </div>
    )
}

export default CustomCursor