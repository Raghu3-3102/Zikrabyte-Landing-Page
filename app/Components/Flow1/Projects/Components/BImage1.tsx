'use client';
import React from "react";
import Para from "./Para";
import Image from 'next/image';
import comp from './images/computer.png';
import {useState,useRef} from 'react';

interface Line {
    direction: 'left' | 'right';
    id: number;
}

function BImage1() {
    const [lines, setLines] = useState<Line[]>([]);
    const [lineCount, setLineCount] = useState(0);
    const mouseMovedRef = useRef(false);

    const handleMouseEnter = () => {
        setLines([]);
        setLineCount(0);
        mouseMovedRef.current = false;
    };

    const handleMouseLeave = () => {
        setLines([]);
        setLineCount(0);
        mouseMovedRef.current = false;
    };

    const handleMouseMove = () => {
        if (!mouseMovedRef.current && lineCount < 5) { 
            setLines(prevLines => [
                ...prevLines,
                { direction: prevLines.length % 2 === 0 ? 'right' : 'left', id: Date.now() }
            ]);
            setLineCount(prevCount => prevCount + 1);
            mouseMovedRef.current = true;
        } else if (mouseMovedRef.current) {
            mouseMovedRef.current = false;
        }
    };

    return (
        <div 
            className="bgimg" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            onMouseMove={handleMouseMove}
        >
            <div style={{ position: 'relative' }}>
                <Image 
                    src={comp} 
                    alt="Hands Image" 
                    width={610} 
                    height={353} 
                    className="responsive-image" 
                />
                <div className="moving-text-container">
                    {lines.map((line) => (
                        <div key={line.id} className={`moving-text ${line.direction}`}>
                            PROJECT ONE PROJECT ONE PROJECT ONE
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Para />
            </div>
        </div>
    );
}



export default BImage1;