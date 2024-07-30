'use client';
import React from "react";
import Para from "./Para";
import Image from 'next/image';
import hands from './images/hands.png'
import{useState} from 'react';


function BImage2(){
    const [isHovered, setIsHovered] = useState(false);
    const [movingTextCount, setMovingTextCount] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMovingTextCount(0); // Reset the moving text count
    };

    const handleMouseMove = () => {
        if (isHovered && movingTextCount < 3) {
            setMovingTextCount(prevCount => prevCount + 1); // Increment text count on mouse move, up to 3
        }
    };

    return (
        <div className="bgimg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div style={{ position: 'relative' }}>
                <Image src={hands} alt="Hands Image" width={650} height={383} />
                {isHovered && (
                    <div className="moving-text-container">
                        {Array.from({ length: movingTextCount }).map((_, index) => (
                            <div key={index} className={`moving-text`}>PROJECT ONE PROJECT ONE PROJECT ONE</div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <Para />
            </div>
        </div>
    );;
}

export default BImage2;