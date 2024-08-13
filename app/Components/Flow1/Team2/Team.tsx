"use client";

import React, { useState } from "react";
import Circle from "./Circle";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imgSrc: string;
}

export const Team2 = () => {
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<TeamMember | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Christopher",
      role: "Designer",
      imgSrc: "/assets/images/t1.jpg",
    },
    {
      id: 2,
      name: "Jazzmine",
      role: "Developer",
      imgSrc: "/assets/images/t2.jpg",
    },
    {
      id: 3,
      name: "Stephine",
      role: "Tester",
      imgSrc: "/assets/images/t3.jpg",
    },
    {
      id: 4,
      name: "William",
      role: "Manager",
      imgSrc: "/assets/images/t4.jpg",
    },
  ];

  const handleImageClick = (member: TeamMember) => {
    setSelectedTeamMember(member);
  };

  const handleExitClick = () => {
    setSelectedTeamMember(null);
  };

  if (selectedTeamMember) {
    return (
      <div className="w-full h-1/4 md:h-2/4 lg:h-screen flex animate-fadeIn flex-row justify-center items-center bg-gray-300 my-5 md:my-10">
        <div className="w-5/12 px-5 md:px-10 mb-5 md:mb-0">
          <Image
            src={selectedTeamMember.imgSrc}
            alt={selectedTeamMember.name}
            width={320}
            height={440}
            className="w-11/12 md:w-8/12 border-8 border-solid border-zik-orange rounded-xl mx-auto"
          />
        </div>
        <div className="w-7/12 h-auto md:h-full flex px-5 lg:px-20 py-5 md:py-10 lg:pr-40 flex-col bg-zik-orange">
          <button
            className="text-white text-sm md:text-2xl text-right font-light p-2 md:p-5 lg:pb-20 cursor-pointer"
            onClick={handleExitClick}
          >
            (close)
          </button>
          <h1 className="text-white text-xl md:text-3xl font-light mb-2 md:mb-5">
            {selectedTeamMember.role}
          </h1>
          <p className="text-2xl md:text-6xl lg:text-8xl font-extrabold text-black">
            {selectedTeamMember.name}
          </p>
          <p className="text-white font-light text-xs md:text-xl lg:text-3xl text-justify md:font-medium lg:font-semibold md:leading-7 lg:leading-10  pt-5 md:pt-10 lg:pt-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
            nulla eget massa facilisis venenatis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam vel nulla eget massa facilisis
            venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vel nulla eget massa facilisis venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vel nulla eget massa facilisis venenatis.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center text-base md:text-3xl lg:text-6xl font-extrabold px-5 md:px-10 leading-tight mx-3 mt-10 md:my-10 md:mx-10 ">
        Our teams are led by bold creative vision and multi-disciplinary
        experience
      </div>
      <div className="flex flex-row justify-center md:justify-between overflow-hidden gap-4 md:gap-8 mx-5 md:mx-10 my-6 md:my-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative flex flex-col items-center cursor-pointer image-container"
            onClick={() => handleImageClick(member)}
          >
            <Image
              src={member.imgSrc}
              alt={`Image of ${member.name}`}
              width={320}
              height={440}
              className="w-80 h-[120px] md:w-72 md:h-[250px] lg:w-96 lg:h-[440px]"
            />
            <h2 className="text-xs md:text-2xl lg:text-5xl font-bold lg:font-extrabold pt-5">
              {member.name}
            </h2>
            <div className="absolute w-8 h-8 md:w-16 md:h-16 bg-orange-500 text-xs md:text-base text-black rounded-full flex justify-center items-center opacity-0 transform -translate-x-1/2 -translate-y-1/2 circle">
              View
            </div>
          </div>
        ))}
      </div>
      <Circle />
    </div>
  );
};

export default Team2;
