'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import './Home.css';
import emoji from '../../../public/assets/img/emoji.gif';
import swiperWrapper from '../../../public/assets/img/swiperWrapper.png';

export const Home = () => {

  

  const [isDesktopScreen, setDesktopScreen] = useState(false);
  const [isMobileScreen, setMobilecreen] = useState(false);


  useEffect(() => {
    // Check if window is defined
    if (typeof window !== 'undefined') {
        const handleResize = () => {
          setDesktopScreen(window.innerWidth < 1280);
        };

        // Set the initial state
        handleResize();

        window.addEventListener('resize', handleResize);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }
}, []);


  return (
    <div className='home_section flex items-center flex-col  w-full mx-24'>

        <div className="headline flex justify-center items-center flex-col">
            <h1 className="text-9xl font-bold  w-[1500px]">FOR AN {isDesktopScreen ? <br /> : null} INCREDIBLE
            NEXT {isDesktopScreen ? <br /> : null} GEN SOLUTIONS</h1>
            <p className="headline_tagline text-2xl w-[1000px] mt-10 ">
            We are a based web design team. Combining high-end design with strategic SEO to elevate brands and increase website traffic. We’ll use the same methods that helped you find our site, to bring people to yours.    
            </p>

        </div>
        <div className="line">
        <svg width="1920" height="1119" viewBox="0 0 1920 1119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-169 1117C-136.775 1029.2 -116.623 775.711 -57.8648 761.418C-37.2153 756.395 -16.0317 760.744 4.22261 768.422C90.7182 801.212 147.697 830.828 236.278 843.865C438.963 873.695 672.67 836.294 844.036 612C920.134 512.399 806.79 446.615 834 281.5C871.5 275.5 909 219 890.5 212.5C868.669 204.829 851.078 219.309 850.5 241C849.754 268.962 882.136 250 919.214 264C973.593 284.533 1222.58 475.349 1282.39 458.16C1480.08 401.338 1678.75 342.052 1874.1 261.582C1987.65 214.806 2170.59 98.9731 2275 2" stroke="#FF7542" strokeWidth="3" strokeLinecap="round"/>
</svg>

        </div>



<div className="emoji emoji1">
  <Image src={emoji} alt="emoji1" width={75} height={75} unoptimized/>
</div>
<div className="emoji emoji2">                          
  <Image src={emoji} alt="emoji2" width={75} height={75} unoptimized />
</div>

<div className="swiper-wrapper">  
  <Image src={swiperWrapper} alt="swiper-wrapepr" />
</div>
    </div>

    
  )
}
