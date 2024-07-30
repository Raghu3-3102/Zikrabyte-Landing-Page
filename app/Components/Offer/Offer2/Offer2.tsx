'use client';
import React, { useEffect } from 'react'
import AOS from "aos";
import './Offer2.css'


export const Offer2 = () => {

  useEffect(() => {
    AOS.init({

    });
    AOS.refresh();
    
  }, []);

  const data = {
    'title': 'Service Title',
    'description': `All our websites start with defining your <span style="color:var(--saffron-color)">business and presenting</span> a strategy to increase traffic and/or sales. Extensive research into your industry and competition will highlight the most lucrative ways of bringing the right customers to your site, this is used to direct every aspect of design and the way you present your business. It’s fundamental to every project we work on.`
  }

  return (
    // Full Offer2 Section with 2 Containers (Heading and Services)
    <div className='offer2_section flex flex-row flex-nowrap ' 
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          // data-aos-delay="200"
          >
      

    {/* Heading Container Starts */} 
    <div className="heading_cnt w-2/5 flex flex-col justify-center items-center text-right ">
      <h3 className='text-7xl font-medium'>
        What We <br/> Offer
      </h3>
      <p className='text-xl mt-3'>
      More than just web designers.
      </p>
      
      <div className="btn service-btn inline-flex p-2 rounded ">
      <span className='uppercase'>View Services</span><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3868 7.58398L4.93262 17.0839" stroke="#0F0F0F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9277 4.80786L21.3794 7.58428L18.5586 18.0251" stroke="#0F0F0F" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
    </div>
    {/* Heading Container Ends */}


    {/* Services Container Starts */}
    <div className="service_cnt w-3/5 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide"
          data-aos="zoom-in-up">

    <div className="service-card p-7 border border-solid border-black">
      <h3 className="service_title text-3xl font-semibold ">
        Stretagy
      </h3>
      <p className='service_description'>
      All our websites start with defining your <span className='text-rose-600'>business and presenting a strategy</span> to increase traffic and/or sales. Extensive research into your industry and competition will highlight the most lucrative ways of bringing the right customers to your site, this is used to direct every aspect of design and the way you present your business. It’s fundamental to every project we work on.
      </p>
    </div>

    {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="service-card p-7 border border-solid border-black"> 
        <h3 className="service_title text-3xl font-semibold ">
        {data.title}
        </h3>
        <p className="service_description" dangerouslySetInnerHTML={{ __html: data.description }}>
        
        </p>
      </div>  
      ))}
    

    </div>
    {/* Services Container Ends */}


    </div>
  )
}
