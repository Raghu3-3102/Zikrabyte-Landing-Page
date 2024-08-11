import React from "react";
import Image from "next/image";
import british from "../../../../public/assets/client_img/british.png";
import site from "../../../../public/assets/client_img/site.png";
import apple from "../../../../public/assets/client_img/apple.png";
import star from "../../../../public/assets/client_img/star.png";

export const Client = () => {
  return (
    <div className="flex flex-wrap items-center lg:my-24 ml-5  md:ml-10 lg:ml-20 mx-auto max-w-screen-xl">
      <div className="w-1/2 pb-0 pr-0 md:pb-6 lg:pr-6 p-6 pl-0">
        <div className="pt-0  pl-0">
          <p className="text-xs uppercase sm:text-sm lg:text-lg font-bold mb-2">We made design for</p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold my-4 md:my-7">Our Clients</h1>
          <p className="text-xs sm:text-base lg:text-lg w-auto lg:w-3/4 text-gray-700">
            We are working with a diverse range of clients, spanning from
            globally renowned entities with millions of users to innovative
            startups seeking for MVP design solutions.
          </p>
        </div>
      </div>
      <div className="w-1/2 pl-0 md:pl-6 p-6 flex flex-wrap items-center justify-around">
        <div className="flex flex-col items-center justify-center p-6">
          <Image
            src={british}
            alt="British Airways"
            width={150}
            height={150}
            className="w-16 md:mb-6 md:w-20 lg:w-40"
          />
          <Image
            src={apple}
            alt="Apple Logo"
            width={120}
            height={120}
            className="w-10 pt-5  md:w-20 md:pt-40 lg:w-32 lg:pt-40"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-6">
          <Image src={site} alt="SiteJabber" width={150} height={150} className="w-16 md:w-20 lg:w-40"/>
          <Image
            src={star}
            alt="Starbucks"
            width={120}
            height={120}
            className="w-10 pt-5  md:w-20 md:pt-48 lg:w-32 lg:pt-48"
          />
        </div>
      </div>
    </div>
  );
};
