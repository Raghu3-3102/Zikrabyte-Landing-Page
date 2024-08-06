import React from 'react';
import './OurWork.css';
import Image from 'next/image';

export const OurWork = () => {

    const imgList = [
        "/assets/img/ourWork/Screens/screen1.png",
        "/assets/img/ourWork/Screens/screen2.png",
        "/assets/img/ourWork/Screens/screen3.png",
        "/assets/img/ourWork/Screens/screen4.png",
        "/assets/img/ourWork/Screens/screen5.png",
        "/assets/img/ourWork/Screens/screen6.png",
        "/assets/img/ourWork/Screens/screen7.png",
        "/assets/img/ourWork/Screens/screen8.png",
        "/assets/img/ourWork/Screens/screen9.png",
    ]

  return (
    <div className="ourWork_section">
        <div className="heading_cnt">
            <h2>Our Works</h2>
        </div>
        <div className="outerImgCnt mt-8">
        <div className="img_cnt">

            {imgList.map((img, index) => (
                    <Image  key={index}  src={img} alt={`our work ${index}`} width={650} height={300} />
            ))}

            {/* <Image src="/assets/img/ourWork/Screens/screen1.png" alt="our work 1" width={300} height={200} /> */}
        </div>    
        </div>                                  
    </div>
  )
}
