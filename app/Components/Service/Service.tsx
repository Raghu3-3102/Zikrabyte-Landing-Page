"use client";
import React, { useEffect } from "react";
import "./Service.css";
import AOS from "aos";
import { Card } from "./Card/Card";
import { title } from "process";
import { describe } from "node:test";

export const Service = () => {
  useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);

  const card1= {
    title: "Graphics Design",
    description: "Improve your digital platforms with results driven uxui.",
    img: "assets\\img\\services\\GraphicsDesign.png"
  }

  const cards = [
    {
      title: 'UI/UX Design',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\UiUxDesign.png"
    },
    {
      title: "Graphics Design",
      description: "Improve your digital platforms with results driven uxui.",
      img: "assets\\img\\services\\GraphicsDesign.png"
    },  
    {
      title: 'Content Management System',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\CMS.png"
    },
    {
      title: 'Web Development',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\WebDevelopment.png"
    },
    {
      title: 'Social Media Marketing',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\SMM.png"
    },
    {
      title: 'E-Commerce Web Development',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\eComDevelopment.png"
    },
    {
      title: 'Digital Branding & Identity',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\DigiralBrandIdentity.png"
    },
    {
      title: 'Search Engine Optimisation',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\SEO.png"
    },
    {
      title: 'Web Development',
      description: 'Improve your digital platforms with results driven uxui.',
      img: "assets\\img\\services\\WebDevelopment2.png"
    },
  ]

  const getRandomGradient = () => {
    const colors = [
        'rgba(255, 0, 149, 0.863)',
        'rgba(130, 20, 255, 0.8)',
        'rgba(229, 255, 0, 0.863)',
        'rgba(20, 255, 196, 0.8)',
        'rgba(255, 115, 0, 0.863)',
        'rgba(255, 0, 242, 0.863)',
    ];

    const randomIndex1 = Math.floor(Math.random() * colors.length);
    const randomIndex2 = Math.floor(Math.random() * colors.length);

    return `radial-gradient(${colors[randomIndex1]}, transparent, transparent)`;
};

  return (
    <div className="service_section" data-aos="fade-up">
      <img className="bg_img" src="assets\img\Service_bg.png" alt="" />

      <div className="heading_cnt text-center mt-32">
        <div className="heading_text_cnt">
          <h2 className="text-white text-5xl font-medium">Our Service</h2>
          <p className="text-white text-xl mt-5">
            Data guides us. With the perfect balance of performance,
            <br />
            creativity and tech, we&apos;re here to fuel your growth journey.
          </p>
        </div>
        <div className="btn_cnt">
          <div className="btn p-4">View All Services</div>
        </div>
      </div>

      <div className="cards_cnt">
        <div className="card_cnt_col col1">
          <Card card={cards[0]}  gradient={getRandomGradient()} /> 
          <Card card={cards[3]}  gradient={getRandomGradient()}/> 
          <Card card={cards[6]}  gradient={getRandomGradient()}/> 
        </div>
        <div className="card_cnt_col col2">
          <Card card={cards[1]}  gradient={getRandomGradient()}/> 
          {/* <Card />  */}
          <Card card={cards[4]}  gradient={getRandomGradient()}/> 
        </div>
        <div className="card_cnt_col col3">
          <Card card={cards[2]}  gradient={getRandomGradient()}/> 
          <Card card={cards[5]}  gradient={getRandomGradient()}/> 
          <Card card={cards[7]}  gradient={getRandomGradient()}/> 
        </div>
        <div className="">

       <Card card={cards[8]}   gradient={getRandomGradient()}/>
        </div>
      </div>
    </div>
  );
};
