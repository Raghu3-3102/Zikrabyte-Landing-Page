'use client'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import './Offer1.css';
import offer1 from '../../../../../public/assets/img/offer1.png';


export const Offer1 = () => {

  useEffect(() => {
    AOS.init({

    });
    AOS.refresh();
    
  }, []);

  
  return (
    <div className='offer1_section p-10 relative'  
         data-aos="fade-up"
         data-aos-duration="500"
         data-aos-easing="ease-in-out"
         data-aos-offset="200"
         >
        <div className="offer1_text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="250"
              data-aos-delay="100"
              >
            <h2 className='text-4xl font-semibold '>What We Offer</h2>
            <p className='xl:w-1/2 text-xl mt-5 ' >
            {/* lg:w-3/4 */}
            We are a based web design team. Combining high-end design with strategic
            SEO to elevate brands and increase website traffic. We&apos;ll use the same methods
            that helped you find our site, to bring people to yours.
            </p>
        </div>
        <div className="offer1_img_cnt mt-10"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="200"
              data-aos-delay="100"
              // data-aos-anchor-placement="top-center"
        >
            <Image src={offer1} alt="Offer1"/>
        </div>
    </div>
  )
}
