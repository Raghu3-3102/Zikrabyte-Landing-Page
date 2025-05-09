'use client';
import React, { useEffect, useRef } from 'react'
import AOS from "aos";
import './Offer2.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Offer2 = () => {

  useEffect(() => {
    AOS.init({

    });
    AOS.refresh();

    
    
  }, []);

  const boxRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.from(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none none",
        // markers: true,
      },
      y: 100,
      // rotation: 360,
      duration: 2,
      
    });
  }, []);
  
  const data = [{
    'title': 'Strategy',
    'description': `All our websites start with defining your <span style="color:var(--saffron-color)">business and presenting</span> a strategy to increase traffic and/or sales. Extensive research into your industry and competition will highlight the most lucrative ways of bringing the right customers to your site, this is used to direct every aspect of design and the way you present your business. It’s fundamental to every project we work on.`
  },
{
  'title': 'Branding',
  'description': 'Branding is much more than just a logo and aesthetics. It’s the foundation of the business image and the way it’s presented to your customers. Good branding is critical in creating a sense of trust, credibility and authority. We believe that strong branding should lead website design.'
},
{
  'title': 'Graphic Design',
  'description': 'Our Graphic strategy not only drives the tone, messaging and structure of your website, it helps communicate authority and expertise to search engines, arguably the single biggest ranking factor today. With your guidance, we’ll create high-quality branded copy that is optimised for SEO and engages your target audience. Once we have a content strategy in place, we can then implement the visual design.'
},
{
  'title': 'Web Design',
  'description': 'We’re confident in our ability to design a website that you’ll love. That’s why we offer unlimited concepts and revisions throughout the design process. We’ll work with you until you’re completely happy with the visuals. We’ve operated in this way for the last ten years and feel it’s fundamental to you having full confidence in us.'
},
{
  'title': 'Web Development',
  'description': 'Writing concise code for a bespoke website is critical to loading speed, user experience, search ranking performance and getting clicks in your online advertising. It’s the foundation of the success of a website that drives sales and marketing. From websites to mobile applications, if you can imagine it we can build it.'
},
]



  return (
    // Full Offer2 Section with 2 Containers (Heading and Services)
    <div className='offer2_section flex flex-row flex-nowrap ' 
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          // data-aos-delay="200"
          >
      

    {/* Heading Container Starts */} 
    <div className="heading_cnt lg:w-2/5 flex flex-col justify-center items-center text-center lg:text-right ">
      <h3 className='text-7xl font-medium '>
        What We <br/> Offer
      </h3>
      <p className='text-xl mt-3'>
      More than just web designers.
      </p>
      
      <div className="btn service-btn md:inline-flex p-2 rounded flex-nowrap">
      <span className='uppercase'>View Services</span><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3868 7.58398L4.93262 17.0839" stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9277 4.80786L21.3794 7.58428L18.5586 18.0251" stroke="#0F0F0F" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
    </div>
    {/* Heading Container Ends */}


    {/* Services Container Starts */}
    <div className="service_cnt w-3/5 max-h-screen overflow-y-scroll sm:my-4 overflow-x-hidden scrollbar-hide"
          data-aos="zoom-in-up">

    {/* <div className="service-card p-7 border border-solid border-black">
      <h3 className="service_title text-3xl font-semibold ">
        Stretagy
      </h3>
      <p className='service_description'>
      All our websites start with defining your <span className='text-rose-600'>business and presenting a strategy</span> to increase traffic and/or sales. Extensive research into your industry and competition will highlight the most lucrative ways of bringing the right customers to your site, this is used to direct every aspect of design and the way you present your business. It’s fundamental to every project we work on.
      </p>
    </div> */}

    {data.map((_, index) => (
        <div key={index}
          
         className="service-card p-7 border border-solid border-black"> 
        <h3 className="service_title text-3xl font-semibold ">
        {_.title}
        </h3>
        <p ref={boxRef} className="service_description" dangerouslySetInnerHTML={{ __html: _.description }}>
        
        </p>
      </div>  
      ))}
    

    </div>
    {/* Services Container Ends */}


    </div>
  )
}
