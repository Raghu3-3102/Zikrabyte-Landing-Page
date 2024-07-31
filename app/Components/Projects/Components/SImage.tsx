'use client';
import React from "react";
import Para from "./Para";
import Image from 'next/image';
import comp from './images/computer.png'
import{useState} from "react";

function Simage(){
    const [lines, setLines] = useState([]);
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
        if (!mouseMovedRef.current && lineCount < 3) { 
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
        <div className="bgimg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
            <div style={{ position: 'relative' }}>
<<<<<<< HEAD
                <Image 
                    src={comp} 
                    alt="Hands Image" 
                    layout="intrinsic" 
                    width={415} 
                    height={456} 
                    className="responsive-image2"
                />
                <div className="moving-text-container2">
                    {lines.map((line) => (
                        <div key={line.id} className={`moving-text ${line.direction}`}>
                            PROJECT ONE PROJECT ONE PROJECT ONE
                        </div>
                    ))}
                </div>
=======
                <Image src={comp} alt="Hands Image" width={450} height={450} />
                {isHovered && (
                    <div className="moving-text-container2">
                        {Array.from({ length: movingTextCount }).map((_, index) => (
                            <div key={index} className="moving-text2">PROJECT ONE PROJECT ONE </div>
                        ))}
                    </div>
                )}
>>>>>>> origin/main
            </div>
            <div>
                <Para />
            </div>
        </div>
    );
}

export default Simage;
