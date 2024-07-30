'use client';
import React from "react";
import Para from "./Para";
import Image from 'next/image';
import comp from './images/computer.png'
import{useState} from "react";

function Simage(){
    const [isHovered, setIsHovered] = useState(false);
    const [movingTextCount, setMovingTextCount] = useState(0);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMovingTextCount(0);
    };

    const handleMouseMove = () => {
        if (isHovered && movingTextCount < 3) {
            setMovingTextCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div className="bgimg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div style={{ position: 'relative' }}>
                <Image src={comp} alt="Hands Image" width={420} height={370} />
                {isHovered && (
                    <div className="moving-text-container2">
                        {Array.from({ length: movingTextCount }).map((_, index) => (
                            <div key={index} className="moving-text2">PROJECT ONE PROJECT ONE </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <Para />
            </div>
        </div>
    );
}

export default Simage;